import { Controller, Get } from '@nestjs/common';
import { ProductBService } from './product-b.service';

@Controller()
export class ProductBController {
  constructor(private readonly productBService: ProductBService) {}

  @Get()
  getHello(): string {
    return this.productBService.getHello();
  }
}
