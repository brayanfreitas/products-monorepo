import { HttpException, HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateProductRequest } from '../../product-b/src/dto/create-product.request';
import { PRODUCT_B_SERVICE } from './constants/services';
import { ProductARepository } from './product-a.repository';

@Injectable()
export class ProductAService {
  private logger = new Logger(ProductAService.name)
  constructor(
    private readonly productARepository: ProductARepository,
    @Inject(PRODUCT_B_SERVICE) private productBClient: ClientProxy
  ) {}
  
  async createProduct(request: CreateProductRequest){
    const session = await this.productARepository.startTransaction();
    try {
      const findProduct = await this.productARepository.findOne({ name: request.name });
      if(findProduct){
        return 'Product alredy exist';
      }
      const product = await this.productARepository.create(request,{ session });
      await lastValueFrom(
        this.productBClient.emit('product_created', {
          request
        })
      );
      await session.commitTransaction(); 
      return product;       
    }catch (error) {
      await session.abortTransaction();
      throw new HttpException('Transaction error', HttpStatus.INTERNAL_SERVER_ERROR)   
    }      
  }
  
  async getProducts(page: number, limit: number, search?: string){
    const options = {
      sort:{
        _id: -1
      },
      skip: (page - 1)*limit,
      limit: limit
    };
    const filterQuery = {};
    if(search){
      filterQuery['name'] = search;
    }
    return this.productARepository.find(filterQuery, options);    
  }
 
  
}
