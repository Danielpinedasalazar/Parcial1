// src/organs/dto/create-organ.dto.ts
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrganDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  price: number;
}