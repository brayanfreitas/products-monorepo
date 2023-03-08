import { DatabaseModule, RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { ProductBController } from './product-b.controller';
import { ProductBRepository } from './product-b.repository';
import { ProductBService } from './product-b.service';
import { ProductB, ProductBSchema } from './schemas/product-b.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_PRODUCT_B_QUEUE: Joi.string().required(),
      }),
      envFilePath:'./apps/product-b/.env'
    }),
    DatabaseModule,
    MongooseModule.forFeature([{name: ProductB.name, schema: ProductBSchema}]),
    RmqModule
  ],
  controllers: [ProductBController],
  providers: [ProductBService, ProductBRepository],
})
export class ProductBModule {}
