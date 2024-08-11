import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  Max,
} from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class CreateCurrencyDto {
  @ApiPropertyOptional()
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  @IsUUID()
  @ApiProperty()
  @Length(3, 3)
  currency: string;

  @IsString()
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto;
}
