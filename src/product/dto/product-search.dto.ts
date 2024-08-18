// src/product/dto/product-search.dto.ts
import { Type } from 'class-transformer';
import { IsOptional, IsString, IsUUID, IsDecimal, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { OrderByFieldDto } from 'src/common/base/dto/orderByField.dto';

export class ProductSearchDto {

  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsUUID()
  readonly marca?: string;

  @IsOptional()
  @IsUUID()
  readonly modelo?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderByFieldDto)
  orderBy?: OrderByFieldDto[]; // Array de campos y direcciones de ordenamiento
  
  @IsOptional()
  @IsNumber()
  skip?: number;

  @IsOptional()
  @IsNumber()
  take?: number;

  photo: string;
  price: number;


}
