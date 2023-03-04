import { Controller, Get } from '@nestjs/common';
import { ProductAService } from './product-a.service';

@Controller()
export class ProductAController {
  constructor(private readonly productAService: ProductAService) {}

  @Get()
  getHello(): string {
    return this.productAService.getHello();
  }
}
