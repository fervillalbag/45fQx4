import * as argon from 'argon2'
import { isValidObjectId, Model } from 'mongoose'
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { JwtService } from '@nestjs/jwt'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signInToken(id: string, email: string, fullname: string) {
    const payload = { id, email, fullname }
    const config = {
      secret: process.env.SECRET_KEY,
      expiresIn: process.env.EXPIRES_IN_KEY,
    }

    return this.jwtService.signAsync(payload, config)
  }

  async register(dto: CreateUserDto) {
    const passwordHash = await argon.hash(dto.password)

    const foundUser = await this.userModel.findOne({ email: dto.email })
    if (foundUser)
      throw new ForbiddenException(`Email ${foundUser.email} is already in use`)

    try {
      const user = await this.userModel.create({
        ...dto,
        password: passwordHash,
        is_verified: {
          is_valid: 'BASIC',
          updated_at: new Date().toISOString(),
        },
        is_premium: {
          is_valid: false,
          updated_at: new Date().toISOString(),
        },
        created_at: new Date().toISOString(),
      })

      return this.signInToken(user._id, user.email, user.fullname)
    } catch (error) {
      this.handleException(error)
    }
  }

  async login(dto: CreateUserDto) {
    const foundUser = await this.userModel.findOne({ email: dto.email })
    if (!foundUser)
      throw new NotFoundException(
        `Username ${foundUser.username} does not exist`,
      )

    const pwMatches = await argon.verify(foundUser.password, dto.password)
    if (!pwMatches)
      throw new ForbiddenException(`The credentials are not correct`)

    try {
      return this.signInToken(
        foundUser._id,
        foundUser.email,
        foundUser.fullname,
      )
    } catch (error) {
      this.handleException(error)
    }
  }

  findAll() {
    return this.userModel.find()
  }

  async findOne(term: string) {
    let user: User

    try {
      if (isValidObjectId(term)) {
        user = await this.userModel.findById(term)
      }

      if (!user) {
        user = await this.userModel.findOne({ email: term })
      }

      if (!user) {
        user = await this.userModel.findOne({ username: term })
      }

      return user
    } catch (error) {
      this.handleException(error)
    }
  }

  async update(term: string, dto: UpdateUserDto) {
    const foundUser = await this.findOne(term)

    try {
      const user = await this.userModel.findByIdAndUpdate(
        term,
        { ...dto, messages: [...foundUser.messages, dto.messages] },
        { new: true },
      )

      return user
    } catch (error) {
      this.handleException(error)
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.userModel.deleteOne({ _id: id })

    if (deletedCount === 0)
      throw new NotFoundException(`User with id ${id} does not exist`)

    return `User with id ${id} deleted!`
  }

  // eslint-disable-next-line
  private handleException(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `User exists in db ${JSON.stringify(error.keyvalue)}`,
      )
    }

    console.log(error)

    throw new InternalServerErrorException(
      `Can't create User - Check server logs`,
    )
  }
}
