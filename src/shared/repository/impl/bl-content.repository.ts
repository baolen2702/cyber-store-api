import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IBlContentRepository } from '../../../shared/domain/repository/bl-content.repository.interface';
import { BlContent } from '../../../shared/domain/entity/bl-content.entity';

@Injectable()
export class BlContentRepository implements IBlContentRepository {
  constructor(@InjectRepository(BlContent) private repository: Repository<BlContent>) {}

  async getByBlId(blId: string): Promise<BlContent[]> {
    return await this.repository.find({ where: { blId } });
  }

  async insert(contents: BlContent[]): Promise<BlContent[]> {
    return await this.repository.save(contents);
  }
}
