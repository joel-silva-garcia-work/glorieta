import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateStateOrderDto } from './create-state-order.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdateStateOrderDto extends PartialType(CreateStateOrderDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
