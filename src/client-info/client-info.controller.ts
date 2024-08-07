import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientInfoService } from './client-info.service';
import { ClientInfoCreateDTO } from './dto/create-client-info.dto';
import { UpdateClientInfoDto } from './dto/update-client-info.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('Client-Info')
@Controller('client-info')
export class ClientInfoController extends BaseControllerCRUD<ClientInfoCreateDTO,UpdateClientInfoDto,ClientInfoService>{
  constructor(private readonly Service: ClientInfoService) {
    super(Service)
  }  
}
