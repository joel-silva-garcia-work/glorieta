import { Injectable } from '@nestjs/common';
import { CreateShopSectionDto } from './dto/create-shop-section.dto';
import { UpdateShopSectionDto } from './dto/update-shop-section.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { ShopSections } from './entities/shop-section.entity';

@Injectable()
export class ShopSectionsService extends BaseServiceCRUD<ShopSections,CreateShopSectionDto,UpdateShopSectionDto> {
  constructor(
    @InjectRepository(ShopSections)
    private readonly repository: Repository<ShopSections>,
  ) {
    super(repository)
  }
}