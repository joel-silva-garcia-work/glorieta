import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsUUID, IsString } from 'class-validator';
import { UbicacionProductDto } from './ubicacion-producto.dto';

export class UpdateExistenceDto {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;

    @ApiProperty({
      type:UbicacionProductDto, 
  })
    ubicacion: UbicacionProductDto
}
