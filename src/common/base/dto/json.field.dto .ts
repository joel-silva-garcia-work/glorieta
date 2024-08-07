import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional } from "class-validator";


export class JsonFieldDto {


  @ApiPropertyOptional()
  @IsOptional()
  language: string;


}
