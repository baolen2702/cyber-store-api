import { EntitySchema } from 'typeorm';
import { BaseSchema } from './base.schema';
import { Field } from '../../domain/entity/field.entity';

export const FieldSchema = new EntitySchema<Field>({
  name: 'Field',
  tableName: 'field',
  columns: { ...BaseSchema, name: { type: String }, keyword: { type: String }, show: { type: Boolean } },
});
