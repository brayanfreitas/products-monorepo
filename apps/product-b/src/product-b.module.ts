import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { ProductBController } from './product-b.controller';
import { ProductBService } from './product-b.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required()
      }),
      envFilePath:'./apps/product-b/.env'
    }),
    DatabaseModule
  ],
  controllers: [ProductBController],
  providers: [ProductBService],
})
export class ProductBModule {}
