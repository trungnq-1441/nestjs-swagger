import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CraeteUserDTO } from './create-user.dto';
import { UpdateUserDTO } from './update-user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: Repository<UserEntity>,
  ) { }
  createOneUser(createUserDTO: CraeteUserDTO) {
    return this.userRepository.save(createUserDTO);
  }

  getUserList() {
    return this.userRepository.find({});
  }

  getDetailUser(id: number) {
    return this.userRepository.findOne(id);
  }

  updateUser(id: number, updateUserDTO: UpdateUserDTO) {
    return this.userRepository.update(id, updateUserDTO);
  }

  removeOneUser(id: number) {
    return this.userRepository.delete(id);
  }
}
