import { Injectable } from '@nestjs/common';
import { CreateProductRequest } from './dto/create-product.request';
import { ProductARepository } from './product-a.repository';

@Injectable()
export class ProductAService {
  constructor(
    private readonly productARepository: ProductARepository
  ){}
  
  async createProduct(request: CreateProductRequest){
    return this.productARepository.create(request);    
  }

  async getProducts(){
    return this,this.productARepository.find({});
  }
}
