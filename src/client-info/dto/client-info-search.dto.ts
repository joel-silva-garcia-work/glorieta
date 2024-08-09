// src/client-info/dto/client-info-search.dto.ts
import { IsOptional, IsString, IsUUID, IsBoolean, IsNotEmpty } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

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
