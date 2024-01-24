import { ProductOptionValue } from '../../product-option-value/entities/product-option-value.entity';
import { Product } from '../../product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ProductVariant {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  sku: string;

  @Column({ type: 'int' })
  productId: number;

  @Column({ type: 'int' })
  quantity: number;

  @ManyToOne(() => Product, (product) => product.variants)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @OneToMany(
    () => ProductOptionValue,
    (productOptionValue) => productOptionValue.variant,
  )
  optionValues: ProductOptionValue[];
}
