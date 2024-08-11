import { Injectable } from '@nestjs/common';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { Currency } from './entities/currency.entity';
import { CurrencySearchDto } from './dto/currency-search.dto';

@Injectable()
export class CurrencyService extends BaseServiceCRUD<
  Currency,
  CreateCurrencyDto,
  UpdateCurrencyDto
> {
  constructor(
    @InjectRepository(Currency)
    private readonly repository: Repository<Currency>,
  ) {
    super(repository);
  }
  async findItems(searchDto: CurrencySearchDto): Promise<Currency[]> {
    const queryBuilder = this.repository.createQueryBuilder('currency');

    if (searchDto.currency) {
      queryBuilder.andWhere('currency.currency LIKE :currency', {
        currency: `%${searchDto.currency}%`,
      });
    }

    if (searchDto.name) {
      queryBuilder.andWhere('currency.name LIKE :name', {
        name: `%${searchDto.name}%`,
      });
    }

    return queryBuilder.getMany();
  }
}
