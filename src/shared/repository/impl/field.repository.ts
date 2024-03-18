import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IFieldRepository } from '../../../shared/domain/repository/field.repository.interface';
import { Field } from '../../../shared/domain/entity/field.entity';

@Injectable()
export class FieldRepository implements IFieldRepository {
  constructor(@InjectRepository(Field) private readonly repository: Repository<Field>) {}

  async getAll(): Promise<Field[]> {
    return await this.repository.find();
  }

  async insert(fields: Field[]): Promise<Field[]> {
    return await this.repository.save(fields);
  }
}
