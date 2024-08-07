import { Injectable } from '@nestjs/common';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { Currency } from './entities/currency.entity';


@Injectable()
export class CurrencyService extends BaseServiceCRUD<Currency,CreateCurrencyDto,UpdateCurrencyDto> {
  constructor(
    @InjectRepository(Currency)
    private readonly repository: Repository<Currency>,
  ) {
    super(repository)
  }
}