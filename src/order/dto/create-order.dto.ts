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
  isDateString,
  IsDateString,
} from 'class-validator';
import { ClientInfoCreateDTO } from 'src/client-info/dto/create-client-info.dto';



export class CreateOrderDto {

  @ApiProperty()
  @IsBoolean()
  toDelivery: boolean;

  @IsString()  // @IsDate({})
  @IsDateString()
  @ApiProperty({
    type: String,
    example: '2020-12-31T12:00:00.000Z',
  })
  fechaEntrega: string;

  @ApiProperty()
  @IsUUID()
  @IsString()
  shoppingCartId: string;

  @ApiProperty()
  @IsUUID()
  @IsString()
  @IsOptional()
  clientInfo?: ClientInfoCreateDTO;

  noOrden: string;
  fechaOrder: string = new Date().toISOString().split('T')[0];
  deliveryState: string;
  orderState: string;

}
