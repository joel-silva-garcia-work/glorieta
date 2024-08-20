import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsUUID,
  IsDecimal,
  IsInt,
  Min,
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
  @Min(1)  // Asegura que el precio sea al menos 1
  price: number;

  @ApiProperty()
  @IsInt()
  @Min(0)  // Asegura que al menos 0
  existence: number;

  @ApiProperty({
    isArray: true,
    // type:JSON
  })
  caracteristcas:Record<string, any>[]

}
