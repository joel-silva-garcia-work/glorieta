import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ConfiguracionService } from './configuracion.service';
import { CreateConfiguracionDto } from './dto/create-configuracion.dto';
import { UpdateConfiguracionDto } from './dto/update-configuracion.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ConfigSearchDto } from './dto/config-search.dto';
import { Configuracion } from './entities/configuracion.entity';

@ApiTags('Configuracion')
@Controller('configuracion')
export class ConfiguracionController extends BaseControllerCRUD<CreateConfiguracionDto,UpdateConfiguracionDto,ConfiguracionService>{
  constructor(private readonly Service: ConfiguracionService) {
    super(Service)
  } 
  
  @Get()
  async findItems(@Query() searchDto: ConfigSearchDto): Promise<Configuracion[]> {
    return this.Service.findItems(searchDto);
  }
}
