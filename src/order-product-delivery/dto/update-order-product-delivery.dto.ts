import { PartialType } from '@nestjs/swagger';
import { CreateOrderProductDeliveryDto } from './create-order-product-delivery.dto';

export class UpdateOrderProductDeliveryDto extends PartialType(CreateOrderProductDeliveryDto) {}
