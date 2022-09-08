import { Module } from '@nestjs/common'

import { RequestService } from './request.service'
import { RequestController } from './request.controller'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  imports: [PrismaService],
  providers: [RequestService],
  controllers: [RequestController],
})
export class RequestModule {}
