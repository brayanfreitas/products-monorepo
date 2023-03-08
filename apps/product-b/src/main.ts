import { RmqService } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { ProductBModule } from './product-b.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductBModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('PRODUCT_B'));
  await app.startAllMicroservices();
}
bootstrap();
