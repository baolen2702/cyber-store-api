import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FindProductDto } from './dto/find-product.dto';
import { PageMetaDto } from '../page/page-meta.dto';
import { PageDto } from '../page/page.dto';
import { faker } from '@faker-js/faker';

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

    if (query.categoryIds && query.categoryIds.length > 0) {
      queryBuilder = queryBuilder.where(
        'product.categoryId IN (:...categoryIds)',
        {
          categoryIds: query.categoryIds,
        },
      );
    }
    if (query.createdAt) {
      queryBuilder = queryBuilder.orderBy('product.createdAt', query.createdAt);
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
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
  seed() {
    return this.productRepository.save([
      {
        name: 'Red Bell Pepper',
        slug: 'red-bell-pepper',
        description:
          'Vibrant and flavorful red bell pepper, perfect for adding color and taste to your dishes.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-23.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 4,
      },
      {
        name: 'Spinach Leaves',
        slug: 'spinach-leaves',
        description:
          'Fresh and nutritious spinach leaves, packed with vitamins and minerals.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-22.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 4,
      },
      {
        name: 'Sweet Corn Kernels',
        slug: 'sweet-corn-kernels',
        description:
          'Tender and sweet corn kernels, ideal for salads, soups, or as a side dish.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-21.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 4,
      },
      {
        name: 'Green Beans',
        slug: 'green-beans',
        description:
          'Crunchy and vibrant green beans, a versatile vegetable that complements various recipes.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-20.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 4,
      },
      {
        name: 'Cauliflower Florets',
        slug: 'cauliflower-florets',
        description:
          'Delicious and versatile cauliflower florets, perfect for roasting, steaming, or stir-frying.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-19.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 4,
      },
      {
        name: 'Zucchini Squash',
        slug: 'zucchini-squash',
        description:
          'Mild and tender zucchini squash, a versatile ingredient for both savory and sweet dishes.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-18.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 3,
      },
      {
        name: 'Cherry Tomatoes',
        slug: 'cherry-tomatoes',
        description:
          'Juicy and flavorful cherry tomatoes, great for salads, pasta dishes, or snacking.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-17.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 3,
      },
      {
        name: 'Baby Carrots',
        slug: 'baby-carrots',
        description:
          'Tender and sweet baby carrots, perfect for snacking, roasting, or adding to stews.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-16.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 3,
      },
      {
        name: 'Yellow Squash',
        slug: 'yellow-squash',
        description:
          'Mild and buttery yellow squash, a versatile vegetable that can be cooked in various ways.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-15.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 3,
      },
      {
        name: 'Brussels Sprouts',
        slug: 'brussels-sprouts',
        description:
          'Nutty and flavorful Brussels sprouts, delicious when roasted, sautéed, or added to salads.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-14.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 3,
      },
      {
        name: 'Purple Cabbage',
        slug: 'purple-cabbage',
        description:
          'Colorful and crunchy purple cabbage, great for salads, slaws, or stir-fries.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-12.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 2,
      },
      {
        name: 'Asparagus Spears',
        slug: 'asparagus-spears',
        description:
          'Tender and nutritious asparagus spears, delicious when grilled, roasted, or steamed.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-11.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 2,
      },
      {
        name: 'Butternut Squash',
        slug: 'butternut-squash',
        description:
          'Sweet and creamy butternut squash, perfect for soups, stews, or roasted as a side dish.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-10.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 2,
      },
      {
        name: 'Broccoli Florets',
        slug: 'broccoli-florets',
        description:
          'Nutritious and versatile broccoli florets, great for stir-fries, steaming, or adding to pasta dishes.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-9.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 2,
      },
      {
        name: 'Eggplant',
        slug: 'eggplant',
        description:
          'Versatile and meaty eggplant, ideal for grilling, roasting, or using in dishes like moussaka or ratatouille.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-8.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 2,
      },
      {
        name: 'Snow Peas',
        slug: 'snow-peas',
        description:
          'Sweet and crunchy snow peas, delicious when stir-fried, added to salads, or used in Asian-inspired dishes.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-7.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 1,
      },
      {
        name: 'Artichoke Hearts',
        slug: 'artichoke-hearts',
        description:
          'Tender and flavorful artichoke hearts, perfect for salads, dips, or adding to pasta dishes.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-5.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 1,
      },
      {
        name: 'Cucumber Slices',
        slug: 'cucumber-slices',
        description:
          'Refreshing and crisp cucumber slices, great for adding to salads, sandwiches, or as a healthy snack.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-3.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 1,
      },
      {
        name: 'Romaine Lettuce',
        slug: 'romaine-lettuce',
        description:
          'Crisp and flavorful romaine lettuce, perfect for salads, wraps, or as a base for sandwiches.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-2.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 1,
      },
      {
        name: 'Radishes',
        slug: 'radishes',
        description:
          'Peppery and crunchy radishes, great for salads, pickling, or adding a burst of flavor to dishes.',
        image: 'https://ik.imagekit.io/ngnp3wo0m/product-6.jpg',
        isActive: true,
        price: faker.number.int({ min: 10, max: 30 }),
        categoryId: 1,
      },
    ]);
  }
}
