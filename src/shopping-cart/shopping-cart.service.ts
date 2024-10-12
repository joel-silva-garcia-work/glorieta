import { Injectable } from '@nestjs/common';
import { CreateShoppingCartDto } from './dto/create-shopping-cart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { ShoppingCart } from './entities/shopping-cart.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';

@Injectable()
export class ShoppingCartService extends BaseServiceCRUD<ShoppingCart,CreateShoppingCartDto,UpdateShoppingCartDto> {
  constructor(
    @InjectRepository(ShoppingCart)
    private readonly repository: Repository<ShoppingCart>,
  ) {
    super(repository)
  }
}
