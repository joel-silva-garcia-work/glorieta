import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
