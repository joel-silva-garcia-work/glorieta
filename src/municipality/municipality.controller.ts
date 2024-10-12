import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { MunicipalitySearchDto } from './dto/municipality-search.dto';
import { Municipality } from './entities/municipality.entity';

@ApiTags('Municipality')
@Controller('municipality')
export class MunicipalityController extends BaseControllerCRUD<CreateMunicipalityDto,UpdateMunicipalityDto,MunicipalityService>{
  constructor(private readonly Service: MunicipalityService) {
    super(Service)
  } 
  
  @Get('all')
  async findAll(@Query() searchDto: MunicipalitySearchDto): Promise<Municipality[]> {
    return this.Service.findItems(searchDto);
  }
}
