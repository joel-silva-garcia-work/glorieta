import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsUUID } from "class-validator";
import { RelationalDto } from "src/common/base/dto";

export class CreateUserRoleDto {

    @IsUUID()
    @IsString()
    @IsOptional()
    id?: string;

    @ApiProperty()
    @IsString()
    @IsUUID()
    user: RelationalDto

    @ApiProperty()
    @IsString()
    @IsUUID()
    role: RelationalDto
}
