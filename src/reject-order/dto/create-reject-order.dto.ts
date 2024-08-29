import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsDecimal, IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class CreateRejectOrderDto {
  @IsNotEmpty()
  @IsNumber()
  rejectProductAmount: number;

  @IsNotEmpty()
  @IsNumber()
  rejectProductPrice: number;

  @IsNotEmpty()
  @IsUUID()
  orderProductDeliveryId: string;

}
