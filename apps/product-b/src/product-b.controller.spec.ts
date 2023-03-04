import { Test, TestingModule } from '@nestjs/testing';
import { ProductBController } from './product-b.controller';
import { ProductBService } from './product-b.service';

describe('ProductBController', () => {
  let productBController: ProductBController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductBController],
      providers: [ProductBService],
    }).compile();

    productBController = app.get<ProductBController>(ProductBController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(productBController.getHello()).toBe('Hello World!');
    });
  });
});
