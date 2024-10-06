import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsUUID, IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class ClientInfoCreateDTO {

  @ApiPropertyOptional()
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  municipalityId: string;

  // @ApiPropertyOptional()
  // @IsBoolean()
  // @IsOptional()
  actual?: boolean = true; // Optional, default is true
  
  @ApiProperty({
    type:RulesDto
  })
  @IsNotEmpty()
rules: RulesDto 
}
