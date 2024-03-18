import { Provider } from '@nestjs/common';

import { BlRepositoryName } from '../../domain/repository/bl.repository.inteface';
import { FieldRepositoryName } from '../../domain/repository/field.repository.interface';
import { BlContentRepositoryName } from '../../domain/repository/bl-content.repository.interface';
import { UserRepositoryName } from '../../domain/repository/user.repository.interface';
import { UserRepository } from './user.repository';
import { BlContentRepository } from './bl-content.repository';
import { FieldRepository } from './field.repository';
import { BlRepository } from './bl.repository';

export const Repositories: Provider[] = [
  {
    provide: BlRepositoryName,
    useClass: BlRepository,
  },
  {
    provide: FieldRepositoryName,
    useClass: FieldRepository,
  },
  {
    provide: BlContentRepositoryName,
    useClass: BlContentRepository,
  },
  {
    provide: UserRepositoryName,
    useClass: UserRepository,
  },
];
