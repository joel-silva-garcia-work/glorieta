import { Injectable } from '@nestjs/common';
import { CreateOrderProductDeliveryDto } from './dto/create-order-product-delivery.dto';
import { UpdateOrderProductDeliveryDto } from './dto/update-order-product-delivery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { OrderProductDelivery } from './entities/order-product-delivery.entity';

@Injectable()
export class OrderProductDeliveryService extends BaseServiceCRUD<OrderProductDelivery,CreateOrderProductDeliveryDto,UpdateOrderProductDeliveryDto> {
  constructor(
    @InjectRepository(OrderProductDelivery)
    private readonly repository: Repository<OrderProductDelivery>,
  ) {
    super(repository)
  }
}