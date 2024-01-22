import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductOptionValue } from '../../product-option-value/entities/product-option-value.entity';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class ProductOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', default: true })
  name: string;

  @ManyToOne(() => Product, (product) => product.options)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column({ type: 'int', nullable: true })
  productId: number;

  @OneToMany((type) => ProductOptionValue, (value) => value.option, {
    cascade: true,
  })
  values: ProductOptionValue[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
