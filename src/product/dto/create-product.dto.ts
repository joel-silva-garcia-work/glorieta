import {
  IsString,
  IsUUID,
  IsDecimal,
  IsOptional,
  IsNotEmpty,
  IsArray,
} from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';
import { UbicacionProductDto } from '../../shop-section-products/dto/ubicacion-producto.dto';
import { ApiProperty } from '@nestjs/swagger';

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

  @IsNotEmpty()
  rules: RulesDto;
}
