import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductOptionValueService } from './product-option-value.service';
import { CreateProductOptionValueDto } from './dto/create-product-option-value.dto';
import { UpdateProductOptionValueDto } from './dto/update-product-option-value.dto';

@Controller('product-option-value')
export class ProductOptionValueController {
  constructor(
    private readonly productOptionValueService: ProductOptionValueService,
  ) {}

  @Post()
  create(@Body() createProductOptionValueDto: CreateProductOptionValueDto) {
    return this.productOptionValueService.create(createProductOptionValueDto);
  }

  @Get()
  findAll() {
    return this.productOptionValueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productOptionValueService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductOptionValueDto: UpdateProductOptionValueDto,
  ) {
    return this.productOptionValueService.update(
      +id,
      updateProductOptionValueDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productOptionValueService.remove(+id);
  }

  @Post('/seed')
  seed() {
    return this.productOptionValueService.seed();
  }
}
