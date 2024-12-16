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
  name: string;


  description?: string;

  @ApiProperty()
  @IsString()
  province_id: string;

  @ApiProperty({ default: 0, type: 'double precision' })
  latitude: number

  @ApiProperty({ default: 0, type: 'double precision' })
  longitude: number

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto;
}
