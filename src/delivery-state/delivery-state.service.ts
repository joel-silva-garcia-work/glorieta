import { Injectable } from '@nestjs/common';
import { CreateDeliveryStateDto } from './dto/create-delivery-state.dto';
import { UpdateDeliveryStateDto } from './dto/update-delivery-state.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { DeliveryState } from './entities/delivery-state.entity';
import { DeliveryStateSearchDto } from './dto/delivery-state-search.dto';

@Injectable()
export class DeliveryStateService extends BaseServiceCRUD<
  DeliveryState,
  CreateDeliveryStateDto,
  UpdateDeliveryStateDto
> {
  constructor(
    @InjectRepository(DeliveryState)
    private readonly repository: Repository<DeliveryState>,
  ) {
    super(repository);
  }

  async findItems(searchDto: DeliveryStateSearchDto): Promise<DeliveryState[]> {
    const queryBuilder = this.repository.createQueryBuilder('deliveryState');

    if (searchDto.name) {
      queryBuilder.andWhere('deliveryState.name LIKE :name', {
        name: `%${searchDto.name}%`,
      });
    }

    return queryBuilder.getMany();
  }
}
