import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsUUID,
  IsDecimal,
  IsInt,
} from 'class-validator';

export class UbicacionProductDto {
  @ApiProperty()
  @IsUUID()
  @IsString()
  shop: string;

  @ApiProperty()
  @IsUUID()
  @IsString()
  section: string;


  @ApiProperty()
  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  price: number;

  @ApiProperty()
  @IsInt()
  existence: number;

}
