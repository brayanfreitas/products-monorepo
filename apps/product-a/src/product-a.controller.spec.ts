import { Test, TestingModule } from '@nestjs/testing';
import { ProductAController } from './product-a.controller';
import { ProductAService } from './product-a.service';

describe('ProductAController', () => {
  let productAController: ProductAController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductAController],
      providers: [ProductAService],
    }).compile();

    productAController = app.get<ProductAController>(ProductAController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(productAController.getHello()).toBe('Hello World!');
    });
  });
});
