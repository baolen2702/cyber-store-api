import { IEntity } from '../model/seedwork';
import { BaseEntity } from './base.entity';

export class Field extends BaseEntity {
  id: number;
  name: string;
  keyword: string;
  show: boolean;
  constructor(init?: Partial<Field>) {
    super();
    Object.assign(this, init);
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof Field)) {
      return false;
    }
    return this.id === entity.id;
  }
}
