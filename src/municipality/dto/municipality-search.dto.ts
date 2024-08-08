// src/municipality/dto/municipality-search.dto.ts
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class MunicipalitySearchDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsUUID()
  readonly provinceId?: string;

  @IsOptional()
  @IsString()
  readonly provinceName?: string;
}
