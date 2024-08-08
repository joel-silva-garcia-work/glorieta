import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ClientInfoService } from './client-info.service';
import { ClientInfoCreateDTO } from './dto/create-client-info.dto';
import { UpdateClientInfoDto } from './dto/update-client-info.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { ClientInfoSearchDto } from './dto/client-info-search.dto';
import { ClientInfo } from './entities/client-info.entity';

@ApiTags('Client-Info')
@Controller('client-info')
export class ClientInfoController extends BaseControllerCRUD<ClientInfoCreateDTO,UpdateClientInfoDto,ClientInfoService>{
  constructor(private readonly Service: ClientInfoService) {
    super(Service)
  }  
  @Get()
  async findItems(@Query() searchDto: ClientInfoSearchDto): Promise<ClientInfo[]> {
    return this.Service.findItems(searchDto);
  }
}
