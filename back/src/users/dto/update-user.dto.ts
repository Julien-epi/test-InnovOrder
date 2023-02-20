import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger/dist';
import { MaxLength, MinLength, IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @MinLength(4)
  @MaxLength(10)
  @ApiProperty({
    example: 'Jeyrem',
  })
  firstname: string;

  @ApiProperty({
    example: 'ly',
  })
  lastname: string;
}
