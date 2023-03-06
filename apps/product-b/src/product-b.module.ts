import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import Joi from 'joi';
import { ProductARepository } from '../../product-a/src/product-a.repository';
import { ProductBController } from './product-b.controller';
import { ProductBService } from './product-b.service';
import { ProductB, ProductBSchema } from './schemas/product-b.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required()
      }),
      envFilePath:'./apps/product-b/.env'
    }),
    DatabaseModule,
    MongooseModule.forFeature([{name: ProductB.name, schema: ProductBSchema}])
  ],
  controllers: [ProductBController],
  providers: [ProductBService, ProductARepository],
})
export class ProductBModule {}
