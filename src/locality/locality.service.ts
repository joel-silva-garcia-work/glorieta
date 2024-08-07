import { Injectable } from '@nestjs/common';
import { CreateLocalityDto } from './dto/create-locality.dto';
import { UpdateLocalityDto } from './dto/update-locality.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { Locality } from './entities/locality.entity';

@Injectable()
export class LocalityService extends BaseServiceCRUD<Locality,CreateLocalityDto,UpdateLocalityDto> {
  constructor(
    @InjectRepository(Locality)
    private readonly repository: Repository<Locality>,
  ) {
    super(repository)
  }
}