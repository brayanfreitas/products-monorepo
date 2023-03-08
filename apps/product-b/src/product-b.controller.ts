import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '../../../libs/common/src';
import { ProductBService } from './product-b.service';

@Controller('productB')
export class ProductBController {
  constructor(
    private readonly productBService: ProductBService,
    private readonly rmqService: RmqService) {}

  @EventPattern('product_created')
  async handleProductCreated(@Payload() data: any, @Ctx() context: RmqContext){
    await this.productBService.createProduct(data);
    this.rmqService.ack(context);
  }

  @Get()
  async find() {
    return this.productBService.getProducts();
  }  
}
