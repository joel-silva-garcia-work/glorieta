import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsUUID,
  IsDecimal,
  IsNumber,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';
export class CreateOrderDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  noOrden: string;

  @IsUUID()
  shopId: string;

  @IsUUID()
  deliveryId: string;

  @IsNumber()
  deliveryTravels: number;

  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  deliveryTotalPrice: number;

  @IsUUID()
  orderStateId: string;

  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  totalProductsPrices: number;

  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  totalOrderPrice: number;

  @IsOptional()
  @IsString()
  fechaOrder?: string;

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto;
}
