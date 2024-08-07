import { PartialType } from '@nestjs/swagger';
import { CreateShopSectionProductDto } from './create-shop-section-product.dto';

export class UpdateShopSectionProductDto extends PartialType(CreateShopSectionProductDto) {}
