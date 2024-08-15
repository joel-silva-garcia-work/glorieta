import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsUUID, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(
    OmitType(CreateProductDto, ['ubicacion'] as const),){
    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
}
