import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";
import { RelationalDto } from "src/common/base/dto";

export class CreateUserRoleDto {

    @ApiProperty()
    @IsString()
    @IsUUID()
    user: RelationalDto
    
    @ApiProperty()
    @IsString()
    @IsUUID()
    role: RelationalDto
}
