import {
  IsString,
  IsUUID,
  IsDecimal,
  IsOptional,
  IsNotEmpty,
  IsArray,
} from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';
import { UbicacionProductDto } from './ubicacion-producto.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  name: string;

  @IsUUID()
  marca: string;

  @IsUUID()
  modelo: string;

  @IsString()
  description: string;

  @IsString()
  photo: string;

  @IsArray()
  @ApiProperty({
    type:[UbicacionProductDto],
    isArray: true
  })
  ubicacion: [UbicacionProductDto]
  @IsNotEmpty()
  rules: RulesDto;
}
