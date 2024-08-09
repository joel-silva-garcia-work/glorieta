import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOrderProductDeliveryDto } from './create-order-product-delivery.dto';
import { IsUUID, IsString } from 'class-validator';

export class UpdateOrderProductDeliveryDto extends PartialType(CreateOrderProductDeliveryDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
