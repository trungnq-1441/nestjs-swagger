import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CraeteUserDTO } from './create-user.dto';
import { UpdateUserDTO } from './update-user.dto';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private userSerivce: UserService,
  ) { }

  @Post()
  createOneUser(@Body() createUserDTO: CraeteUserDTO) {
    return this.userSerivce.createOneUser(createUserDTO);
  }

  @Get()
  @ApiOkResponse({ description: 'List all users' })
  async getUserList() {
    return await this.userSerivce.getUserList();
  }

  @Get(':id')
  getDetailUser(@Param('id') id: number) {
    return this.userSerivce.getDetailUser(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDTO: UpdateUserDTO) {
    return this.userSerivce.updateUser(id, updateUserDTO);
  }

  @Delete(':id')
  removeOneUser(@Param('id') id: number) {
    return this.userSerivce.removeOneUser(id);
  }
}
