// src/client-info/dto/client-info-search.dto.ts
import { IsOptional, IsString, IsUUID, IsBoolean } from 'class-validator';

export class ClientInfoSearchDto {
  @IsOptional()
  @IsString()
  readonly nombre?: string;

  @IsOptional()
  @IsString()
  readonly email?: string;

  @IsOptional()
  @IsUUID()
  readonly municipalityId?: string;

  @IsOptional()
  @IsBoolean()
  readonly actual?: boolean;

  @IsOptional()
  @IsString()
  readonly municipalityName?: string;
}
