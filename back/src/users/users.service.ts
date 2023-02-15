import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

  ) {}

  async create(args: CreateUserDto): Promise<User> {
    const result = await this.userRepository.save({
      ...args,
    });
    return result;
  }

  async findOne(userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userUpdate = await this.userRepository.update(
      { id },
      { ...updateUserDto },
    );

    return userUpdate;
  }

}
