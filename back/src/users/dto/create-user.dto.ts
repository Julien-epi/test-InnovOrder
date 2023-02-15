import { ApiProperty } from '@nestjs/swagger/dist';
import { MaxLength, MinLength, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @MinLength(4)
  @MaxLength(10)
  @IsNotEmpty()
  @ApiProperty({
    example: 'Jeyrem',
  })
  firstname: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'ly',
  })
  lastname: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'Jeyrem@gmail.com',
  })
  email: string;
}