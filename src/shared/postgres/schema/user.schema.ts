import { User } from '../../../shared/domain/entity/user.entity';
import { EntitySchema } from 'typeorm';
import { BaseSchema } from './base.schema';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  tableName: 'user',
  columns: { ...BaseSchema, name: { type: String }, avatar: { type: String }, role: { type: String }, password: { type: String } },
});
