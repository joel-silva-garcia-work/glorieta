import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Modelo } from './entities/modelo.entity';
import { Repository } from 'typeorm';
import { BaseServiceCRUD } from '../common/base/class/base.service.crud.class';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';

@Injectable()
export class ModelosService extends BaseServiceCRUD<Modelo,CreateModeloDto,UpdateModeloDto> {
  constructor(
    @InjectRepository(Modelo)
    private readonly repository: Repository<Modelo>,
  ) {
    super(repository)
  }
}
