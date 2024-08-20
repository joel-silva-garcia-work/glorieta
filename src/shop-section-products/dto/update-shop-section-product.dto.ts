import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { CreateShopSectionProductDto } from './create-shop-section-product.dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class UpdateShopSectionProductDto 
        extends OmitType(CreateShopSectionProductDto, 
            [
                'product', 
                'shopSection'
            ] as const) 
            {
    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;

    @ApiProperty()
    @IsNotEmpty()
    rules: RulesDto;
    
    
}
