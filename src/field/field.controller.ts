import { Controller, Post } from '@nestjs/common';
import { InsertFieldUsecase } from './usecase/insert.usecase';
import { Field } from '../shared/domain/entity/field.entity';
import { InsertFieldDto } from './dto/insert-field.dto';

@Controller('field')
export class FieldController {
  constructor(private readonly insertFieldService: InsertFieldUsecase) {}

  @Post()
  insert(inputs: InsertFieldDto[]) {
    return this.insertFieldService.execute(inputs.map((input) => new Field(input)));
  }
}
