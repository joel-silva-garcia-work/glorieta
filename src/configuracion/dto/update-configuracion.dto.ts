import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateConfiguracionDto } from './create-configuracion.dto';
import { IsUUID, IsString } from 'class-validator';

export class UpdateConfiguracionDto extends PartialType(CreateConfiguracionDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
