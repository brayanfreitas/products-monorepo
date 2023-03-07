import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductRequest {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
  
  @IsNotEmpty()
  @IsNumber()
  value: number;
  
}