import { Injectable, Query } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllCategoryDto } from './dto/find-all-category-dto';
import { PageDto } from '../page/page.dto';
import { PageMetaDto } from '../page/page-meta.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  async findAll(query: FindAllCategoryDto) {
    let queryBuilder: SelectQueryBuilder<Category> =
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
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
  seed() {
    return this.categoryRepository.save([
      {
        name: 'Vegetables',
        slug: 'vegetables',
        image: 'https://ik.imagekit.io/ngnp3wo0m/category-1.jpg',
        description:
          "Discover the freshest and tastiest vegetables at our online store! Our vegetable category offers a wide range of farm-fresh produce sourced directly from trusted growers. From crisp lettuce to vibrant bell peppers, our selection ensures quality and flavor in every bite. Whether you're looking for everyday staples or unique and exotic options, we have you covered. With convenient online ordering and prompt delivery, you can easily stock your fridge with nutritious and delicious vegetables. Explore our user-friendly website, read helpful descriptions, and make your selections with confidence. Elevate your meals with the goodness of our vegetables and experience the joy of healthy eating",
      },
      {
        name: 'Fruit',
        slug: 'fruit',
        image: 'https://ik.imagekit.io/ngnp3wo0m/category-2.jpg',
        description:
          "Welcome to our online store's fruit category! Explore a delightful assortment of fresh and juicy fruits sourced from trusted orchards and farmers. From succulent berries to tropical delights, our selection offers a burst of flavors and vibrant colors. Whether you're craving the sweetness of ripe mangoes or the refreshing tang of citrus, our fruits are handpicked for their exceptional quality and taste. With our easy-to-navigate website, you can quickly find your favorites, read detailed descriptions, and add them to your cart. Enjoy the convenience of doorstep delivery, bringing nature's finest and healthiest treats right to your doorstep.",
      },
      {
        name: 'Dried',
        slug: 'dried',
        image: 'https://ik.imagekit.io/ngnp3wo0m/category-4.jpg',
        description:
          "Welcome to our online store's dried category! Discover a delectable array of dried fruits, nuts, and seeds that are perfect for snacking, baking, or adding a nutritious twist to your meals. Our dried category offers a variety of flavorful options, including chewy dried mangoes, crunchy almonds, and nutrient-packed chia seeds. Each item is carefully sourced and dried to preserve its natural goodness and taste. Whether you're looking for a convenient on-the-go snack or ingredients for your culinary creations, our dried category has you covered. Enjoy the convenience of ordering online and have these wholesome delights delivered straight to your doorstep.",
      },
      {
        name: 'Juices',
        slug: 'juices',
        image: 'https://ik.imagekit.io/ngnp3wo0m/category-3.jpg',
        description:
          "Welcome to our online store's juices category! Quench your thirst and indulge in a refreshing variety of premium juices that are sure to tantalize your taste buds. From tropical blends to zesty citrus concoctions, our juices are crafted with the finest fruits and ingredients. Savor the natural flavors and vibrant colors as you sip on our carefully curated selection. Whether you're in need of a boost of vitamins or simply seeking a flavorful beverage, our juices are the perfect choice. With the convenience of online ordering, you can have these delicious and nutritious juices delivered right to your doorstep, ensuring a delightful and convenient experience.",
      },
    ]);
  }
}
