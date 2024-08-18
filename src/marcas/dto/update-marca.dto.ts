import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMarcaDto } from './create-marca.dto';
import { RulesDto } from '../../common/base/dto/rules.dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateMarcaDto extends PartialType(CreateMarcaDto) {
  @ApiProperty()
  @IsString()
  @IsUUID()
  id: string;  
  @ApiProperty({
    type: RulesDto
  })
  @IsNotEmpty()
  rules: RulesDto 
}
