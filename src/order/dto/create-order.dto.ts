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
  IsDate,
} from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class ProductDto {
  @IsString()
  @IsNotEmpty()
  shopSectionProductId: string;

  @IsNumber()
  quantity: number;
}

export class CreateOrderDto {

  @ApiProperty()
  @IsUUID()
  @IsString()
  shop: string;

  @ApiProperty()
  @IsBoolean()
  toDelivery: boolean;

  @IsString()
  municipalityOrigin?: string;

  @IsString()
  // @IsDate({})
  fechaEntrega: string;

  @IsString()
  municipalityDestiny?: string;

  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products: ProductDto[];

  noOrden: string;
  totalProductsPrices: number;
  totalPrice: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  fechaOrder?: string;

  @ApiProperty()
  @IsUUID()
  @IsString()
  @IsOptional()
  deliveryState?: string;

  @ApiProperty()
  @IsUUID()
  @IsString()
  @IsOptional()
  orderState?: string;

  @ApiProperty()
  @IsUUID()
  @IsString()
  @IsOptional()
  delivery?: string;

}
