import { ProductOption } from '../../product-option/entities/product-option.entity';
import { Category } from '../../category/entities/category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductVariant } from '../../product-variant/entities/product-variant.entity';
import { ProductOptionValue } from '../../product-option-value/entities/product-option-value.entity';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  slug: string;

  @Column({ type: 'text' })
  description?: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 20 })
  price?: number;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column({ type: 'int', nullable: true })
  categoryId: number;

  @OneToMany(() => ProductOption, (productOption) => productOption.product, {
    cascade: true,
  })
  options: ProductOption[];

  @OneToMany(() => ProductVariant, (productVariant) => productVariant.product, {
    cascade: true,
  })
  variants: ProductVariant[];

  @OneToMany(
    () => ProductOptionValue,
    (productVariantValue) => productVariantValue.product,
    {
      cascade: true,
    },
  )
  values: ProductOptionValue[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
