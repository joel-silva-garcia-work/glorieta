import { Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { Deliveries } from './entities/delivery.entity';

@Injectable()
export class DeliveryService extends BaseServiceCRUD<Deliveries,CreateDeliveryDto,UpdateDeliveryDto> {
  constructor(
    @InjectRepository(Deliveries)
    private readonly repository: Repository<Deliveries>,
  ) {
    super(repository)
  }
}