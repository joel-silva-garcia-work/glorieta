import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOrderStateDto } from './create-order-state.dto';
import { IsUUID, IsString } from 'class-validator';

export class UpdateOrderStateDto extends PartialType(CreateOrderStateDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
