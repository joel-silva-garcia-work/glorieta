import {
  IsUUID,
  IsDecimal,
  IsNumber,
  IsBoolean,
  IsString,
  IsOptional,
} from 'class-validator';

export class CreateOrderProductDeliveryDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @IsUUID()
  orderId: string;

  @IsUUID()
  shopSectionProductId: string;

  @IsNumber()
  amountProduct: number;

}
