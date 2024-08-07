import { ApiProperty } from '@nestjs/swagger';
import { RulesDto } from '../../common/base/dto/rules.dto';
import { KindEnum } from '../../common/enum/kind.enum';
import { MethodEnum } from '../../common/enum/method.enum';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateModeloDto {
  @IsUUID()
  @IsOptional() 
  id?: string;
  
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;
  
  rules: RulesDto = {
    method: MethodEnum.CREATE,
    comparisonKind: KindEnum.UINQUE,
    field: ['name'],
  };
}
