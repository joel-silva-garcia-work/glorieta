
import { IsString, IsUUID, IsDecimal, IsNumber, IsOptional } from 'class-validator';
export class CreateOrderDto {

  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  noOrden: string;

  @IsUUID()
  shopId: string;

  @IsUUID()
  deliveryId: string;

  @IsNumber()
  deliveryTravels: number;

  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  deliveryTotalPrice: number;

  @IsUUID()
  orderStateId: string;

  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  totalProductsPrices: number;

  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  totalOrderPrice: number;

  @IsOptional()
  @IsString()
  fechaOrder?: string;
}

