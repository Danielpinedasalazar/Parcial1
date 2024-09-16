// src/relocation/dto/create-relocation.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRelocationDto {
  @IsString()
  @IsNotEmpty()
  risk: string;

  @IsString()
  @IsNotEmpty()
  details: string;
}