import { ProductOption } from '../../product-option/entities/product-option.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ProductOptionValue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', default: true })
  name: string;

  @ManyToOne(() => ProductOption, (option) => option.values)
  @JoinColumn({ name: 'optionId' })
  option: ProductOption;

  @OneToMany(() => ProductOptionValue, (optionValue) => optionValue.option)
  values: ProductOptionValue[];

  @Column({ type: 'int', nullable: true })
  optionId: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
