import { Module } from '@nestjs/common';
import { ProductBController } from './product-b.controller';
import { ProductBService } from './product-b.service';

@Module({
  imports: [],
  controllers: [ProductBController],
  providers: [ProductBService],
})
export class ProductBModule {}
