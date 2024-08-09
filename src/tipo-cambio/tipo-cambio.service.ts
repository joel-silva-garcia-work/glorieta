import { Injectable } from '@nestjs/common';
import { CreateTipoCambioDto } from './dto/create-tipo-cambio.dto';
import { UpdateTipoCambioDto } from './dto/update-tipo-cambio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { TipoCambio } from './entities/tipo-cambio.entity';
@Injectable()
export class TipoCambioService extends BaseServiceCRUD<TipoCambio,CreateTipoCambioDto,UpdateTipoCambioDto> {
  constructor(
    @InjectRepository(TipoCambio)
    private readonly repository: Repository<TipoCambio>,
  ) {
    super(repository)
  }
}