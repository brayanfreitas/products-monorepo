import { NestFactory } from '@nestjs/core';
import { ProductBModule } from './product-b.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductBModule);
  await app.listen(3000);
}
bootstrap();
