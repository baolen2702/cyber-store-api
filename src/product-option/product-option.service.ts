import { Injectable } from '@nestjs/common';
import { CreateProductOptionDto } from './dto/create-product-option.dto';
import { UpdateProductOptionDto } from './dto/update-product-option.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductOption } from './entities/product-option.entity';
import { faker } from '@faker-js/faker';
import { Product } from '../product/entities/product.entity';

@Injectable()
export class ProductOptionService {
  constructor(
    @InjectRepository(ProductOption)
    private productOptionRepository: Repository<ProductOption>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  create(createProductOptionDto: CreateProductOptionDto) {
    return 'This action adds a new productOption';
  }

  findAll() {
    return `This action returns all productOption`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productOption`;
  }

  update(id: number, updateProductOptionDto: UpdateProductOptionDto) {
    return `This action updates a #${id} productOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} productOption`;
  }
  async seed(body: CreateProductOptionDto) {
    const productIds = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    const options = productIds.map((id) => ({
      productId: id,
      name: body.name,
    }));
    const data = await this.productOptionRepository.create(options);

    return this.productOptionRepository.save(data);
  }
}
