import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';

@Injectable()
export class ShopService extends BaseServiceCRUD<
  Shop,
  CreateShopDto,
  UpdateShopDto
> {
  constructor(
    @InjectRepository(Shop)
    private readonly repository: Repository<Shop>,
  ) {
    super(repository);
  }
}
