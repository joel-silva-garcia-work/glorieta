import { Controller, Get, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { ModelosService } from './modelos.service';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';

import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ModeloSearchDto } from './dto/modelo-search.dto';
import { Modelo } from './entities/modelo.entity';
import { ReturnDto } from 'src/common/base/dto';

@ApiTags('Modelos')
@Controller('modelos')
export class ModelosController extends BaseControllerCRUD<CreateModeloDto,UpdateModeloDto,ModelosService>{
  constructor(private readonly Service: ModelosService) {
    super(Service)
  }  

  @Get('items')
  async findItems(@Body() searchDto: ModeloSearchDto): Promise<ReturnDto> {
    return this.Service.findItems(searchDto) ;
  }
}
