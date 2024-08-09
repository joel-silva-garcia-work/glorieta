import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateRoleDto {

    @IsUUID()
    @IsString()
    @IsOptional()
    id?: string;

    @ApiProperty({
        type: String
    })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        type: String
    })
    @IsString()
    @IsNotEmpty()
    description: string
}
