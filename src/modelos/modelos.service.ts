import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Modelo } from './entities/modelo.entity';
import { Repository } from 'typeorm';
import { BaseServiceCRUD } from '../common/base/class/base.service.crud.class';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { ModeloSearchDto } from './dto/modelo-search.dto';
import { ReturnDto } from 'src/common/base/dto';

@Injectable()
export class ModelosService extends BaseServiceCRUD<Modelo,CreateModeloDto,UpdateModeloDto> {
  constructor(
    @InjectRepository(Modelo)
    private readonly repository: Repository<Modelo>,
  ) {
    super(repository)
  }
  async findItems(searchDto: ModeloSearchDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();
    const queryBuilder = this.repository.createQueryBuilder('marcas');
  
    // Aplicar filtros de búsqueda
    if (searchDto.name) {
      queryBuilder.andWhere('marcas.name LIKE :name', { name: `%${searchDto.name}%` });
    }
  
    if (searchDto.description) {
      queryBuilder.andWhere('marcas.description LIKE :description', { description: `%${searchDto.description}%` });
    }
  
    // Aplicar ordenamiento
  if (searchDto.orderBy && searchDto.orderBy.length > 0) {
    searchDto.orderBy.forEach((orderByField, index) => {
      if (index === 0) {
        queryBuilder.orderBy(`marcas.${orderByField.field}`, orderByField.direction);
      } else {
        queryBuilder.addOrderBy(`marcas.${orderByField.field}`, orderByField.direction);
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
