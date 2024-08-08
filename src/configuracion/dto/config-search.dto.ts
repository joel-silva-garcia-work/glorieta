// src/config/dto/config-search.dto.ts
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class ConfigSearchDto {
  @IsOptional()
  @IsUUID()
  readonly sellCurrencyId?: string;

  @IsOptional()
  @IsUUID()
  readonly deliveryCurrencyId?: string;

  @IsOptional()
  @IsString()
  readonly sellCurrencyName?: string;

  @IsOptional()
  @IsString()
  readonly deliveryCurrencyName?: string;
}
