import { Connection } from 'typeorm';
import { BotEntity } from './bot.entity';

export const botProvider = [
  {
    provide: 'BOT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(BotEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
