import { Injectable } from '@nestjs/common';
import { CreateShopSectionProductDto } from './dto/create-shop-section-product.dto';
import { UpdateShopSectionProductDto } from './dto/update-shop-section-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { ShopSectionProducts } from './entities/shop-section-product.entity';
@Injectable()
export class ShopSectionProductsService extends BaseServiceCRUD<ShopSectionProducts,CreateShopSectionProductDto,UpdateShopSectionProductDto> {
  constructor(
    @InjectRepository(ShopSectionProducts)
    private readonly repository: Repository<ShopSectionProducts>,
  ) {
    super(repository)
  }
}