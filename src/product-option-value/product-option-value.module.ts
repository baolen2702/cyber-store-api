import { Module } from '@nestjs/common';
import { ProductOptionValueService } from './product-option-value.service';
import { ProductOptionValueController } from './product-option-value.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductOptionValue } from './entities/product-option-value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductOptionValue])],
  controllers: [ProductOptionValueController],
  providers: [ProductOptionValueService],
})
export class ProductOptionValueModule {}
