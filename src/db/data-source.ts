import { config } from 'dotenv';
import { resolve } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { ProductOption } from '../product-option/entities/product-option.entity';
import { Category } from '../category/entities/category.entity';
import { Product } from '../product/entities/product.entity';
import { ProductOptionValue } from '../product-option-value/entities/product-option-value.entity';
import { ProductVariant } from '../product-variant/entities/product-variant.entity';
config({ path: resolve(__dirname, '../..', '.env') });

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 5432),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: true,
  synchronize: true,
  // migrations: ['src/db/migrations/*{.ts,.js}'],
  entities: [
    Product,
    Category,
    ProductOption,
    ProductOptionValue,
    ProductVariant,
  ],
};
export default new DataSource(dataSourceOptions);
