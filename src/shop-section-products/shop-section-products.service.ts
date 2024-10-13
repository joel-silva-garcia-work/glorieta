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
import { SearchProductDto } from './dto/search-product.dto';
import { LocateProductDto } from './dto/locate-product.dto';
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
    // if (updateDto.rules) {
    //   valid= await this._validate(updateDto);
    // } 
    if(valid) {
      try {
        const object = await this.repository.findOne({
          where: {
            id: updateDto.id
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

  async searchProduct(searchProductDto: SearchProductDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();
    const queryBuilder = this.repository.createQueryBuilder('shopSectionProduct')
      .leftJoinAndSelect('shopSectionProduct.product', 'product')
      .leftJoinAndSelect('shopSectionProduct.shopSection', 'shopSection')
      .leftJoinAndSelect('shopSection.shop', 'shop')
      .where('product.name LIKE :searchString OR product.description LIKE :searchString', { searchString: `%${searchProductDto.searchString}%` });

    if (searchProductDto.minPrice !== undefined && searchProductDto.maxPrice !== undefined) {
      queryBuilder.andWhere('shopSectionProduct.price BETWEEN :minPrice AND :maxPrice', { minPrice: searchProductDto.minPrice, maxPrice: searchProductDto.maxPrice });
    } else if (searchProductDto.minPrice !== undefined) {
      queryBuilder.andWhere('shopSectionProduct.price >= :minPrice', { minPrice: searchProductDto.minPrice });
    } else if (searchProductDto.maxPrice !== undefined) {
      queryBuilder.andWhere('shopSectionProduct.price <= :maxPrice', { maxPrice: searchProductDto.maxPrice });
    }

    if (searchProductDto.sectionId) {
      queryBuilder.andWhere('shopSectionProduct.shopSectionId = :sectionId', { sectionId: searchProductDto.sectionId });
    }

    if (searchProductDto.shopId) {
      queryBuilder.andWhere('shopSection.shopId = :shopId', { shopId: searchProductDto.shopId });
    }

    const results = await queryBuilder.getMany();
    returnDto.data = results;
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

  async locateProduct(locateProductDto: LocateProductDto): Promise<ReturnDto>{
    const returnDto = new ReturnDto
    let shopSectionProducts = []
    const shopSectionIds = locateProductDto.ubicaciones.map(async (ubicacion) => {
      const shopSection = await this.getShopSectionByShopAndSection(ubicacion.shop, ubicacion.section)
    const productExists = await this.productRepository.findOne({
      where: {
        id: ubicacion.product,
      }
    });

    if (productExists && shopSection) {
      const shopSectionProduct = await this.repository.save({
        product: productExists,
        shopSection: shopSection,
        existence: ubicacion.existence
      })
      shopSectionProducts.push(shopSectionProduct)
    }
    returnDto.data = shopSectionProducts
    })
  return returnDto
  }
  
  async getShopSectionByShopAndSection(shopId: string, sectionId: string): Promise<ShopSections> {

    const shopSection = await this.shopSectionRepository.findOne({
      where: {
        shop: { id: shopId },
        section: { id: sectionId }
      }
    });
    return shopSection;
  } 
  
}