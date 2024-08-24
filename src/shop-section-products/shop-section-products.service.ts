import { Injectable } from '@nestjs/common';
import { CreateShopSectionProductDto } from './dto/create-shop-section-product.dto';
import { UpdateShopSectionProductDto } from './dto/update-shop-section-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { ShopSectionProducts } from './entities/shop-section-product.entity';
import { ReturnDto } from 'src/common/base/dto';
import { ShopSections } from 'src/shop-sections/entities/shop-section.entity';
import { CodeEnum } from 'src/common/enum/code.enum';
import { Product } from 'src/product/entities/product.entity';
import { ResourceEnum } from 'src/common/enum/resource.enum';
import { ProductLocations } from './dto/product-locations.dto';
@Injectable()
export class ShopSectionProductsService extends BaseServiceCRUD<ShopSectionProducts,CreateShopSectionProductDto,UpdateShopSectionProductDto> {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ShopSections)
    private readonly shopSectionRepository: Repository<ShopSections>,
    @InjectRepository(ShopSectionProducts)
    private readonly repository: Repository<ShopSectionProducts>,
  ) {
    super(repository)
  }
  override   async update(updateDto: UpdateShopSectionProductDto): Promise<ReturnDto> {
    let valid  =true
    const returnDto = new ReturnDto
    if (updateDto.rules) {
      valid= await this._validate(updateDto);
    } 
    if(valid) {
      try {
        const object = await this.repository.findOne({
          where: {
            id: updateDto.id,
          },
        });
        if (!object) {
          returnDto.isSuccess = false;
          returnDto.returnCode = CodeEnum.BAD_REQUEST;
          // traducir
          returnDto.errorMessage = ResourceEnum.ENTITY_NOT_FOUND;

          returnDto.errorMessage = '';
        } else {
          returnDto.data = await this.repository.save({

          });
        }
      } catch (error) {
        returnDto.isSuccess = false;
        returnDto.errorMessage = error.message;
        returnDto.returnCode = error.code;
      }
    } else {
      returnDto.isSuccess = false;
      returnDto.returnCode = CodeEnum.BAD_REQUEST;
      returnDto.errorMessage = ResourceEnum.ALREADY_EXST;
    }
    return returnDto;
  }

  async findShopsByProductId(productLocations: ProductLocations): Promise<ReturnDto> {
    // Fetch shop section products for the given product
    const returnDto = new ReturnDto
    const productId = productLocations.product
    const shopSectionProducts = await this.repository
      .createQueryBuilder('shopSectionProduct')
      .leftJoinAndSelect('shopSectionProduct.shopSection', 'shopSection')
      .leftJoinAndSelect('shopSection.shop', 'shop')
      .where('shopSectionProduct.productId = :productId', { productId })
      .select([
        'shop.id AS shopId',
        'shop.name AS shopName',
        'shopSection.id AS sectionId',
        'shopSectionProduct.id AS shopSectionProductId',
        'shopSectionProduct.existence AS existence',
      ])
      .getRawMany();

      returnDto.data = shopSectionProducts.map((result) => ({
        shopId: result.shopId,
        shopName: result.shopName,
        sectionId: result.sectionId,
        shopSectionProductId: result.shopSectionProductId,
        existence: result.existence,
      }));
    return returnDto
  }

}