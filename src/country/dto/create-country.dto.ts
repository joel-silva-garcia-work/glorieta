import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsInt, IsUUID, IsOptional, IsNotEmpty } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class CreateCountryDto {

  @ApiPropertyOptional()
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
  code: string;

  @ApiProperty()
  @IsInt()
  numericCode: number;

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto
}
