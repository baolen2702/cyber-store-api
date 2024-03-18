import { Field } from '../../shared/domain/entity/field.entity';

export class FieldPresenter {
  id: number;
  name: string;
  keyword: string;
  show: boolean;
  constructor(field: Field) {
    this.id = field.id;
    this.name = field.name;
    this.keyword = field.keyword;
    this.show = field.show;
  }

  public toString(): string {
    return JSON.stringify(this);
  }
}
