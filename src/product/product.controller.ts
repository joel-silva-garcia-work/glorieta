import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Render, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ProductSearchDto } from './dto/product-search.dto';
import { Product } from './entities/product.entity';
import { ReturnDto } from 'src/common/base/dto';
import { UpdateExistenceDto } from '../shop-section-products/dto/update-existence.dto';
import { openFormDto } from 'src/common/base/dto/open-form.dto';
import { Request, Response } from 'express';

@ApiTags('Product')
@Controller('product')
export class ProductController extends BaseControllerCRUD<CreateProductDto,UpdateProductDto,ProductService>{
  constructor(private readonly Service: ProductService) {
    super(Service)
  }  
  // @Get('/nuevo')
  // @Render('marcas/nuevo') // Renderiza la vista 'listar.ejs'
  // async openForm(
  //   @Req() request: Request,
  //   @Body() openform: openFormDto) 
  //     :Promise<any> {
  //     const csrfToken = request.csrfToken(); // Genera el token CSRF

  //   const marca = await this.Service.openForm(openform);
  //   return {marca, csrfToken } ;
  // }
  @Get('items')
  async findItems(@Body() searchDto: ProductSearchDto): Promise<ReturnDto> {
    return this.Service.findItems(searchDto) ;
  }
  @Post('/ubicar')
  async ubicar(updateDto: UpdateProductDto): Promise<ReturnDto>{
    return this.Service.updateDetail(updateDto);
  }
  @Post('/updateDetail')
  async updateDetail(updateDto: UpdateProductDto): Promise<ReturnDto>{
    return this.Service.updateDetail(updateDto);
  }
  @Post('/updateExistence')  
  async updateExistence(updateDto: UpdateExistenceDto): Promise<ReturnDto>{
    return this.Service.updateExistence (updateDto);
  }
  
}
