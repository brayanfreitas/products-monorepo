import { Injectable, Logger } from '@nestjs/common';
import { CreateProductRequest } from './dto/create-product.request';
import { ProductBRepository } from './product-b.repository';

@Injectable()
export class ProductBService {
  private readonly logger = new Logger(ProductBService.name);

  constructor(
    private readonly productBRepository: ProductBRepository
  ){}
  
  async createProduct(request: CreateProductRequest){
    try {      
      const product = await this.productBRepository.create(request);
      return product;       
    }catch (error) {
      throw error;    
    }      
  }

  async getProducts(){
    return this.productBRepository.find({});
  }
  
}
