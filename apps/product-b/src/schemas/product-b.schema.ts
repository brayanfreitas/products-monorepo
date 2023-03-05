import { AbstractProduct } from '@app/common';
import { Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ProductB extends AbstractProduct{}

export const OrderSchema = SchemaFactory.createForClass(ProductB)