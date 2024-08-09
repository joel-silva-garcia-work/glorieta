import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsUUID, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
}
