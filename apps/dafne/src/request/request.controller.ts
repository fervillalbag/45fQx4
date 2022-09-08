import { Response } from 'express'
import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common'

import { RequestService } from './request.service'
import { CreateRequestDto } from './dto/create-request.dto'

@Controller('request')
export class RequestController {
  constructor(private service: RequestService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: CreateRequestDto) {
    const request = await this.service.create(dto)
    return res.status(HttpStatus.OK).json({
      message: 'Created!',
      success: true,
      data: request,
    })
  }
}
