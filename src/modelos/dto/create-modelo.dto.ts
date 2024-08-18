import { ApiProperty } from '@nestjs/swagger';
import { RulesDto } from '../../common/base/dto/rules.dto';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateModeloDto {

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
  
  @IsNotEmpty()
  rules: RulesDto 
}
