import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderStateService } from './order-state.service';
import { CreateOrderStateDto } from './dto/create-order-state.dto';
import { UpdateOrderStateDto } from './dto/update-order-state.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('Order State')
@Controller('order-state')
export class OrderStateController extends BaseControllerCRUD<CreateOrderStateDto,UpdateOrderStateDto,OrderStateService>{
  constructor(private readonly Service: OrderStateService) {
    super(Service)
  }  
}
