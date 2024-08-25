import { ApiProperty } from '@nestjs/swagger';
import {
  IsUUID,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsDecimal,
  IsInt,
  Min,
  ArrayMinSize,
  ValidateNested,
  IsArray,
  ArrayMaxSize,
} from 'class-validator';
import { Type } from 'class-transformer';
import { RulesDto } from 'src/common/base/dto/rules.dto';
import { LocateProductDto } from './locate-product.dto';

class ShopSectionProductDetailDto {
  @ApiProperty()
  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  @Min(1)
  price: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  existence: number;

  @ApiProperty({
    isArray: true,
  })
  @ArrayMinSize(1)
  @ArrayMaxSize(7)
  caracteristcas: Record<string, any>[];
}

export class CreateShopSectionProductDto extends LocateProductDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsUUID()
  @IsString()
  product: string;

  @ApiProperty({
    type: [ShopSectionProductDetailDto],
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ShopSectionProductDetailDto)
  shopSectionDetails: {
    shopSection: string;
    details: ShopSectionProductDetailDto;
  }[];

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto;
}
