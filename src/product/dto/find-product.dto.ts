import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { PageOptionsDto } from '../../page/page-option.dto';
import { SortOrder } from '../../utils/SortOrder';

export class FindProductDto extends PageOptionsDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsEnum(SortOrder)
  @IsOptional()
  createdAt?: SortOrder = SortOrder.Asc;

  @IsArray()
  @IsOptional()
  categoryIds?: number[];
}
