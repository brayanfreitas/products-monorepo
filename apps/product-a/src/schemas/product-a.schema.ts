import { AbstractProduct } from '@app/common';
import { Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ProductA extends AbstractProduct{}

export const ProductASchema = SchemaFactory.createForClass(ProductA)