import { Injectable, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductSearchDto } from './dto/product-search.dto';
import { promises as fs } from 'fs';
import * as path from 'path';
import { ReturnDto } from 'src/common/base/dto';
import { CodeEnum } from 'src/common/enum/code.enum';
import { ResourceEnum } from 'src/common/enum/resource.enum';
import { v4 as uuidv4 } from 'uuid';
import { ShopSectionProducts } from 'src/shop-section-products/entities/shop-section-product.entity';
import { ShopSections } from 'src/shop-sections/entities/shop-section.entity';
import { UpdateExistenceDto } from '../shop-section-products/dto/update-existence.dto';
import { BaseDto } from 'src/common/base/dto/base.crud.dto';
import { ValidateScenarioDto } from 'src/common/base/dto/validate.scenario.dto';
import { ClassValidator } from 'src/common/base/validator/class.validator';
import { KindEnum } from 'src/common/enum/kind.enum';
import { LocateProductDto } from '../shop-section-products/dto/locate-product.dto';

@Injectable()
export class ProductService extends BaseServiceCRUD<
  Product,
  CreateProductDto,
  UpdateProductDto
> {
  private readonly imageFolder = 'products';
  private readonly baseUrl = '/products'; // URL base para acceder a las imágenes

  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
    @InjectRepository(ShopSections)
    private readonly shopSectionsRepository: Repository<ShopSections>,
    @InjectRepository(ShopSectionProducts)
    private readonly shopSectionProductRepository: Repository<ShopSectionProducts>,
  ) {
    super(repository);
  }
  @Post('ubicar')
  async locate(createDto: LocateProductDto): Promise<ReturnDto> {
    // const returnDto: ReturnDto = new ReturnDto();
    // let valid = true;
    // if (createDto.rules) {
    //   createDto.ubicaciones.forEach(async (ubicacion)=>{
    //     if(! await this._validate(ubicacion)){
    //       valid = false;   
    //     }
    //     else{

    //     }
    //   })
    // }

    // if (valid) {
    //   try {
    //     const product: Product = new ShopSectionProducts();

    //     product.description = createDto.description;
    //     product.name = createDto.name;
    //     product.marca = createDto.marca as any;
    //     product.modelo = createDto.modelo as any;


    //     returnDto.data = await this.repository.save(product);

    //     createDto.ubicacion.forEach(async (ubicacion)=>{
    //     // busco la tienda-section-id
    //     const shopSection = this.shopSectionsRepository.findOne({
    //       where:{
    //         shop: ubicacion.shop as any,
    //         section: ubicacion.section as any
    //       }
    //     }) 
    //     if(!shopSection){
    //         returnDto.isSuccess = false;
    //         returnDto.returnCode = CodeEnum.BAD_REQUEST;
    //         returnDto.errorMessage = ResourceEnum.ALREADY_EXST;
    //     }
    //     else {

    //       // con la ubicación salvo el producto 
    //       const added = new ShopSectionProducts()
    //       added.product = product
    //       added.existence =  ubicacion.existence
    //       added.price =  ubicacion.price
    //       added.shopSection = await shopSection
    //       await this.shopSectionProductRepository.save(added)
    //     }
    //   })
        
    //   } catch (error) {
    //     returnDto.isSuccess = false;
    //     returnDto.errorMessage = error.message;
    //     returnDto.returnCode = error.code;
    //   }
    // } else {
    //   returnDto.isSuccess = false;
    //   returnDto.returnCode = CodeEnum.BAD_REQUEST;
    //   returnDto.errorMessage = ResourceEnum.ALREADY_EXST;
    // }
    return null;
  }
  async updateDetail(updateDto: UpdateProductDto): Promise<ReturnDto> {
    const returnDto: ReturnDto = new ReturnDto();
    let valid = true;
    if (updateDto.rules) {
      valid = await this._validate(updateDto);
    }
    if (valid) {
      try {
        
        const product = await this.repository.findOne({
          where:{
            id: updateDto.id
          }
        });
        if(product){
          product.description = updateDto.description;
          product.name = updateDto.name;
          product.marca = updateDto.marca as any;
          product.modelo = updateDto.modelo as any;
  
          product.photo = await this.saveProductImage(updateDto.photo);
          returnDto.data = await this.repository.save(product);
        }
        else {
          returnDto.isSuccess = false;
          returnDto.returnCode = CodeEnum.BAD_REQUEST;
          returnDto.errorMessage = ResourceEnum.ELEMENT_NOT_FOUND;
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
  async updateExistence(updateDto: UpdateExistenceDto): Promise<ReturnDto> {
    const returnDto: ReturnDto = new ReturnDto();
    let valid = true;
    if (valid) {
      try {
        
        const product = await this.shopSectionProductRepository.findOne({
          where:{
            id: updateDto.id
          }
        });
        if(product){
          product.existence = updateDto.ubicacion.existence;
          product.price = updateDto.ubicacion.price;
          returnDto.data = await this.shopSectionProductRepository.save(product);
        }
        else {
          returnDto.isSuccess = false;
          returnDto.returnCode = CodeEnum.BAD_REQUEST;
          returnDto.errorMessage = ResourceEnum.ELEMENT_NOT_FOUND;
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

  async saveProductImage(base64Image: string): Promise<string> {
    const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const fileName = `${uuidv4()}.png`; // Adjust extension as needed
    const filePath = path.join(
      path.resolve(__dirname, '..', '..', this.imageFolder),
      fileName,
    );

    // Ensure the directory exists
    await this.ensureDirectoryExists(
      path.resolve(__dirname, '..', '..', this.imageFolder),
    );

    await fs.writeFile(filePath, buffer);

    return `${this.baseUrl}/${fileName}`;
  }

  private async ensureDirectoryExists(directory: string): Promise<void> {
    try {
      await fs.access(directory);
    } catch {
      await fs.mkdir(directory, { recursive: true });
    }
  }
// revisar y arreglar
  override async _validate(dto: BaseDto): Promise<boolean> {
    const rules = dto.rules;
    let valid = true;
    if (rules.comparisonKind == KindEnum.UINQUE) {
      const scenarios = [];
      rules.field.forEach(rule => {
        const scenario = new ValidateScenarioDto();
        scenario.table = this.shopSectionProductRepository.metadata.tableName;
        // if(rule != "name")
        scenario.field = rule;
        scenario.value = dto[rule];
        scenarios.push(scenario);
      });
      const validated: ClassValidator = new ClassValidator();
      valid = await validated.validate(this.shopSectionProductRepository, scenarios);
    }
    return valid;
  }

  async findItems(searchDto: ProductSearchDto): Promise<Product[]> {
    const queryBuilder = this.repository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.marca', 'marca')
      .leftJoinAndSelect('product.modelo', 'modelo');

    if (searchDto.name) {
      queryBuilder.andWhere('product.name LIKE :name', {
        name: `%${searchDto.name}%`,
      });
    }

    if (searchDto.marcaId) {
      queryBuilder.andWhere('product.marcaId = :marcaId', {
        marcaId: searchDto.marcaId,
      });
    }

    if (searchDto.modeloId) {
      queryBuilder.andWhere('product.modeloId = :modeloId', {
        modeloId: searchDto.modeloId,
      });
    }

    if (searchDto.descripcion) {
      queryBuilder.andWhere('product.descripcion LIKE :descripcion', {
        descripcion: `%${searchDto.descripcion}%`,
      });
    }

    if (searchDto.photo) {
      queryBuilder.andWhere('product.photo LIKE :photo', {
        photo: `%${searchDto.photo}%`,
      });
    }

    if (searchDto.price) {
      queryBuilder.andWhere('product.price = :price', {
        price: searchDto.price,
      });
    }

    return queryBuilder.getMany();
  }
}
