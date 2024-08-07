import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('Shop')
@Controller('shop')
export class ShopController extends BaseControllerCRUD<CreateShopDto,UpdateShopDto,ShopService>{
  constructor(private readonly Service: ShopService) {
    super(Service)
  }  
}
