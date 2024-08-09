import { ApiProperty, PartialType } from '@nestjs/swagger';
import { ClientInfoCreateDTO } from './create-client-info.dto';
import { IsUUID, IsString } from 'class-validator';

export class UpdateClientInfoDto extends PartialType(ClientInfoCreateDTO) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
