import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { ShopSearchDto } from './dto/shop-search.dto';

@ApiTags('Shop')
@Controller('shop')
export class ShopController extends BaseControllerCRUD<CreateShopDto,UpdateShopDto,ShopService>{
  constructor(private readonly Service: ShopService) {
    super(Service)
  }  
  @Post('add-shop')
  async addShop(@Body()addShop: CreateShopDto):Promise<ReturnDto>{
    return this.Service.addShop(addShop)
  }
  @Post('all')
  async findAll(@Body() searchDto: ShopSearchDto): Promise<ReturnDto> {
    return await this.Service.findBy(searchDto);
  }
}
