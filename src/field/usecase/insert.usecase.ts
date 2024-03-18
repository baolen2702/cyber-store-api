import { Inject, Injectable } from '@nestjs/common';
import { FieldRepository } from '../../shared/repository/impl/field.repository';
import { ApiResponse } from '../../utils/api.response';
import { FieldPresenter } from '../presenter/field.presenter';
import { Field } from '../../shared/domain/entity/field.entity';
import { FieldRepositoryName } from '../../shared/domain/repository/field.repository.interface';

@Injectable()
export class InsertFieldUsecase {
  constructor(@Inject(FieldRepositoryName) private repository: FieldRepository) {}

  async execute(fields: Field[]): Promise<ApiResponse<FieldPresenter[]>> {
    const result = await this.repository.insert(fields);
    return ApiResponse.success(result.map((field) => new FieldPresenter(field)));
  }
}
