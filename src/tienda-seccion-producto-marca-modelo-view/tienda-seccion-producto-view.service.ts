import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TiendaSeccionProductoView } from './entities/tienda-seccion-producto-view.entity';
import { SearchTiendaSeccionProductoDto } from './dto/search-tienda-seccion-producto-view.dto';

@Injectable()
export class TiendaSeccionProductoViewService {
  constructor(
    @InjectRepository(TiendaSeccionProductoView)
    private readonly tiendaRepository: Repository<TiendaSeccionProductoView>,
  ) {}

  async search(dto: SearchTiendaSeccionProductoDto): Promise<TiendaSeccionProductoView[]> {
    const queryBuilder = this.tiendaRepository.createQueryBuilder('view');

    if (dto.shopName) {
      queryBuilder.andWhere('view.shopName LIKE :shopName', { shopName: `%${dto.shopName}%` });
    }
    if (dto.sectionsName) {
      queryBuilder.andWhere('view.sectionsName LIKE :sectionsName', { sectionsName: `%${dto.sectionsName}%` });
    }
    if (dto.productId) {
      queryBuilder.andWhere('view.productId = :productId', { productId: dto.productId });
    }
    if (dto.productName) {
      queryBuilder.andWhere('view.productName LIKE :productName', { productName: `%${dto.productName}%` });
    }
    if (dto.productMarca) {
      queryBuilder.andWhere('view.productMarca LIKE :productMarca', { productMarca: `%${dto.productMarca}%` });
    }
    if (dto.productModelo) {
      queryBuilder.andWhere('view.productModelo LIKE :productModelo', { productModelo: `%${dto.productModelo}%` });
    }
    if (dto.isActive !== undefined) {
      queryBuilder.andWhere('view.isActive = :isActive', { isActive: dto.isActive });
    }

    return await queryBuilder.getMany();
  }
}
