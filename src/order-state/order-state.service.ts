import { Injectable } from '@nestjs/common';
import { CreateOrderStateDto } from './dto/create-order-state.dto';
import { UpdateOrderStateDto } from './dto/update-order-state.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { OrderStates } from './entities/order-state.entity';
@Injectable()
export class OrderStateService extends BaseServiceCRUD<OrderStates,CreateOrderStateDto,UpdateOrderStateDto> {
  constructor(
    @InjectRepository(OrderStates)
    private readonly repository: Repository<OrderStates>,
  ) {
    super(repository)
  }
}