import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { CurrencySearchDto } from './dto/currency-search.dto';
import { Currency } from './entities/currency.entity';

@ApiTags('Currency')
@Controller('currency')
export class CurrencyController extends BaseControllerCRUD<CreateCurrencyDto,UpdateCurrencyDto,CurrencyService>{
  constructor(private readonly Service: CurrencyService) {
    super(Service)
  } 
  @Get()
  async findItems(@Query() searchDto: CurrencySearchDto): Promise<Currency[]> {
    return this.Service.findItems(searchDto);
  } 
}
