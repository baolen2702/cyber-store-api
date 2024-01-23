import { ProductVariant } from '../../product-variant/entities/product-variant.entity';
import { ProductOption } from '../../product-option/entities/product-option.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class ProductOptionValue {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  @Column({ type: 'varchar', default: true })
  name: string;

  @PrimaryColumn()
  @Column({ type: 'int', nullable: true })
  optionId: number;

  @ManyToOne(() => ProductOption, (option) => option.values)
  @JoinColumn({ name: 'optionId' })
  option: ProductOption;

  @OneToMany(() => ProductOptionValue, (optionValue) => optionValue.option)
  values: ProductOptionValue[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Column({ type: 'int', nullable: true })
  productId: number;

  @Column({ type: 'int', nullable: true })
  variantId: number;

  @ManyToOne(
    () => ProductVariant,
    (productVariant) => productVariant.optionValues,
  )
  @JoinColumn({ name: 'variantId' })
  variant: ProductVariant;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId' })
  product: Product;
}
