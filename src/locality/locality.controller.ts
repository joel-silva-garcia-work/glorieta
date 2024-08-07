import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LocalityService } from './locality.service';
import { CreateLocalityDto } from './dto/create-locality.dto';
import { UpdateLocalityDto } from './dto/update-locality.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('Locality')
@Controller('locality')
export class LocalityController extends BaseControllerCRUD<CreateLocalityDto,UpdateLocalityDto,LocalityService>{
  constructor(private readonly Service: LocalityService) {
    super(Service)
  }  
}
