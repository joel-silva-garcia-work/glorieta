// src/currency/dto/currency-search.dto.ts
import { IsOptional, IsString } from 'class-validator';

export class CurrencySearchDto {
  @IsOptional()
  @IsString()
  readonly currency?: string;

  @IsOptional()
  @IsString()
  readonly name?: string;
}
