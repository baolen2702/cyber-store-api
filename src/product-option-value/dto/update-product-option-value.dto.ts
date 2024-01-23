import { PartialType } from '@nestjs/mapped-types';
import { CreateProductOptionValueDto } from './create-product-option-value.dto';
import { IsNumber } from 'class-validator';

export class UpdateProductOptionValueDto extends PartialType(
  CreateProductOptionValueDto,
) {
  @IsNumber()
  variantId: number;
}
