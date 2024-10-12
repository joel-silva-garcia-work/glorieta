import {
  IsString,
  IsUUID,
  IsOptional,
  IsNotEmpty,
  IsDecimal,
  Min,
  ArrayMinSize,
  ArrayMaxSize,
} from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';


export class CreateProductDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  name: string;

  @IsString()
  marca: string;

  @IsString()
  modelo: string;

  @IsString()
  description: string;

  @IsString()
  photo: string;

  @ApiProperty()
  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  @Min(1)
  price: number;

  @ApiProperty({
    isArray: true,
  })
  @ArrayMinSize(1)
  @ArrayMaxSize(7)
  caracteristicas: Record<string, any>[];
  @IsNotEmpty()
  rules: RulesDto;
}
