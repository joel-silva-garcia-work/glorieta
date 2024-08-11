import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipoCambioService } from './tipo-cambio.service';
import { CreateTipoCambioDto } from './dto/create-tipo-cambio.dto';
import { UpdateTipoCambioDto } from './dto/update-tipo-cambio.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('State-Order')
@Controller('tipo-cambio')
export class TipoCambioController extends BaseControllerCRUD<
  CreateTipoCambioDto,
  UpdateTipoCambioDto,
  TipoCambioService
> {
  constructor(private readonly Service: TipoCambioService) {
    super(Service);
  }
}
