import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductAController } from './product-a.controller';
import { ProductAService } from './product-a.service';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true})],
  controllers: [ProductAController],
  providers: [ProductAService],
})
export class ProductAModule {}
