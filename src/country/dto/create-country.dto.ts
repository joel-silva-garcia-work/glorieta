import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateCountryDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  code: string;

  @ApiProperty()
  @IsInt()
  numericCode: number;
}
