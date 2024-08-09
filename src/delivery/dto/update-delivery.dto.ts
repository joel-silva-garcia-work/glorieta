import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDeliveryDto } from './create-delivery.dto';
import { IsUUID, IsString } from 'class-validator';

export class UpdateDeliveryDto extends PartialType(CreateDeliveryDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
