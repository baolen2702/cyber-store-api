import { Injectable } from '@nestjs/common';
import { CreateProductOptionValueDto } from './dto/create-product-option-value.dto';
import { UpdateProductOptionValueDto } from './dto/update-product-option-value.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductOptionValue } from './entities/product-option-value.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductOptionValueService {
  constructor(
    @InjectRepository(ProductOptionValue)
    private productOptionValueRepository: Repository<ProductOptionValue>,
  ) {}
  create(createProductOptionValueDto: CreateProductOptionValueDto) {
    return 'This action adds a new productOptionValue';
  }

  findAll() {
    return `This action returns all productOptionValue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productOptionValue`;
  }

  update(id: number, updateProductOptionValueDto: UpdateProductOptionValueDto) {
    return `This action updates a #${id} productOptionValue`;
  }

  remove(id: number) {
    return `This action removes a #${id} productOptionValue`;
  }

  async seed() {
    // const productIds = [
    //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    // ];
    // const options = productIds.map((id) => ({
    //   productId: id + 40,
    //   name: 'US',
    // }));
    // const data = await this.productOptionValueRepository.create(options);

    // return this.productOptionValueRepository.save(data);
  }
}
