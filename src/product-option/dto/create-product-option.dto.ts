import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductOptionDto {
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
