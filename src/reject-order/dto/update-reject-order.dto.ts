import { PartialType } from '@nestjs/swagger';
import { CreateRejectOrderDto } from './create-reject-order.dto';

export class UpdateRejectOrderDto extends PartialType(CreateRejectOrderDto) {}
