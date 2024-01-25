import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { PageOptionsDto } from '../../page/page-option.dto';
import { SortOrder } from '../../utils/SortOrder';
import { ProductSortField } from '../../utils/ProductSortField';
import { Transform, Type } from 'class-transformer';

export class FindProductDto extends PageOptionsDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsEnum(ProductSortField)
  @IsOptional()
  sortBy?: ProductSortField = ProductSortField.CreatedAt;

  @IsEnum(SortOrder)
  @IsOptional()
  sortOrder?: SortOrder = SortOrder.Asc;

  @IsOptional()
  @IsArray()
  @Type(() => Number)
  @Transform(({ value }) => {
    if (typeof value === 'number') {
      return [value];
    }

    return value;
  })
  categoryId: number[];
}
