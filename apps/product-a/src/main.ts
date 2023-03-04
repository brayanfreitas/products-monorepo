import { NestFactory } from '@nestjs/core';
import { ProductAModule } from './product-a.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductAModule);
  await app.listen(3000);
}
bootstrap();
