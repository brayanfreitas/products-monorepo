import { AbstractProductRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { ProductA } from './schemas/product-a.schema';

@Injectable()
export class ProductARepository extends AbstractProductRepository<ProductA>{
  protected readonly logger = new Logger(ProductA.name);

  constructor(
    @InjectModel(ProductA.name) productAModel: Model<ProductA>,
    @InjectConnection() connection: Connection    
  ){
    super(productAModel, connection)
  }
}
