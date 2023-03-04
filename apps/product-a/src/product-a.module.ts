import { Module } from '@nestjs/common';
import { ProductAController } from './product-a.controller';
import { ProductAService } from './product-a.service';

@Module({
  imports: [],
  controllers: [ProductAController],
  providers: [ProductAService],
})
export class ProductAModule {}
