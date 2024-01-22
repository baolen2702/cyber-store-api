import { Test, TestingModule } from '@nestjs/testing';
import { ProductOptionValueService } from './product-option-value.service';

describe('ProductOptionValueService', () => {
  let service: ProductOptionValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductOptionValueService],
    }).compile();

    service = module.get<ProductOptionValueService>(ProductOptionValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
