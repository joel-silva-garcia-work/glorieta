import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductSearchDto } from './dto/product-search.dto';

@Injectable()
export class ProductService extends BaseServiceCRUD<Product,CreateProductDto,UpdateProductDto> {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {
    super(repository)
  }

  async findItems(searchDto: ProductSearchDto): Promise<Product[]> {
    const queryBuilder = this.repository.createQueryBuilder('product')
      .leftJoinAndSelect('product.marca', 'marca')
      .leftJoinAndSelect('product.modelo', 'modelo');

    if (searchDto.name) {
      queryBuilder.andWhere('product.name LIKE :name', { name: `%${searchDto.name}%` });
    }

    if (searchDto.marcaId) {
      queryBuilder.andWhere('product.marcaId = :marcaId', { marcaId: searchDto.marcaId });
    }

    if (searchDto.modeloId) {
      queryBuilder.andWhere('product.modeloId = :modeloId', { modeloId: searchDto.modeloId });
    }

    if (searchDto.descripcion) {
      queryBuilder.andWhere('product.descripcion LIKE :descripcion', { descripcion: `%${searchDto.descripcion}%` });
    }

    if (searchDto.photo) {
      queryBuilder.andWhere('product.photo LIKE :photo', { photo: `%${searchDto.photo}%` });
    }

    if (searchDto.price) {
      queryBuilder.andWhere('product.price = :price', { price: searchDto.price });
    }

    return queryBuilder.getMany();
  }
}