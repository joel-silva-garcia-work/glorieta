import { Injectable } from '@nestjs/common';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from '../common/base/class/base.service.crud.class';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';

@Injectable()
export class MarcasService extends BaseServiceCRUD<Marca,CreateMarcaDto,UpdateMarcaDto> {
  constructor(
    @InjectRepository(Marca)
    private readonly repository: Repository<Marca>,
  ) {
    super(repository)
  }
}
