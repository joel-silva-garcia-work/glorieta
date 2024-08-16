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
  product: string;

  @IsUUID()
  @IsString()
  shopSection: string;

  @ApiProperty()
  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  price: number;

  @ApiProperty()
  @IsInt()
  existence: number;

  @ApiProperty({
    isArray: true,
    type:JSON
  })
  caracteristcas:Record<string, any>[]

}
