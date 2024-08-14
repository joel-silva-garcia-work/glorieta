import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class SearchTiendaSeccionProductoMarcaModeloDto {
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
  @IsNumber()
  readonly marcasId?: number;

  @IsOptional()
  @IsString()
  readonly marcasName?: string;

  @IsOptional()
  @IsNumber()
  readonly modelosId?: number;

  @IsOptional()
  @IsString()
  readonly modelosName?: string;

  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean;
}
