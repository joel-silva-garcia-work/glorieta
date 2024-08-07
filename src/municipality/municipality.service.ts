import { Injectable } from '@nestjs/common';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { Municipality } from './entities/municipality.entity';
@Injectable()
export class MunicipalityService extends BaseServiceCRUD<Municipality,CreateMunicipalityDto,UpdateMunicipalityDto> {
  constructor(
    @InjectRepository(Municipality)
    private readonly repository: Repository<Municipality>,
  ) {
    super(repository)
  }
}