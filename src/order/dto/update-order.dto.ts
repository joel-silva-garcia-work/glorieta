import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsUUID, IsString } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
