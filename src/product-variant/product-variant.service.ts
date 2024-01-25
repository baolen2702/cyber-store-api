import { Injectable } from '@nestjs/common';
import { CreateProductVariantDto } from './dto/create-product-variant.dto';
import { UpdateProductVariantDto } from './dto/update-product-variant.dto';
import { seedProductVariants } from '../seedData/data';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductVariant } from './entities/product-variant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductVariantService {
  constructor(
    @InjectRepository(ProductVariant)
    private productVariantRepository: Repository<ProductVariant>,
  ) {}

  create(createProductVariantDto: CreateProductVariantDto) {
    console.log({ createProductVariantDto });

    return 'This action adds a new productVariant';
  }

  findAll() {
    return this.productVariantRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} productVariant`;
  }

  update(id: number, updateProductVariantDto: UpdateProductVariantDto) {
    console.log({ updateProductVariantDto });
    return `This action updates a #${id} productVariant`;
  }

  remove(id: number) {
    return `This action removes a #${id} productVariant`;
  }
  seed() {
    return this.productVariantRepository.save(seedProductVariants);
  }
}
