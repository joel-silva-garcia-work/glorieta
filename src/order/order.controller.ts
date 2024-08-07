import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('Order')
@Controller('order')
export class OrderController extends BaseControllerCRUD<CreateOrderDto,UpdateOrderDto,OrderService>{
  constructor(private readonly Service: OrderService) {
    super(Service)
  }  
}
