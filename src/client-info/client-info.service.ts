import { Injectable } from '@nestjs/common';
import { ClientInfoCreateDTO } from './dto/create-client-info.dto';
import { UpdateClientInfoDto } from './dto/update-client-info.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientInfo } from './entities/client-info.entity';
import { ClientInfoSearchDto } from './dto/client-info-search.dto';

@Injectable()
export class ClientInfoService extends BaseServiceCRUD<ClientInfo,ClientInfoCreateDTO,UpdateClientInfoDto> {
  constructor(
    @InjectRepository(ClientInfo)
    private readonly repository: Repository<ClientInfo>,
  ) {
    super(repository)
  }

  async findItems(searchDto: ClientInfoSearchDto): Promise<ClientInfo[]> {
    const queryBuilder = this.repository.createQueryBuilder('clientInfo')
      .leftJoinAndSelect('clientInfo.municipality', 'municipality');

    if (searchDto.nombre) {
      queryBuilder.andWhere('clientInfo.nombre LIKE :nombre', { nombre: `%${searchDto.nombre}%` });
    }

    if (searchDto.email) {
      queryBuilder.andWhere('clientInfo.email LIKE :email', { email: `%${searchDto.email}%` });
    }

    if (searchDto.municipalityId) {
      queryBuilder.andWhere('clientInfo.municipalityId = :municipalityId', { municipalityId: searchDto.municipalityId });
    }

    if (searchDto.actual !== undefined) {
      queryBuilder.andWhere('clientInfo.actual = :actual', { actual: searchDto.actual });
    }

    if (searchDto.municipalityName) {
      queryBuilder.andWhere('municipality.name LIKE :municipalityName', { municipalityName: `%${searchDto.municipalityName}%` });
    }

    return queryBuilder.getMany();
  }
}