import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('Delivery')
@Controller('delivery')
export class DeliveryController extends BaseControllerCRUD<CreateDeliveryDto,UpdateDeliveryDto,DeliveryService>{
  constructor(private readonly Service: DeliveryService) {
    super(Service)
  }  
}
