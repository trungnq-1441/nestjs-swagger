import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BotModule } from './bots/bot.module';
import { DatabaseModule } from './databases/database.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    DatabaseModule,
    BotModule,
    UserModule,
  ],
})
export class AppModule {}
