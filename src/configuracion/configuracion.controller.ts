import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfiguracionService } from './configuracion.service';
import { CreateConfiguracionDto } from './dto/create-configuracion.dto';
import { UpdateConfiguracionDto } from './dto/update-configuracion.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('Configuracion')
@Controller('configuraciones')
export class ConfiguracionController extends BaseControllerCRUD<CreateConfiguracionDto,UpdateConfiguracionDto,ConfiguracionService>{
  constructor(private readonly Service: ConfiguracionService) {
    super(Service)
  }  
}
