import { Injectable } from '@nestjs/common';
import { CreateProductOptionValueDto } from './dto/create-product-option-value.dto';
import { UpdateProductOptionValueDto } from './dto/update-product-option-value.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductOptionValue } from './entities/product-option-value.entity';
import { Repository } from 'typeorm';
import { seedProductOptionValues } from '../seedData/data';

@Injectable()
export class ProductOptionValueService {
  constructor(
    @InjectRepository(ProductOptionValue)
    private productOptionValueRepository: Repository<ProductOptionValue>,
  ) {}
  create(createProductOptionValueDto: CreateProductOptionValueDto) {
    console.log(createProductOptionValueDto);

    return 'This action adds a new productOptionValue';
  }

  findAll() {
    return this.productOptionValueRepository
      .createQueryBuilder('product_option_value')
      .where({})
      .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} productOptionValue`;
  }

  async update(
    id: number,
    updateProductOptionValueDto: UpdateProductOptionValueDto,
  ) {
    return this.productOptionValueRepository.update(
      { id },
      { variantId: updateProductOptionValueDto.variantId },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} productOptionValue`;
  }

  async seed() {
    return this.productOptionValueRepository.save(seedProductOptionValues);
  }
}
