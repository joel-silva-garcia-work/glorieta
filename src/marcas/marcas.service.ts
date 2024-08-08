import { Injectable } from '@nestjs/common';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from '../common/base/class/base.service.crud.class';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { MarcasSearchDto } from './dto/marcas-search.dto';

@Injectable()
export class MarcasService extends BaseServiceCRUD<Marca,CreateMarcaDto,UpdateMarcaDto> {
  constructor(
    @InjectRepository(Marca)
    private readonly repository: Repository<Marca>,
  ) {
    super(repository)
  }

  async findItems(searchDto: MarcasSearchDto): Promise<Marca[]> {
    const queryBuilder = this.repository.createQueryBuilder('marcas');

    if (searchDto.name) {
      queryBuilder.andWhere('marcas.name LIKE :name', { name: `%${searchDto.name}%` });
    }
    return queryBuilder.getMany();
  }
}
