import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateShopSectionProductDto } from './create-shop-section-product.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdateShopSectionProductDto extends PartialType(CreateShopSectionProductDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
