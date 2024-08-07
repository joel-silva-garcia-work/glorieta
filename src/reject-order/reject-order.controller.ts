import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RejectOrderService } from './reject-order.service';
import { CreateRejectOrderDto } from './dto/create-reject-order.dto';
import { UpdateRejectOrderDto } from './dto/update-reject-order.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('Reject Order')
@Controller('reject-order')
export class RejectOrderController extends BaseControllerCRUD<CreateRejectOrderDto,UpdateRejectOrderDto,RejectOrderService>{
  constructor(private readonly Service: RejectOrderService) {
    super(Service)
  }  
}
