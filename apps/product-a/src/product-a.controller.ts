import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductRequest } from './dto/create-product.request';
import { ProductAService } from './product-a.service';

@Controller('ProductA')
export class ProductAController {
  constructor(private readonly productAService: ProductAService) {}

  @Post()
  async createProduct(@Body() request: CreateProductRequest){
    return this.productAService.createProduct(request);
  }

  @Get()
  async getProducts(){
    return this.productAService.getProducts();
  }
}
