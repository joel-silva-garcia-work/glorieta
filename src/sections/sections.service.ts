import { Injectable } from '@nestjs/common';
import { Section } from './entities/section.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseServiceCRUD } from '../common/base/class/base.service.crud.class';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';

@Injectable()
export class SectionsService extends BaseServiceCRUD<Section,CreateSectionDto,UpdateSectionDto> {
  constructor(
    @InjectRepository(Section)
    private readonly repository: Repository<Section>,
  ) {
    super(repository)
  }
}