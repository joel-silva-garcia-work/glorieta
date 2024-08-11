import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class CreateOrderStateDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  rules: RulesDto;
}
