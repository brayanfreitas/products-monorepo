import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { ProductAController } from './product-a.controller';
import { ProductAService } from './product-a.service';

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
  controllers: [ProductAController],
  providers: [ProductAService],
})
export class ProductAModule {}
