import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShopSectionProductsService } from './shop-section-products.service';
import { CreateShopSectionProductDto } from './dto/create-shop-section-product.dto';
import { UpdateShopSectionProductDto } from './dto/update-shop-section-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { SearchProductDto } from './dto/search-product.dto';

@ApiTags('Shop Section Products')
@Controller('shop-section-products')
export class ShopSectionProductsController extends BaseControllerCRUD<
  CreateShopSectionProductDto,
  UpdateShopSectionProductDto,
  ShopSectionProductsService
> {
  constructor(private readonly Service: ShopSectionProductsService) {
    super(Service);
  }

  @Patch()  
  override async update(updateDto: UpdateShopSectionProductDto): Promise<ReturnDto>{
    return this.Service.update(updateDto);
  }

  @Post('search')
  async searchProduct(@Body() searchProductDto: SearchProductDto): Promise<ReturnDto> {
    return this.Service.searchProduct(searchProductDto);
  }
}
