import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderProductDeliveryService } from './order-product-delivery.service';
import { CreateOrderProductDeliveryDto } from './dto/create-order-product-delivery.dto';
import { UpdateOrderProductDeliveryDto } from './dto/update-order-product-delivery.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';

@ApiTags('Order Product Delivery')
@Controller('order-product-delivery')
export class OrderProductDeliveryController extends BaseControllerCRUD<CreateOrderProductDeliveryDto,UpdateOrderProductDeliveryDto,OrderProductDeliveryService>{
  constructor(private readonly Service: OrderProductDeliveryService) {
    super(Service)
  }  
  @Get('top-10-best-selling-products')
  async getTop10BestSellingProducts(): Promise<ReturnDto> {
    return this.Service.getTop10BestSellingProducts();
  }
}
