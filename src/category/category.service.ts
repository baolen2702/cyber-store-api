import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllCategoryDto } from './dto/find-all-category-dto';
import { PageDto } from '../page/page.dto';
import { PageMetaDto } from '../page/page-meta.dto';
import { seedCategories } from '../seedData/data';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    console.log({ createCategoryDto });
    return 'This action adds a new category';
  }

  async findAll(query: FindAllCategoryDto) {
    const queryBuilder: SelectQueryBuilder<Category> =
      this.categoryRepository.createQueryBuilder('category');
    const total = await queryBuilder.getCount();
    const categories = await queryBuilder
      .offset(query.skip)
      .limit(query.take)
      .getMany();

    const pageMetaDto = new PageMetaDto({
      itemCount: total,
      pageOptionsDto: query,
    });
    return new PageDto<Category>(categories, pageMetaDto);
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    console.log({ updateCategoryDto });

    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
  seed() {
    return this.categoryRepository.save(seedCategories);
  }
}
