import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsNumber } from 'class-validator';

export class CreateMunicipalityDto {

  @ApiProperty()
  @IsString()
  name: string


  @ApiProperty()
  @IsString()
  description: string

  @ApiProperty()
  @IsString()
  provinceId: string;

}
