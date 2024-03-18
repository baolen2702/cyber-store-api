/* eslint-disable @typescript-eslint/ban-types */
import { EntitySchema } from 'typeorm';
import { UserSchema } from './user.schema';
import { FieldSchema } from './field.schema';

export const PostgreSchemas: (Function | EntitySchema)[] = [UserSchema, FieldSchema];
