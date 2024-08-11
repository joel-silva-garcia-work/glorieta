import {
  Body,
  Controller, Get, Query, Render,
} from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { MarcasSearchDto } from './dto/marcas-search.dto';
import { Marca } from './entities/marca.entity';
import { ReturnDto } from 'src/common/base/dto';
import { SearchManyDto } from 'src/common/base/dto/search.many.dto';

@ApiTags('Marcas')
@Controller('marcas')
 
export class MarcasController extends BaseControllerCRUD<CreateMarcaDto,UpdateMarcaDto,MarcasService>{
  constructor(private readonly Service: MarcasService) {
    super(Service)
  }  

  @Get('/listar')
  @Render('marcas/listar') // Renderiza la vista 'listar.ejs'
  async findAll(@Body() searchDto: SearchManyDto):Promise<any> {
    const marcas = await this.Service.findAll(searchDto);
    console.log(marcas)
    return {marcas} ;
  }

  @Get()
  async findItems(@Query() searchDto: MarcasSearchDto): Promise<Marca[]> {
    return this.Service.findItems(searchDto);
  }
}
