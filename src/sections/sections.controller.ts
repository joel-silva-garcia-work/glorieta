import {
  Controller,
} from '@nestjs/common';
import { SectionsService } from './sections.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('Sections')
@Controller('sections')
export class SectionsController extends BaseControllerCRUD<CreateSectionDto,UpdateSectionDto,SectionsService>{
  constructor(private readonly Service: SectionsService) {
    super(Service)
  }  
}
