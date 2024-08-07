import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('Product')
@Controller('product')
export class ProductController extends BaseControllerCRUD<CreateProductDto,UpdateProductDto,ProductService>{
  constructor(private readonly Service: ProductService) {
    super(Service)
  }  
}
