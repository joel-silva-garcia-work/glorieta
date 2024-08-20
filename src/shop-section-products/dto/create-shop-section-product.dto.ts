import { ApiProperty } from '@nestjs/swagger';
import {
  IsUUID,
  IsNumber,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsDecimal,
  IsInt,
  Min,
  ArrayMinSize,
} from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';
import { LocateProductDto } from './locate-product.dto';

export class CreateShopSectionProductDto extends LocateProductDto{
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

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
  @Min(0)  // Asegura que la existencia sea al menos 0
  existence: number;

  @ApiProperty({
    isArray: true,
  })
  @ArrayMinSize(1)  // Asegura que el arreglo tenga al menos un elemento

  caracteristcas:Record<string, any>[]
  
  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto;
}
