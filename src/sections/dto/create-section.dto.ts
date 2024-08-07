import { ApiProperty } from '@nestjs/swagger';
import { RulesDto } from '../../common/base/dto/rules.dto';
import { KindEnum } from '../../common/enum/kind.enum';
import { MethodEnum } from '../../common/enum/method.enum';
import { IsOptional, IsUUID } from 'class-validator';

export class CreateSectionDto {
  @IsUUID()
  @IsOptional()
  id?: string;
  @ApiProperty()
  name: string;

  rules: RulesDto = {
    method: MethodEnum.CREATE,
    comparisonKind: KindEnum.UINQUE,
    field: ['name'],
  };
}
