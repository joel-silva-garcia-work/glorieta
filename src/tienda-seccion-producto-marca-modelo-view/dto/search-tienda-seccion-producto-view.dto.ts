import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class SearchTiendaSeccionProductoDto {
  @IsOptional()
  @IsString()
  readonly shopName?: string;

  @IsOptional()
  @IsString()
  readonly sectionsName?: string;

  @IsOptional()
  @IsNumber()
  readonly productId?: number;

  @IsOptional()
  @IsString()
  readonly productName?: string;

  @IsOptional()
  @IsString()
  readonly productMarca?: string;

  @IsOptional()
  @IsString()
  readonly productModelo?: string;

  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean;
}
