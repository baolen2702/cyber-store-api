import { BlContent } from '../entity/bl-content.entity';

export const BlContentRepositoryName = 'BlContentRepository.Interface';

export interface IBlContentRepository {
  getByBlId(blId: string): Promise<BlContent[]>;
  insert(contents: BlContent[]): Promise<BlContent[]>;
}
