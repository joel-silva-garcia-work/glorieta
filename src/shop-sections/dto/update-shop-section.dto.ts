import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateShopSectionDto } from './create-shop-section.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdateShopSectionDto extends PartialType(CreateShopSectionDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
