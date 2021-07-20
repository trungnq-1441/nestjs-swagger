import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BotEntity } from './bot.entity';
import { CraeteBotDTO } from './create-bot.dto';
import { UpdateBotDTO } from './update-bot.dto';

@Injectable()
export class BotService {
  constructor(
    @Inject('BOT_REPOSITORY') private readonly botRepository: Repository<BotEntity>,
  ) { }
  createOneBot(createBotDTO: CraeteBotDTO) {
    return this.botRepository.save(createBotDTO);
  }

  getBotList() {
    return this.botRepository.find({});
  }

  getDetailBot(id: number) {
    return this.botRepository.findOne(id);
  }

  updateBot(id: number, updateBotDTO: UpdateBotDTO) {
    return this.botRepository.update(id, updateBotDTO);
  }

  removeOneBot(id: number) {
    return this.botRepository.delete(id);
  }
}
