import { IsUUID, IsDecimal, IsNumber, IsBoolean, IsString } from 'class-validator';

export class CreateOrderProductDeliveryDto {

      @IsUUID()
      id: string;
    
      @IsUUID()
      orderId: string;
    
      @IsUUID()
      shopSectionProductId: string;
    
      @IsNumber()
      amountProduct: number;
    
      @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
      productOrderPrice: number;
    
      @IsString()
      fechaEntrega: string;
    
      @IsUUID()
      deliveryStateId: string;
    
      @IsBoolean()
      toDelivery: boolean;
    }
    