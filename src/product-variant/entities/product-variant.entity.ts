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
  id: Number;

  @Column({ type: 'varchar' })
  sku: String;

  @Column({ type: 'int' })
  productId: Number;

  @Column({ type: 'int' })
  quantity: Number;

  @ManyToOne(() => Product, (product) => product.variants)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @OneToMany(
    () => ProductOptionValue,
    (productOptionValue) => productOptionValue.variant,
  )
  optionValues: ProductOptionValue[];
}
