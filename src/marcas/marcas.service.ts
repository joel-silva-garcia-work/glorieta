import { Injectable } from '@nestjs/common';
import { Marca } from './entities/marca.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from '../common/base/class/base.service.crud.class';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { MarcasSearchDto } from './dto/marcas-search.dto';
import { ReturnDto } from 'src/common/base/dto';
import { openFormDto } from './dto/open-form.dto';
import { SearchManyDto } from 'src/common/base/dto/search.many.dto';
import { fieldsEnum } from 'src/common/enum/fields.enum';

@Injectable()
export class MarcasService extends BaseServiceCRUD<Marca,CreateMarcaDto,UpdateMarcaDto> {
  constructor(
    @InjectRepository(Marca)
    private readonly repository: Repository<Marca>,
  ) {
    super(repository)
  }

  async openForm(openform: openFormDto):Promise<ReturnDto> {
    if(openform.id){
      const search = new SearchManyDto()
      search.id = openform.id
      search.queryType = fieldsEnum.ONE
      search.repo = this.repository
      return await this.search(search)
    }

    const returnDto = new ReturnDto
    const marca = new Marca();
    returnDto.data = marca
    return returnDto ;
  }

  async findItems(searchDto: MarcasSearchDto): Promise<ReturnDto> {
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
