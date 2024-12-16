import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProvinceService } from './province.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { Province } from './entities/province.entity';
import { ReturnDto } from 'src/common/base/dto';
@ApiTags('Province')
@Controller('province')
export class ProvinceController extends BaseControllerCRUD<
  CreateProvinceDto,
  UpdateProvinceDto,
  ProvinceService
> {
  constructor(private readonly Service: ProvinceService) {
    super(Service);
  }
  @Get('all')
  async findItems(): Promise<ReturnDto> {
    return this.Service.findAllItems();
  }
}
