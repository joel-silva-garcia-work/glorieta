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
  // override async create(createDto: CreateShopSectionProductDto): Promise<ReturnDto> {
  //   const returnDto = new ReturnDto;
  //   // 1 check if shopsection exist
  //   createDto.ubicaciones.forEach(async (ubicacion)=>{

  //     try {
  //       const shopSection = await this.shopSectionRepository.findOne({
  //        where:{
  //          id: ubicacion.shopSection
  //        }
  //      }) 

  //      const product = await this.productRepository.findOne({
  //       where:{
  //         id: ubicacion.product
  //       }
  //     }) 
      
  //     // salvo y que el error lo devuelva la BD por ahora
  //     // const element = new ShopSectionProducts();
  //     // element.product = product
  //     // element.shopSection = shopSection
  //     // element.price = ubicacion.price
  //     // element.existence = ubicacion.existence
  //     // element.caracteristicas = ubicacion.caracteristcas as any 
  //     console.log(ubicacion.caracteristcas)
  //     await this.repository.save({
  //       product: product,
  //       shopSection: shopSection,
  //       price: ubicacion.price,
  //       existence: ubicacion.existence,
  //       caracteristicas: ubicacion.caracteristcas 
  //     })  
      
  //     } catch (error) {
  //       returnDto.isSuccess = false
  //       returnDto.returnCode = CodeEnum.BAD_REQUEST
  //       returnDto.errorMessage = error.message
  //     }
  //   //  returnDto.data = result
  //   })

  //   return returnDto
      
  // }
}