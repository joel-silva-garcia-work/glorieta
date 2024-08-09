import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRejectOrderDto } from './create-reject-order.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdateRejectOrderDto extends PartialType(CreateRejectOrderDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
