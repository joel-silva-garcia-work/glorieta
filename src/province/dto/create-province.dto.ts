import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsOptional, IsNotEmpty } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class CreateProvinceDto {
  
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsString()  
  name: string;


  description?: string;

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto
}
