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


export class CreateShopSectionProductDto extends LocateProductDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsUUID()
  @IsString()
  product: string;
  
  @ApiProperty()
  @IsUUID()
  @IsString()
  shop: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  existence: number;


  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto;
}
