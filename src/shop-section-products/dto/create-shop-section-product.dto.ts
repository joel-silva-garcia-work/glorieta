import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class CreateShopSectionProductDto {

  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @IsUUID()
  shopSection: string;

  @IsUUID()
  product: string;

  @IsNumber()
  existence: number;

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto
}
