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

export class LocateProductDto {
  @IsArray()
  @ApiProperty({
    type:[UbicacionProductDto],
    isArray: true
  })
  ubicaciones: [UbicacionProductDto]

}
