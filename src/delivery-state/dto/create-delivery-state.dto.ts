import { ApiProperty } from "@nestjs/swagger";
import { IsUUID, IsString, IsOptional, IsNotEmpty } from "class-validator";
import { RulesDto } from "src/common/base/dto/rules.dto";

export class CreateDeliveryStateDto {

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

      
  @ApiProperty({
    type:RulesDto
  })
  @IsNotEmpty()
rules: RulesDto 
}
