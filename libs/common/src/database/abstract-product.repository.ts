import { Logger } from '@nestjs/common';
import { ClientSession, Connection, FilterQuery, Model, QueryOptions, SaveOptions, Types } from 'mongoose';
import { AbstractProduct } from './abstract-product.schema';

export abstract class AbstractProductRepository<TDocument extends AbstractProduct>{
  protected abstract readonly logger: Logger;

  constructor(
    protected readonly model: Model<TDocument>,
    private readonly connection: Connection
  ){}

  async create(
    document: Omit<TDocument, '_id'>,
    options?: SaveOptions
  ):Promise<TDocument>{
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId()
    });

    return (
      await createdDocument.save(options)
      ).toJSON() as unknown as TDocument;    
  }

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const document = await this.model.findOne(filterQuery, {}, { lean: true } );
    return document;
  }

  async find(filterQuery: FilterQuery<TDocument>, options?: QueryOptions<TDocument> ) {
    let documents = await this.model.find(filterQuery, {}, { lean: true, ...options })
    if(options){
      documents = await this.model.find(filterQuery, {}, { lean: true, ...options });
      console.log(filterQuery)
    }else {
      documents = await this.model.find(filterQuery, {}, { lean: true });
    }    
    return documents;
    
  }

  async startTransaction(): Promise<ClientSession> {
    const session = await this.connection.startSession();
    session.startTransaction();
    return session;
  }
}