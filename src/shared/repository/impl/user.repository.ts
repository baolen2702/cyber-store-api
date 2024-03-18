import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from '../../../shared/domain/repository/user.repository.interface';
import { User } from '../../../shared/domain/entity/user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(@InjectRepository(User) private readonly repository: Repository<User>) {}

  async get(id: string): Promise<User> {
    return await this.repository.findOne({ where: { id } });
  }

  async insert(user: User): Promise<User> {
    return await this.repository.save(user);
  }
}
