import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
export class PageOptionsDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  readonly page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  readonly take?: number = 10;

  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
