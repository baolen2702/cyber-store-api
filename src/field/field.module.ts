import { Module } from '@nestjs/common';
import { FieldController } from './field.controller';
import { InsertFieldUsecase } from './usecase/insert.usecase';

@Module({
  providers: [InsertFieldUsecase],
  controllers: [FieldController],
})
export class FieldModule {}
