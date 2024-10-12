import { Injectable } from '@nestjs/common';
import { CreateShopSectionDto } from './dto/create-shop-section.dto';
import { UpdateShopSectionDto } from './dto/update-shop-section.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { ShopSections } from './entities/shop-section.entity';

@Injectable()
export class ShopSectionsService extends BaseServiceCRUD<ShopSections,CreateShopSectionDto,UpdateShopSectionDto> {
  constructor(
    @InjectRepository(ShopSections)
    private readonly repository: Repository<ShopSections>,
  ) {
    super(repository)
  }

  async getShopSectionProductInfo(): Promise<any> {
    const returnDto = { data: [], isSuccess: true, errorMessage: '', returnCode: 0 };
    try {
      const shopSectionProducts = await this.repository
        .createQueryBuilder('shopSection')
        .leftJoinAndSelect('shopSection.shop', 'shop')
        .leftJoinAndSelect('shopSection.shopSectionProducts', 'shopSectionProduct')
        .leftJoinAndSelect('shopSectionProduct.product', 'product')
        .select([
          'shop.id AS shopId',
          'shop.name AS shopName',
          'shopSection.id AS sectionId',
          'shopSectionProduct.id AS shopSectionProductId',
          'shopSectionProduct.existence AS existence',
          'product.id AS productId',
          'product.name AS productName',
          'product.description AS productDescription',
        ])
        .getRawMany();

      const groupedData = shopSectionProducts.reduce((acc, result) => {
        let shop = acc.find(s => s.shopId === result.shopId);
        if (!shop) {
          shop = {
            shopId: result.shopId,
            shopName: result.shopName,
            sections: []
          };
          acc.push(shop);
        }

        let section = shop.sections.find(sec => sec.sectionId === result.sectionId);
        if (!section) {
          section = {
            sectionId: result.sectionId,
            products: []
          };
          shop.sections.push(section);
        }

        section.products.push({
          shopSectionProductId: result.shopSectionProductId,
          existence: result.existence,
          productId: result.productId,
          productName: result.productName,
          productDescription: result.productDescription,
        });

        return acc;
      }, []);

      returnDto.data = groupedData;
    } catch (error) {
      returnDto.isSuccess = false;
      returnDto.errorMessage = error.message;
      returnDto.returnCode = error.code;
    }
    return returnDto;
  }

}