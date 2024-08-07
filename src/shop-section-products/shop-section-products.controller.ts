import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopSectionProductsService } from './shop-section-products.service';
import { CreateShopSectionProductDto } from './dto/create-shop-section-product.dto';
import { UpdateShopSectionProductDto } from './dto/update-shop-section-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('Shop Section Products')
@Controller('shop-section-products')
export class ShopSectionProductsController extends BaseControllerCRUD<CreateShopSectionProductDto,UpdateShopSectionProductDto,ShopSectionProductsService>{
  constructor(private readonly Service: ShopSectionProductsService) {
    super(Service)
  }  
}
