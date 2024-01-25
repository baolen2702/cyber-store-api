import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FindProductDto } from './dto/find-product.dto';
import { PageMetaDto } from '../page/page-meta.dto';
import { PageDto } from '../page/page.dto';
import { seedProducts } from '../seedData/data';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async findAll(query: FindProductDto) {
    let queryBuilder: SelectQueryBuilder<Product> = this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category');

    if (query.categoryId && query.categoryId.length > 0) {
      queryBuilder = queryBuilder.where(
        'product.categoryId IN (:...categoryId)',
        {
          categoryId: query.categoryId,
        },
      );
    }

    if (query.sortBy && query.sortOrder) {
      queryBuilder = queryBuilder.orderBy(
        `product.${query.sortBy}`,
        query.sortOrder,
      );
    }

    const total = await queryBuilder.getCount();

    const products = await queryBuilder
      .offset(query.skip)
      .limit(query.take)
      .getMany();
    const pageMetaDto = new PageMetaDto({
      itemCount: total,
      pageOptionsDto: query,
    });
    return new PageDto(products, pageMetaDto);
  }

  findOne(id: number) {
    return this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .leftJoinAndSelect('product.options', 'product_option')
      .leftJoinAndSelect('product_option.values', 'product_option_value')
      .where('product.id =:id', { id })
      .getOne();
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    console.log({ updateProductDto });

    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
  seed() {
    return this.productRepository.save(seedProducts);
  }
}
