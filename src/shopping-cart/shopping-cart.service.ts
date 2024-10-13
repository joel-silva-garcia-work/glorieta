import { Injectable } from '@nestjs/common';
import { CreateShoppingCartDto } from './dto/create-shopping-cart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { ShoppingCart } from './entities/shopping-cart.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { ReturnDto } from 'src/common/base/dto';
import { Product } from 'src/product/entities/product.entity';
import { ShopSectionProducts } from 'src/shop-section-products/entities/shop-section-product.entity';
@Injectable()
export class ShoppingCartService extends BaseServiceCRUD<ShoppingCart,CreateShoppingCartDto,UpdateShoppingCartDto> {
  constructor(
    @InjectRepository(ShoppingCart)
    private readonly repository: Repository<ShoppingCart>,
    @InjectRepository(ShopSectionProducts)
    private readonly shopSectionProductRepository: Repository<ShopSectionProducts>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {
    super(repository)
  }
  override async create(createShoppingCartDto: CreateShoppingCartDto): Promise<ReturnDto> {
    const { shopSectionProductIds } = createShoppingCartDto;

    for (const shopSectionProductId of shopSectionProductIds) {
      const exists = await this.shopSectionProductRepository.findOne({
         where: { id: shopSectionProductId } 
        });
      if (!exists) {
        console.log(`ShopSectionProduct with id ${shopSectionProductId} does not exist`);
        return {
          isSuccess: false,
          returnCode: 404,
          errorMessage: `ShopSectionProduct with id ${shopSectionProductId} does not exist`,
        };
      }
      const index = shopSectionProductIds.indexOf(shopSectionProductId);
      const quantity = createShoppingCartDto.quantities[index];

      if (exists.existence < quantity) {
        console.log(`Insufficient quantity for ShopSectionProduct with id ${shopSectionProductId}`);
        return {
          isSuccess: false,
          returnCode: 400,
          errorMessage: `Insufficient quantity for ShopSectionProduct with id ${shopSectionProductId}`,
        };
      }
    }
    return super.create(createShoppingCartDto);
  }

}
