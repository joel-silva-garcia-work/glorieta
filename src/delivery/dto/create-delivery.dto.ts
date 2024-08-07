import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsDecimal, IsNumber } from 'class-validator';

export class CreateDeliveryDto {

  @IsUUID()
  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsUUID()
  municipalityOriginId: string;

  @ApiProperty()
  @IsUUID()
  municipalityDestinyId: string;

  @ApiProperty()
  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  price: number;
}

