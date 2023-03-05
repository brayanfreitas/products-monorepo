import { Prop, Schema } from '@nestjs/mongoose';
import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

@Schema()
export class AbstractProduct {

  @Prop()
  @IsMongoId()
  _id: Types.ObjectId

  @Prop([String])
  @IsString()
  @IsNotEmpty()
  name: string

  @Prop([String])
  @IsString()
  @IsOptional()
  description?: string
  
  @Prop([Number])
  @IsNotEmpty()
  @IsNumber()
  value: number
  
}