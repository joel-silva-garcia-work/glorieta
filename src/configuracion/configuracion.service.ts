import { Injectable } from '@nestjs/common';
import { CreateConfiguracionDto } from './dto/create-configuracion.dto';
import { UpdateConfiguracionDto } from './dto/update-configuracion.dto';
import { Configuracion } from './entities/configuracion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';

@Injectable()
export class ConfiguracionService extends BaseServiceCRUD<Configuracion,CreateConfiguracionDto,UpdateConfiguracionDto> {
  constructor(
    @InjectRepository(Configuracion)
    private readonly repository: Repository<Configuracion>,
  ) {
    super(repository)
  }
}