import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StateOrderService } from './state-order.service';
import { CreateStateOrderDto } from './dto/create-state-order.dto';
import { UpdateStateOrderDto } from './dto/update-state-order.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('State-Order')
@Controller('state-order')
export class StateOrderController extends BaseControllerCRUD<CreateStateOrderDto,UpdateStateOrderDto,StateOrderService>{
  constructor(private readonly Service: StateOrderService) {
    super(Service)
  }  
}
