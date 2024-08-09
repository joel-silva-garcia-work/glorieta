import {
  Controller,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('country')
@Controller('country')
export class CountryController extends BaseControllerCRUD<CreateCountryDto,UpdateCountryDto,CountryService>{
  constructor(private readonly Service: CountryService) {
    super(Service)
  }  
}
