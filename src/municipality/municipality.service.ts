import { Injectable } from '@nestjs/common';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { Municipality } from './entities/municipality.entity';
import { MunicipalitySearchDto } from './dto/municipality-search.dto';
import { ReturnDto } from 'src/common/base/dto';
@Injectable()
export class MunicipalityService extends BaseServiceCRUD<Municipality,CreateMunicipalityDto,UpdateMunicipalityDto> {
  constructor(
    @InjectRepository(Municipality)
    private readonly repository: Repository<Municipality>,
  ) {
    super(repository)
  }

  async findItems(searchDto: MunicipalitySearchDto): Promise<Municipality[]> {
    const queryBuilder = this.repository.createQueryBuilder('municipality')
      .leftJoinAndSelect('municipality.province', 'province');

    if (searchDto.name) {
      queryBuilder.andWhere('municipality.name LIKE :name', { name: `%${searchDto.name}%` });
    }
    if (searchDto.provinceId) {
      queryBuilder.andWhere('municipality.province = :provinceId', { provinceId: searchDto.provinceId });
    }
    if (searchDto.provinceName) {
      queryBuilder.andWhere('province.name LIKE :provinceName', { provinceName: `%${searchDto.provinceName}%` });
    }
    const returnDto = new ReturnDto;
    returnDto.data = await queryBuilder.getMany();

    return await queryBuilder.getMany();
  }
}