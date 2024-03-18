import { Bl } from '../entity/bl.entity';

export const BlRepositoryName = 'BlRepository.Interface';

export interface IBlRepository {
  get(id: string): Promise<Bl>;
  getAll(): Promise<Bl[]>;
  insert(bl: Bl): Promise<Bl>;
}
