import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID, IsNotEmpty } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class CreateMunicipalityDto {

  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;
  
  @ApiProperty()
  @IsString()
  name: string


  @ApiProperty()
  @IsString()
  description: string

  @ApiProperty()
  @IsString()
  province_id: string;

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto

}
