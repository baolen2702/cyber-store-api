import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IBlRepository } from '../../domain/repository/bl.repository.inteface';
import { Bl } from '../../domain/entity/bl.entity';

@Injectable()
export class BlRepository implements IBlRepository {
  constructor(@InjectRepository(Bl) private readonly repository: Repository<Bl>) {}

  async get(id: string): Promise<Bl> {
    return await this.repository.findOne({ where: { id } });
  }

  async getAll(): Promise<Bl[]> {
    return await this.repository.find();
  }

  async insert(category: Bl): Promise<Bl> {
    return await this.repository.save(category);
  }
}
