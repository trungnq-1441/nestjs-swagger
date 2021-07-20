import { PartialType } from '@nestjs/swagger';
import { CraeteBotDTO } from './create-bot.dto';

export class UpdateBotDTO extends PartialType(CraeteBotDTO) {

}
