
import { IsOptional, IsString, IsUUID } from "class-validator";

export class openFormDto {
  @IsOptional()
  @IsString()
  @IsUUID() 
  readonly id?: string;

  @IsOptional()
  @IsString()
  readonly table?: string;

}
