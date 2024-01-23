import { PartialType } from '@nestjs/mapped-types';
import { CreateProductOptionDto } from './create-product-option.dto';
import { IsNumber } from 'class-validator';

export class UpdateProductOptionDto extends PartialType(
  CreateProductOptionDto,
) {
  @IsNumber()
  productVariantId: number;
}
