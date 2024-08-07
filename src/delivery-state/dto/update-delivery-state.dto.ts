import { PartialType } from '@nestjs/swagger';
import { CreateDeliveryStateDto } from './create-delivery-state.dto';

export class UpdateDeliveryStateDto extends PartialType(CreateDeliveryStateDto) {}
