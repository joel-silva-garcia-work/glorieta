import { Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { Deliveries } from './entities/delivery.entity';
import { DeliveriesSearchDto } from './dto/deliveries-search.dto';

@Injectable()
export class DeliveryService extends BaseServiceCRUD<Deliveries,CreateDeliveryDto,UpdateDeliveryDto> {
  constructor(
    @InjectRepository(Deliveries)
    private readonly repository: Repository<Deliveries>,
  ) {
    super(repository)
  }
  async findItems(searchDto: DeliveriesSearchDto): Promise<Deliveries[]> {
    const queryBuilder = this.repository.createQueryBuilder('deliveries')
      .leftJoinAndSelect('deliveries.municipalityOrigin', 'municipalityOrigin')
      .leftJoinAndSelect('deliveries.municipalityDestiny', 'municipalityDestiny');

    if (searchDto.municipalityOriginId) {
      queryBuilder.andWhere('deliveries.municipalityOriginId = :municipalityOriginId', { municipalityOriginId: searchDto.municipalityOriginId });
    }

    if (searchDto.municipalityDestinyId) {
      queryBuilder.andWhere('deliveries.municipalityDestinyId = :municipalityDestinyId', { municipalityDestinyId: searchDto.municipalityDestinyId });
    }

    if (searchDto.price) {
      queryBuilder.andWhere('deliveries.price = :price', { price: searchDto.price });
    }

    if (searchDto.municipalityOriginName) {
      queryBuilder.andWhere('municipalityOrigin.name LIKE :municipalityOriginName', { municipalityOriginName: `%${searchDto.municipalityOriginName}%` });
    }

    if (searchDto.municipalityDestinyName) {
      queryBuilder.andWhere('municipalityDestiny.name LIKE :municipalityDestinyName', { municipalityDestinyName: `%${searchDto.municipalityDestinyName}%` });
    }

    return queryBuilder.getMany();
  }
}