import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTipoCambioDto } from './create-tipo-cambio.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdateTipoCambioDto extends PartialType(CreateTipoCambioDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
