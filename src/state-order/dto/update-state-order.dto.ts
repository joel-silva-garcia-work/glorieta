import { PartialType } from '@nestjs/swagger';
import { CreateStateOrderDto } from './create-state-order.dto';

export class UpdateStateOrderDto extends PartialType(CreateStateOrderDto) {}
