import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductAService {
  getHello(): string {
    return 'Hello World!';
  }
}
