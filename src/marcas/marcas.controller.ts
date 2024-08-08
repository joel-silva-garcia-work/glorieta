import {
  Controller, Get, Query,
} from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { MarcasSearchDto } from './dto/marcas-search.dto';
import { Marca } from './entities/marca.entity';

@ApiTags('Marcas')
@Controller('marcas')
 
export class MarcasController extends BaseControllerCRUD<CreateMarcaDto,UpdateMarcaDto,MarcasService>{
  constructor(private readonly Service: MarcasService) {
    super(Service)
  }  

  @Get()
  async findItems(@Query() searchDto: MarcasSearchDto): Promise<Marca[]> {
    return this.Service.findItems(searchDto);
  }
}
