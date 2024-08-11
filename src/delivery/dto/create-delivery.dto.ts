import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsUUID,
  IsDecimal,
  IsNumber,
  IsString,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class CreateDeliveryDto {
  @ApiPropertyOptional()
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsUUID()
  municipalityOrigin: string;

  @ApiProperty()
  @IsUUID()
  municipalityDestiny: string;

  @ApiProperty()
  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  price: number;

  @ApiProperty()
  @IsUUID()
  deliveryStateId: string;

  @ApiProperty({
    type: RulesDto,
  })
  @IsNotEmpty()
  rules: RulesDto;
}
