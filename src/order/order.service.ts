import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
@Injectable()
export class OrderService extends BaseServiceCRUD<Order,CreateOrderDto,UpdateOrderDto> {
  constructor(
    @InjectRepository(Order)
    private readonly repository: Repository<Order>,
  ) {
    super(repository)
  }
}