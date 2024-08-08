// src/delivery-state/dto/delivery-state-search.dto.ts
import { IsOptional, IsString } from 'class-validator';

export class DeliveryStateSearchDto {
  @IsOptional()
  @IsString()
  readonly name?: string;
}
