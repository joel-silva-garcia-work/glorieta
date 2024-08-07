import { Injectable } from '@nestjs/common';
import { CreateDeliveryStateDto } from './dto/create-delivery-state.dto';
import { UpdateDeliveryStateDto } from './dto/update-delivery-state.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { DeliveryState } from './entities/delivery-state.entity';

@Injectable()
export class DeliveryStateService extends BaseServiceCRUD<DeliveryState,CreateDeliveryStateDto,UpdateDeliveryStateDto> {
  constructor(
    @InjectRepository(DeliveryState)
    private readonly repository: Repository<DeliveryState>,
  ) {
    super(repository)
  }
}