import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Modelo } from './entities/modelo.entity';
import { Repository } from 'typeorm';
import { BaseServiceCRUD } from '../common/base/class/base.service.crud.class';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { ModeloSearchDto } from './dto/modelo-search.dto';

@Injectable()
export class ModelosService extends BaseServiceCRUD<Modelo,CreateModeloDto,UpdateModeloDto> {
  constructor(
    @InjectRepository(Modelo)
    private readonly repository: Repository<Modelo>,
  ) {
    super(repository)
  }
  async findItems(searchDto: ModeloSearchDto): Promise<Modelo[]> {
    const queryBuilder = this.repository.createQueryBuilder('modelo');

    if (searchDto.name) {
      queryBuilder.andWhere('modelo.name LIKE :name', { name: `%${searchDto.name}%` });
    }

    return queryBuilder.getMany();
  }
}
