import { User } from '../entity/user.entity';

export const UserRepositoryName = 'UserRepository.Interface';

export interface IUserRepository {
  get(id: string): Promise<User>;
  insert(user: User): Promise<User>;
}
