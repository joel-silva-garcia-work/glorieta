// src/client-info/dto/client-info-search.dto.ts
import { Type } from 'class-transformer';
import { IsOptional, IsString, IsUUID, IsBoolean, IsNotEmpty, IsArray, IsNumber, ValidateNested } from 'class-validator';
import { OrderByFieldDto } from 'src/common/base/dto/orderByField.dto';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class ClientInfoSearchDto {
  @IsOptional()
  @IsString()
  readonly nombre?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsString()
  readonly email?: string;

  @IsOptional()
  @IsUUID()
  readonly municipalityId?: string;

  @IsOptional()
  @IsUUID()
  readonly municipalityName?: string;

  @IsOptional()
  @IsBoolean()
  readonly actual?: boolean;

  @IsOptional()
  @IsString()
  readonly municipality?: string;

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
