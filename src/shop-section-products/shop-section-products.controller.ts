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
import { LocateProductDto } from './dto/locate-product.dto';
import { SearchSSPDto } from './dto/search.dto';
import { SearchShopDeliveryDto } from '../order/dto/search-shop-delivery.dto';
// ip/shop-section-products/prod-section
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

  @Post()
  override async create(@Body() locateProductDto: LocateProductDto): Promise<ReturnDto>{
    return this.Service.locateProduct(locateProductDto);
  }

  @Patch()  
  override async update(updateDto: UpdateShopSectionProductDto): Promise<ReturnDto>{
    return this.Service.update(updateDto);
  }

  @Post('search')
  async searchProduct(@Body() searchProductDto: SearchProductDto): Promise<ReturnDto> {
    return this.Service.searchProduct(searchProductDto);
  }
  
  @Post('prod-shop-section')
  async searchProdBy(@Body() dto: SearchProductDto): Promise<ReturnDto> {
    return this.Service.searchProductBy(dto);
  }  
  @Post('get-by-ids')
  async searchByIds(@Body() dto: SearchSSPDto): Promise<ReturnDto> {
    return this.Service.searchByIds(dto);
  }


}
