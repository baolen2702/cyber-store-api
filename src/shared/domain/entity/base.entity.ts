import { IEntity } from '../model/seedwork';

export abstract class BaseEntity implements IEntity {
  createdAt: Date;
  updatedAt?: Date;
  abstract equals(entity: IEntity): boolean;
}
