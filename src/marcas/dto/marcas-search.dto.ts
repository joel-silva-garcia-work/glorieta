// src/marcas/dto/marcas-search.dto.ts
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { OrderByFieldDto } from 'src/common/base/dto/orderByField.dto';

export class MarcasSearchDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

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
}
