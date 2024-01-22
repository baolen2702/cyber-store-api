import { Test, TestingModule } from '@nestjs/testing';
import { ProductOptionValueController } from './product-option-value.controller';
import { ProductOptionValueService } from './product-option-value.service';

describe('ProductOptionValueController', () => {
  let controller: ProductOptionValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductOptionValueController],
      providers: [ProductOptionValueService],
    }).compile();

    controller = module.get<ProductOptionValueController>(ProductOptionValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
