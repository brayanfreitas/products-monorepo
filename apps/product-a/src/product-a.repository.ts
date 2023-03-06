import { AbstractProductRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { ProductA } from './schemas/product-a.schema';

@Injectable()
export class ProductARepository extends AbstractProductRepository<ProductA>{
  protected readonly logger = new Logger(ProductA.name)
}
