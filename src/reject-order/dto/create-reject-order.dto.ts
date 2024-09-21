import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsDecimal, IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class CreateRejectOrderDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  rejectProductAmount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  rejectProductPrice: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  orderProductDeliveryId: string;

}
