import {
  Controller,
  Post, 
  Body,
} from '@nestjs/common';
import { SectionsService } from './sections.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ReturnDto } from 'src/common/base/dto';

@ApiTags('Sections')
@Controller('sections')
export class SectionsController extends BaseControllerCRUD<CreateSectionDto,UpdateSectionDto,SectionsService>{
  constructor(private readonly Service: SectionsService) {
    super(Service)
  }  

  @Post('add-section')
  async addSection(@Body()addSection: CreateSectionDto):Promise<ReturnDto>{
    return this.Service.addSection(addSection)
  }
}
