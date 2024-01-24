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
import { ProductOptionValue } from '../../product-option-value/entities/product-option-value.entity';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class ProductOption {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  @Column({ type: 'varchar', default: true })
  name: string;

  @PrimaryColumn()
  @Column({ type: 'int', nullable: true })
  productId: number;

  @ManyToOne(() => Product, (product) => product.options)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @OneToMany(() => ProductOptionValue, (value) => value.option, {
    cascade: true,
  })
  values: ProductOptionValue[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
