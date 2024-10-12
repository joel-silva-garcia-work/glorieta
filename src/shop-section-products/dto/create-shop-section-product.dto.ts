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

  @ApiProperty()
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsUUID()
  @IsString()
  productId: string;
  
  @ApiProperty()
  @IsUUID()
  @IsString()
  shopSectionId: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  existence: number;


  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto;
}
