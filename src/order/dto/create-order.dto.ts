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
import { ClientInfoCreateDTO } from 'src/client-info/dto/create-client-info.dto';
import { RulesDto } from 'src/common/base/dto/rules.dto';



export class CreateOrderDto {

  @ApiProperty()
  @IsBoolean()
  toDelivery: boolean;


  @IsString()  // @IsDate({})
  fechaEntrega: string;

  @ApiProperty()
  @IsUUID()
  @IsString()
  shoppingCartId: string;
  @ApiProperty()
  @IsUUID()
  @IsString()
  @IsOptional()
  delivery?: string;

  @ApiProperty()
  @IsUUID()
  @IsString()
  @IsOptional()
  clientInfo?: ClientInfoCreateDTO;

  noOrden: string;
  totalProductsPrices: number;
  totalPrice: number;
  fechaOrder: string;
  deliveryState: string;
  orderState: string;

}
