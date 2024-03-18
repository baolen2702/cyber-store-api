import { Controller, Get } from '@nestjs/common';
import { GetAllBlUsecase } from './usecase/get-all-bl.usecase';

@Controller('bl')
export class BlController {
  constructor(private readonly getAllBlService: GetAllBlUsecase) {}
  @Get()
  getAll() {
    return this.getAllBlService.excecute();
  }
}
