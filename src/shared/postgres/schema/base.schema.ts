import { EntitySchemaColumnOptions } from 'typeorm';

export const BaseSchema = {
  id: {
    type: 'uuid',
    primary: true,
  } as EntitySchemaColumnOptions,
  createdAt: {
    name: 'created_at',
    type: 'timestamp with time zone',
    createDate: true,
    nullable: false,
  } as EntitySchemaColumnOptions,
  updatedAt: {
    name: 'updated_at',
    type: 'timestamp with time zone',
    updateDate: true,
    nullable: true,
  } as EntitySchemaColumnOptions,
};
