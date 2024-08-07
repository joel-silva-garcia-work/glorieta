import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService extends BaseServiceCRUD<Product,CreateProductDto,UpdateProductDto> {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {
    super(repository)
  }
}