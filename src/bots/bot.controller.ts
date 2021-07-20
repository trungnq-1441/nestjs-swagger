import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BotService } from './bot.service';
import { CraeteBotDTO } from './create-bot.dto';
import { UpdateBotDTO } from './update-bot.dto';

@ApiTags('bots')
@Controller('bots')
export class BotController {
  constructor(
    private botSerivce: BotService,
  ) { }

  @Post()
  createOneBot(@Body() createBotDTO: CraeteBotDTO) {
    return this.botSerivce.createOneBot(createBotDTO);
  }

  @Get()
  @ApiOkResponse({ description: 'List all bots' })
  async getBotList() {
    return await this.botSerivce.getBotList();
  }

  @Get(':id')
  getDetailBot(@Param('id') id: number) {
    return this.botSerivce.getDetailBot(id);
  }

  @Put(':id')
  updateBot(@Param('id') id: number, @Body() updateBotDTO: UpdateBotDTO) {
    return this.botSerivce.updateBot(id, updateBotDTO);
  }

  @Delete(':id')
  removeOneBot(@Param('id') id: number) {
    return this.botSerivce.removeOneBot(id);
  }
}
