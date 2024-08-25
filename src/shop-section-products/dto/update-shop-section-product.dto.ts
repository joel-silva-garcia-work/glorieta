import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { CreateShopSectionProductDto } from './create-shop-section-product.dto';
import { IsArray, IsDecimal, IsInt, IsNotEmpty, IsObject, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class UpdateShopSectionProductDto 
{
    @IsUUID()
    @IsString()
    @IsOptional()
    id?: string;

  @ApiProperty()
  @IsOptional()
  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  @Min(0)
  price?: number;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @Min(0)
  existence?: number;

  @ApiProperty({
    isArray: true,
    description: 'List of characteristics to be updated'
  })
  @IsOptional()
  @IsArray()
   @IsObject({ each: true })
  characteristics?: Record<string, any>[];

  
        }