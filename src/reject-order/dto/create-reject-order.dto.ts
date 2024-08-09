import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsDecimal, IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class CreateRejectOrderDto {
  
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @IsUUID()
  orderProductDeliveryId: string;

  @IsNumber()
  rejectProductAmount: number;

  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  rejectProductPrice: number;

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto
}
