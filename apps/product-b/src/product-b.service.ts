import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductBService {
  getHello(): string {
    return 'Hello World!';
  }
}
