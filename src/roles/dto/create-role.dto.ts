import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {

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
