import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchTiendaSeccionProductoMarcaModeloDto } from './dto/search-tienda-seccion-producto-marca-modelo-view.dto';
import { TiendaSeccionProductoMarcaModeloView } from './entities/tienda-seccion-producto-marca-modelo-view.entity';

@Injectable()
export class TiendaSeccionProductoMarcaModeloViewService {
  constructor(
    @InjectRepository(TiendaSeccionProductoMarcaModeloView)
    private readonly tiendaRepository: Repository<TiendaSeccionProductoMarcaModeloView>,
  ) {}

  async search(dto: SearchTiendaSeccionProductoMarcaModeloDto): Promise<TiendaSeccionProductoMarcaModeloView[]> {
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
    if (dto.marcasId) {
      queryBuilder.andWhere('view.marcasId = :marcasId', { marcasId: dto.marcasId });
    }
    if (dto.marcasName) {
      queryBuilder.andWhere('view.marcasName LIKE :marcasName', { marcasName: `%${dto.marcasName}%` });
    }
    if (dto.modelosId) {
      queryBuilder.andWhere('view.modelosId = :modelosId', { modelosId: dto.modelosId });
    }
    if (dto.modelosName) {
      queryBuilder.andWhere('view.modelosName LIKE :modelosName', { modelosName: `%${dto.modelosName}%` });
    }
    if (dto.isActive !== undefined) {
      queryBuilder.andWhere('view.isActive = :isActive', { isActive: dto.isActive });
    }

    return await queryBuilder.getMany();
  }
}
