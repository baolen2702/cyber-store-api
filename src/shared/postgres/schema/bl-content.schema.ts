import { BlContent } from '../../../shared/domain/entity/bl-content.entity';
import { EntitySchema } from 'typeorm';
import { BaseSchema } from './base.schema';

export const BlContentSchema = new EntitySchema<BlContent>({
  name: 'BlContent',
  tableName: 'bl-content',
  columns: {
    blId: { type: String, primary: true },
    fieldId: { type: String, primary: true },
    value: { type: String },
    ...BaseSchema,
  },
  relations: {
    bl: {
      type: 'many-to-one',
      target: 'Bl',
      joinColumn: {
        name: 'blId',
      },
    },
    field: {
      type: 'many-to-one',
      target: 'Field',
      joinColumn: {
        name: 'fieldId',
      },
    },
  },
});
