import { ApiProperty } from "@nestjs/swagger";
import { IsUUID, IsString, IsOptional, IsNotEmpty } from "class-validator";
import { RulesDto } from "src/common/base/dto/rules.dto";

export class CreateLocalityDto {

    @IsUUID()
    @IsString()
    @IsOptional()
    id?: string;
    
    @ApiProperty()
    @IsString()
    name: string;
  
    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsString()
    municipality: string;

      
  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto
  

}
