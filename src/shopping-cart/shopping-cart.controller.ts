import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { CreateShoppingCartDto } from './dto/create-shopping-cart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@Controller('shopping-cart')
@ApiTags('shopping-cart')
export class ShoppingCartController  extends BaseControllerCRUD<
CreateShoppingCartDto,
UpdateShoppingCartDto,
ShoppingCartService
> {
constructor(private readonly Service: ShoppingCartService) {
  super(Service);
  }
}