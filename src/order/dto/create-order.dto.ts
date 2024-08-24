import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsUUID,
  IsDecimal,
  IsNumber,
  IsOptional,
  IsNotEmpty,
  ValidateNested,
  IsBoolean,
} from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class ProductDto {
  @IsString()
  @IsNotEmpty()
  shopSectionProductId: string;

  @IsNumber()
  quantity: number;
}

export class OrderDto {
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products: ProductDto[];

  @IsString()
  municipalityOrigin?: string;

  @IsString()
  municipalityDestiny?: string;
}

export class CreateOrderDto {

  @ApiProperty()
  @IsUUID()
  @IsString()
  shop: string;

  @ApiProperty()
  @IsBoolean()
  toDelivery: boolean;

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => OrderDto)
  orders: OrderDto[];

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto;
}
