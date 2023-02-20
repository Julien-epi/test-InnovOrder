import { IsNotEmpty } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  barCode: string;
}
