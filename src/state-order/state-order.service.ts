import { Injectable } from '@nestjs/common';
import { CreateStateOrderDto } from './dto/create-state-order.dto';
import { UpdateStateOrderDto } from './dto/update-state-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { StateOrder } from './entities/state-order.entity';

@Injectable()
export class StateOrderService extends BaseServiceCRUD<StateOrder,CreateStateOrderDto,UpdateStateOrderDto> {
  constructor(
    @InjectRepository(StateOrder)
    private readonly repository: Repository<StateOrder>,
  ) {
    super(repository)
  }
}