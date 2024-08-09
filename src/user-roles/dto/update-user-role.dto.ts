import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserRoleDto } from './create-user-role.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdateUserRoleDto extends PartialType(CreateUserRoleDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
