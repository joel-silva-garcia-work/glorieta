// src/modelo/dto/modelo-search.dto.ts
import { IsOptional, IsString } from 'class-validator';

export class ModeloSearchDto {
  @IsOptional()
  @IsString()
  readonly name?: string;
}
