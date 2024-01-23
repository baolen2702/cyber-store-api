import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { DbModule } from './db/db.module';
import { ProductOptionModule } from './product-option/product-option.module';
import { ProductOptionValueModule } from './product-option-value/product-option-value.module';
import { ProductVariantModule } from './product-variant/product-variant.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CategoryModule,
    ProductModule,
    DbModule,
    ProductOptionModule,
    ProductOptionValueModule,
    ProductVariantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
