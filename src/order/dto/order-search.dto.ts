// src/order/dto/order-search.dto.ts
import { IsOptional, IsString, IsUUID, IsNumber, IsDecimal, IsArray, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

export class OrderSearchDto {
  @IsOptional()
  @IsString()
  readonly noOrden?: string;

  @IsOptional()
  @IsUUID()
  readonly shopId?: string;

  @IsOptional()
  @IsUUID()
  readonly deliveryId?: string;

  @IsOptional()
  @IsNumber()
  readonly deliveryTravels?: number;

  @IsOptional()
  @IsDecimal()
  readonly deliveryTotalPrice?: number;

  @IsOptional()
  @IsUUID()
  readonly orderStateId?: string;

  @IsOptional()
  @IsDecimal()
  readonly totalProductsPrices?: number;

  @IsOptional()
  @IsDecimal()
  readonly totalOrderPrice?: number;

  @IsOptional()
  @IsString()
  readonly fechaOrder?: string;


 
 

 

  @IsOptional()
  @IsNumber()
  readonly deliveryTravelsGreaterThan?: number;

  @IsOptional()
  @IsNumber()
  readonly deliveryTotalPriceGreaterThan?: number;

  @IsOptional()
  @IsNumber()
  readonly deliveryTotalPriceLessThan?: number;

  @IsOptional()
  @IsNumber()
  readonly totalProductsPricesGreaterThan?: number;

  @IsOptional()
  @IsNumber()
  readonly totalOrderPriceGreaterThan?: number;

  @IsOptional()
  @IsArray()
  @Type(() => String)
  readonly fechaOrderBetween?: [string, string]; // Should be ISO date strings

}
