import { IEntity } from '../model/seedwork';
import { BaseEntity } from './base.entity';

export class User extends BaseEntity {
  id: string;
  name: string;
  avatar: string;
  role: string;
  password: string;

  constructor(init?: Partial<User>) {
    super();
    Object.assign(this, init);
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof User)) {
      return false;
    }
    return this.id === entity.id;
  }
}
