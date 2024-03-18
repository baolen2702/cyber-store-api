import { Module } from '@nestjs/common';
import { BlController } from './bl.controller';
import { GetAllBlUsecase } from './usecase/get-all-bl.usecase';

@Module({
  providers: [GetAllBlUsecase],
  controllers: [BlController],
})
export class BlModule {}
