// src/marcas/dto/marcas-search.dto.ts
import { IsOptional, IsString } from 'class-validator';

export class MarcasSearchDto {
  @IsOptional()
  @IsString()
  readonly name?: string;
}
