import {
  Controller,
} from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('Marcas')
@Controller('marcas')
 
export class MarcasController extends BaseControllerCRUD<CreateMarcaDto,UpdateMarcaDto,MarcasService>{
  constructor(private readonly Service: MarcasService) {
    super(Service)
  }  
}
