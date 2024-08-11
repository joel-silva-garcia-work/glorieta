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
  // @Get()
  // async findItems(@Query() searchDto: Province): Promise<Province[]> {
  //   return this.Service.findItems(searchDto);
  // }
}
