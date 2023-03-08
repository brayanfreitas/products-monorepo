import { Body, Controller, DefaultValuePipe, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CreateProductRequest } from '../../product-b/src/dto/create-product.request';
import { ProductAService } from './product-a.service';

@Controller('ProductA')
export class ProductAController {
  constructor(private readonly productAService: ProductAService) {}

  @Post()
  async createProduct(@Body() request: CreateProductRequest){
    return this.productAService.createProduct(request);
  }

  @Get()
  async getProducts(
  @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
  @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit = 5,
  @Query('search', new DefaultValuePipe(null)) search = null){
    return this.productAService.getProducts(page, limit, search);
  }
}
