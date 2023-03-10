import { DatabaseModule, RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { PRODUCT_B_SERVICE } from './constants/services';
import { ProductAController } from './product-a.controller';
import { ProductARepository } from './product-a.repository';
import { ProductAService } from './product-a.service';
import { ProductA, ProductASchema } from './schemas/product-a.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required()
      }),
      envFilePath:'./apps/product-a/.env'
    }),
    DatabaseModule,
    MongooseModule.forFeature([{name: ProductA.name, schema: ProductASchema}]),
    RmqModule.register({
      name: PRODUCT_B_SERVICE
    })
  ],
  controllers: [ProductAController],
  providers: [ProductAService, ProductARepository],
})
export class ProductAModule {}
