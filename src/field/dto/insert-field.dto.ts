import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class InsertFieldDto {
  @IsNotEmpty()
  @IsString()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  keyword: string;

  @IsBoolean()
  show: boolean;
}
