import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ProductSearchDto } from './dto/product-search.dto';
import { Product } from './entities/product.entity';

@ApiTags('Product')
@Controller('product')
export class ProductController extends BaseControllerCRUD<CreateProductDto,UpdateProductDto,ProductService>{
  constructor(private readonly Service: ProductService) {
    super(Service)
  }  
  @Get()
  async findItems(@Query() searchDto: ProductSearchDto): Promise<Product[]> {
    return this.Service.findItems(searchDto);
  }
}
