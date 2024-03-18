import { Field } from '../entity/field.entity';

export const FieldRepositoryName = 'FieldRepository.Interface';

export interface IFieldRepository {
  getAll(): Promise<Field[]>;
  insert(fields: Field[]): Promise<Field[]>;
}
