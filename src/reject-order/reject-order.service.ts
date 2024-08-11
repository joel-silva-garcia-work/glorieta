import { Injectable } from '@nestjs/common';
import { CreateRejectOrderDto } from './dto/create-reject-order.dto';
import { UpdateRejectOrderDto } from './dto/update-reject-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { RejectOrder } from './entities/reject-order.entity';
@Injectable()
export class RejectOrderService extends BaseServiceCRUD<
  RejectOrder,
  CreateRejectOrderDto,
  UpdateRejectOrderDto
> {
  constructor(
    @InjectRepository(RejectOrder)
    private readonly repository: Repository<RejectOrder>,
  ) {
    super(repository);
  }
}
