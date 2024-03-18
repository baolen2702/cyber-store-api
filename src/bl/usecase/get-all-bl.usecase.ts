import { Inject, Injectable } from '@nestjs/common';
import { BlRepositoryName } from '../../shared/domain/repository/bl.repository.inteface';
import { BlRepository } from '../../shared/repository/impl/bl.repository';
import { ApiResponse } from '../../utils/api.response';
import { BlPresenter } from '../presenter/bl.presenter';

@Injectable()
export class GetAllBlUsecase {
  constructor(@Inject(BlRepositoryName) private readonly repository: BlRepository) {}
  async excecute(): Promise<ApiResponse<BlPresenter[]>> {
    const bls = await this.repository.getAll();
    return ApiResponse.success(bls.map((bl) => new BlPresenter(bl)));
  }
}
