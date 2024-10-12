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
  section: string;

  @IsUUID()
  @IsString()
  shop: string;


  @ApiProperty()
  @IsInt()
  @Min(0)  // Asegura que al menos 0
  existence: number;

}
