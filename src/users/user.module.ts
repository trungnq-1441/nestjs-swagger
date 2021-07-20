import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/databases/database.module';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { userProvider } from './user.provider';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    DatabaseModule,
  ],
  controllers: [UserController],
  providers: [...userProvider, UserService],
})
export class UserModule { }
