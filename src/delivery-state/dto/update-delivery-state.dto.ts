import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDeliveryStateDto } from './create-delivery-state.dto';
import { IsUUID, IsString } from 'class-validator';

export class UpdateDeliveryStateDto extends PartialType(CreateDeliveryStateDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
