import { PartialType } from '@nestjs/swagger';
import { CreateShopSectionDto } from './create-shop-section.dto';

export class UpdateShopSectionDto extends PartialType(CreateShopSectionDto) {}
