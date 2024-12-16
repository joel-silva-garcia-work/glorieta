import { Injectable } from '@nestjs/common';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { Province } from './entities/province.entity';
import { ReturnDto } from 'src/common/base/dto';
 @Injectable()
export class ProvinceService extends BaseServiceCRUD<Province,CreateProvinceDto,UpdateProvinceDto> {
  constructor(
    @InjectRepository(Province)
    private readonly repository: Repository<Province>,
  ) {
    super(repository)
  }

  async findAllItems() {
    const returnDto =new ReturnDto;
    returnDto.data = await this.repository.find({});
    return returnDto
  }
}