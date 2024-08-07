import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateProvinceDto {
  @ApiProperty()
  @IsString()  
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  countryId: string;
}
