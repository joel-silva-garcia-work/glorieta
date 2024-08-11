import { Injectable } from '@nestjs/common';
import { CreateConfiguracionDto } from './dto/create-configuracion.dto';
import { UpdateConfiguracionDto } from './dto/update-configuracion.dto';
import { Configuracion } from './entities/configuracion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { ConfigSearchDto } from './dto/config-search.dto';

@Injectable()
export class ConfiguracionService extends BaseServiceCRUD<
  Configuracion,
  CreateConfiguracionDto,
  UpdateConfiguracionDto
> {
  constructor(
    @InjectRepository(Configuracion)
    private readonly repository: Repository<Configuracion>,
  ) {
    super(repository);
  }

  async findItems(searchDto: ConfigSearchDto): Promise<Configuracion[]> {
    const queryBuilder = this.repository
      .createQueryBuilder('configuracion')
      .leftJoinAndSelect('configuracion.sellCurrency', 'sellCurrency')
      .leftJoinAndSelect('configuracion.deliveryCurrency', 'deliveryCurrency');

    if (searchDto.sellCurrencyId) {
      queryBuilder.andWhere('configuracion.sellCurrencyId = :sellCurrencyId', {
        sellCurrencyId: searchDto.sellCurrencyId,
      });
    }

    if (searchDto.deliveryCurrencyId) {
      queryBuilder.andWhere(
        'configuracion.deliveryCurrencyId = :deliveryCurrencyId',
        { deliveryCurrencyId: searchDto.deliveryCurrencyId },
      );
    }

    if (searchDto.sellCurrencyName) {
      queryBuilder.andWhere('sellCurrency.name LIKE :sellCurrencyName', {
        sellCurrencyName: `%${searchDto.sellCurrencyName}%`,
      });
    }

    if (searchDto.deliveryCurrencyName) {
      queryBuilder.andWhere(
        'deliveryCurrency.name LIKE :deliveryCurrencyName',
        { deliveryCurrencyName: `%${searchDto.deliveryCurrencyName}%` },
      );
    }

    return queryBuilder.getMany();
  }
}
