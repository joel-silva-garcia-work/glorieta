// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './entities/country.entity';
import { BaseServiceCRUD } from '../common/base/class/base.service.crud.class';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { CurrencySearchDto } from '../currency/dto/currency-search.dto';
import { Currency } from 'src/currency/entities/currency.entity';

@Injectable()
export class CountryService extends BaseServiceCRUD<Country,CreateCountryDto,UpdateCountryDto> {
 
  constructor(
    @InjectRepository(Country)
    private readonly repository: Repository<Country>,
  ) {
    super(repository)
  }


}

