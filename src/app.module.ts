import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose/dist';

import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ServiceModule } from './service/service.module';
import { TicketModule } from './ticket/ticket.module';
import { MessageModule } from './message/message.module';
import { TeamModule } from './team/team.module';
import { ChatModule } from './chat/chat.module';
import { TransactionModule } from './transaction/transaction.module';
import { SaveModule } from './save/save.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    JwtModule,
    UserModule,
    ProductModule,
    ServiceModule,
    TicketModule,
    MessageModule,
    TeamModule,
    ChatModule,
    TransactionModule,
    SaveModule,
  ],
})
export class AppModule {}
