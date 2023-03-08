import { AbstractProductRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { ProductB } from './schemas/product-b.schema';

@Injectable()
export class ProductBRepository extends AbstractProductRepository<ProductB>{
  protected readonly logger = new Logger(ProductB.name)

  constructor(
    @InjectModel(ProductB.name) productBModel: Model<ProductB>,
    @InjectConnection() connection: Connection
    
  ){
    super(productBModel, connection)
  }
}
