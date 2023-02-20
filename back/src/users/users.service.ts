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

  async create(user: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create({ ...user });
    return this.userRepository.save(newUser);
  }

  async findOne(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email: email } });
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
