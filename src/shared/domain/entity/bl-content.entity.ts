import { IEntity } from '../model/seedwork';
import { BaseEntity } from './base.entity';
import { Bl } from './bl.entity';
import { Field } from './field.entity';

export class BlContent extends BaseEntity {
  id: string;
  blId: string;
  fieldId: string;
  value: string;
  bl: Bl;
  field: Field;
  constructor(intit: Partial<BlContent>) {
    super();
    Object.assign(this, intit);
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof BlContent)) {
      return false;
    }
    return entity.id !== this.id;
  }
}
