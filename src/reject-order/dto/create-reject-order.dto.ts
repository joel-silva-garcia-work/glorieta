import { IsUUID, IsNumber, IsDecimal } from 'class-validator';

export class CreateRejectOrderDto {
  @IsUUID()
  id: string;

  @IsUUID()
  orderProductDeliveryId: string;

  @IsNumber()
  rejectProductAmount: number;

  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  rejectProductPrice: number;
}
