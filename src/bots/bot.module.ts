import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/databases/database.module';
import { BotController } from './bot.controller';
import { BotEntity } from './bot.entity';
import { botProvider } from './bot.provider';
import { BotService } from './bot.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BotEntity]),
    DatabaseModule,
  ],
  controllers: [BotController],
  providers: [...botProvider, BotService],
})
export class BotModule { }
