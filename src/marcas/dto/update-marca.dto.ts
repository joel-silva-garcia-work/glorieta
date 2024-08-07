import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMarcaDto } from './create-marca.dto';
import { RulesDto } from '../../common/base/dto/rules.dto';
import { KindEnum } from '../../common/enum/kind.enum';
import { MethodEnum } from '../../common/enum/method.enum';
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
