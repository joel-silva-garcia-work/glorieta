import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID, IsDecimal, Min } from 'class-validator';

export class SearchShopDeliveryDto {
  @ApiProperty()
  @IsUUID()
  shoppingCartId: string;

  @ApiProperty()
  @IsUUID()
  municipalityId?: string;

}
