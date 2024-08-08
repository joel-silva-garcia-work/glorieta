// src/deliveries/dto/deliveries-search.dto.ts
import { IsOptional, IsUUID, IsDecimal, IsString } from 'class-validator';

export class DeliveriesSearchDto {
  @IsOptional()
  @IsUUID()
  readonly municipalityOriginId?: string;

  @IsOptional()
  @IsUUID()
  readonly municipalityDestinyId?: string;

  @IsOptional()
  @IsDecimal()
  readonly price?: number;

  @IsOptional()
  @IsString()
  readonly municipalityOriginName?: string;

  @IsOptional()
  @IsString()
  readonly municipalityDestinyName?: string;
}
