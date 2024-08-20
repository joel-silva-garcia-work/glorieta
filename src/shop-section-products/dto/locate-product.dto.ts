import {
  IsArray,
} from 'class-validator';
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
