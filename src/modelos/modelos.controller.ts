import { Controller, Get, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { ModelosService } from './modelos.service';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';

import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ModeloSearchDto } from './dto/modelo-search.dto';
import { Modelo } from './entities/modelo.entity';

@ApiTags('Modelos')
@Controller('modelos')
export class ModelosController extends BaseControllerCRUD<CreateModeloDto,UpdateModeloDto,ModelosService>{
  constructor(private readonly Service: ModelosService) {
    super(Service)
  }  

  @Get()
  async findAll(@Query() searchDto: ModeloSearchDto): Promise<Modelo[]> {
    return this.Service.findItems(searchDto);
  }
}
