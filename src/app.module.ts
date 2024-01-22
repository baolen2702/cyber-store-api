import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { DbModule } from './db/db.module';
import { ProductOptionModule } from './product-option/product-option.module';
import { ProductOptionValueModule } from './product-option-value/product-option-value.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CategoryModule,
    ProductModule,
    DbModule,
    ProductOptionModule,
    ProductOptionValueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
