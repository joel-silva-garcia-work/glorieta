import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { CreateSectionDto } from './create-section.dto';
import { RulesDto } from '../../common/base/dto/rules.dto';
import { KindEnum } from '../../common/enum/kind.enum';
import { MethodEnum } from '../../common/enum/method.enum';
import { IsString, IsUUID } from 'class-validator';

export class UpdateSectionDto extends PartialType(CreateSectionDto,) {
  @ApiProperty()
  @IsString()
  @IsUUID()
  id: string;
  rules: RulesDto = {
    method: MethodEnum.UPDATE,
    comparisonKind: KindEnum.UINQUE,
    field: ['id', 'name'],
  };
}
