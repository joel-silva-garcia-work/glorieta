import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { OrderSearchDto } from './dto/order-search.dto';
import { Order } from './entities/order.entity';
import { ReturnDto } from 'src/common/base/dto/return.dto';
import { SearchShopDeliveryDto } from './dto/search-shop-delivery.dto';

@ApiTags('Order')
@Controller('order')
export class OrderController extends BaseControllerCRUD<
  CreateOrderDto,
  UpdateOrderDto,
  OrderService
> {
  constructor(private readonly Service: OrderService) {
    super(Service);
  }
  @Get()
  async findItems(@Query() searchDto: OrderSearchDto): Promise<Order[]> {
    return this.Service.findItems(searchDto);
  }

      
  @Post('get-delivery')
  async getDelivery(@Body() dto: SearchShopDeliveryDto): Promise<ReturnDto> {
    return this.Service.getDelivery(dto);
  }
  
}
