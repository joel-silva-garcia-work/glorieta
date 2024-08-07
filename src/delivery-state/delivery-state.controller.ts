import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryStateService } from './delivery-state.service';
import { CreateDeliveryStateDto } from './dto/create-delivery-state.dto';
import { UpdateDeliveryStateDto } from './dto/update-delivery-state.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('Delivery-State')
@Controller('delivery-state')
export class DeliveryStateController extends BaseControllerCRUD<CreateDeliveryStateDto,UpdateDeliveryStateDto,DeliveryStateService>{
  constructor(private readonly Service: DeliveryStateService) {
    super(Service)
  }  
}
