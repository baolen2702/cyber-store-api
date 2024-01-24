import { Injectable } from '@nestjs/common';
import { CreateProductOptionDto } from './dto/create-product-option.dto';
import { UpdateProductOptionDto } from './dto/update-product-option.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductOption } from './entities/product-option.entity';
import { Product } from '../product/entities/product.entity';
import { seedProductOptions } from '../seedData/data';

@Injectable()
export class ProductOptionService {
  constructor(
    @InjectRepository(ProductOption)
    private productOptionRepository: Repository<ProductOption>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  create(createProductOptionDto: CreateProductOptionDto) {
    console.log({ createProductOptionDto });

    return 'This action adds a new productOption';
  }

  findAll() {
    return this.productOptionRepository
      .createQueryBuilder('product_option')
      .where({})
      .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} productOption`;
  }

  async update(id: number, updateProductOptionDto: UpdateProductOptionDto) {
    console.log({ id, updateProductOptionDto });
  }

  remove(id: number) {
    return `This action removes a #${id} productOption`;
  }
  async seed() {
    return this.productOptionRepository.save(seedProductOptions);
  }
}
