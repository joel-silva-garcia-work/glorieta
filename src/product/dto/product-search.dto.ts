// src/product/dto/product-search.dto.ts
import { IsOptional, IsString, IsUUID, IsDecimal } from 'class-validator';

export class ProductSearchDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsUUID()
  readonly marcaId?: string;

  @IsOptional()
  @IsUUID()
  readonly modeloId?: string;

  @IsOptional()
  @IsString()
  readonly descripcion?: string;

  @IsOptional()
  @IsString()
  readonly photo?: string;

  @IsOptional()
  @IsDecimal()
  readonly price?: number;
}
