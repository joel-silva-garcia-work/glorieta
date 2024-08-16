import { ApiProperty } from '@nestjs/swagger';
import {
  IsUUID,
  IsNumber,
  IsOptional,
  IsString,
  IsNotEmpty,
} from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';
import { LocateProductDto } from './locate-product.dto';

export class CreateShopSectionProductDto extends LocateProductDto{
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto;
}
