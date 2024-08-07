import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopSectionsService } from './shop-sections.service';
import { CreateShopSectionDto } from './dto/create-shop-section.dto';
import { UpdateShopSectionDto } from './dto/update-shop-section.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('Delivery')
@Controller('shop-sections')
export class ShopSectionsController extends BaseControllerCRUD<CreateShopSectionDto,UpdateShopSectionDto,ShopSectionsService>{
  constructor(private readonly Service: ShopSectionsService) {
    super(Service)
  }  
}
