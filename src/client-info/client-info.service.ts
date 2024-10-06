import { Injectable } from '@nestjs/common';
import { ClientInfoCreateDTO } from './dto/create-client-info.dto';
import { UpdateClientInfoDto } from './dto/update-client-info.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientInfo } from './entities/client-info.entity';
import { ClientInfoSearchDto } from './dto/client-info-search.dto';
import { ReturnDto } from 'src/common/base/dto';

@Injectable()
export class ClientInfoService extends BaseServiceCRUD<
  ClientInfo,
  ClientInfoCreateDTO,
  UpdateClientInfoDto
> {
  constructor(
    @InjectRepository(ClientInfo)
    private readonly repository: Repository<ClientInfo>,
  ) {
    super(repository);
  }

  

  async findItems(searchDto: ClientInfoSearchDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();
    const queryBuilder = this.repository
      .createQueryBuilder('clientInfo')
      .leftJoinAndSelect('clientInfo.municipality', 'municipality');

    if (searchDto.nombre) {
      queryBuilder.andWhere('clientInfo.nombre LIKE :nombre', {
        nombre: `%${searchDto.nombre}%`,
      });
    }

    if (searchDto.email) {
      queryBuilder.andWhere('clientInfo.email LIKE :email', {
        email: `%${searchDto.email}%`,
      });
    }

    if (searchDto.municipalityId) {
      queryBuilder.andWhere('clientInfo.municipality = :municipality', {
        municipality: searchDto.municipality,
      });
    }

    if (searchDto.actual !== undefined) {
      queryBuilder.andWhere('clientInfo.actual = :actual', {
        actual: searchDto.actual,
      });
    }

    if (searchDto.municipalityId) {
      queryBuilder.andWhere('clientInfo.municipality LIKE :municipality', {
        municipality: `%${searchDto.municipalityId}%`,
      });
    }

    if (searchDto.municipalityName) {
      queryBuilder.andWhere('municipality.name LIKE :municipalityName', {
        municipalityName: `%${searchDto.municipalityName}%`,
      });
    }

// Aplicar ordenamiento
if (searchDto.orderBy && searchDto.orderBy.length > 0) {
  searchDto.orderBy.forEach((orderByField, index) => {
    if (index === 0) {
      queryBuilder.orderBy(`product.${orderByField.field}`, orderByField.direction);
    } else {
      queryBuilder.addOrderBy(`product.${orderByField.field}`, orderByField.direction);
    }
  });
}

// Aplicar paginación
const skip = searchDto.skip || 0; // Valor predeterminado de 0 si no se proporciona
const take = searchDto.take || 10; // Valor predeterminado de 10 si no se proporciona

queryBuilder.skip(this.startPage(skip, take)).take(take);


// Verificar la consulta generada para depuración
console.log(queryBuilder.getSql());

returnDto.data = await queryBuilder.getMany();
return returnDto;  
}
}
