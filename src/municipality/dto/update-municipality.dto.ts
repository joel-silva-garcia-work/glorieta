import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMunicipalityDto } from './create-municipality.dto';
import { IsUUID, IsString } from 'class-validator';

export class UpdateMunicipalityDto extends PartialType(CreateMunicipalityDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
