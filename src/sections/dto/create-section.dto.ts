import { ApiProperty } from '@nestjs/swagger';
import { RulesDto } from '../../common/base/dto/rules.dto';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateSectionDto {

  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;
  
  @ApiProperty()
  name: string;
    
  @ApiProperty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto
}
