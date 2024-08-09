import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class CreateShopSectionDto {

  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @IsUUID()
  shop: string;

  @IsUUID()
  section: string;

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto
}
