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
import { BaseDto } from 'src/common/base/dto/base.crud.dto';
import { ValidateScenarioDto } from 'src/common/base/dto/validate.scenario.dto';
import { ClassValidator } from 'src/common/base/validator/class.validator';
import { KindEnum } from 'src/common/enum/kind.enum';
import { LocateProductDto } from '../shop-section-products/dto/locate-product.dto';
import { SearchManyDto } from 'src/common/base/dto/search.many.dto';
import { fieldsEnum } from 'src/common/enum/fields.enum';
import { openFormDto } from 'src/common/base/dto/open-form.dto';

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

  async openForm(openform: openFormDto):Promise<ReturnDto> {
    if(openform.id){
      const search = new SearchManyDto()
      search.id = openform.id
      search.queryType = fieldsEnum.ONE
      search.repo = this.repository
      return await this.search(search)
    }

    const returnDto = new ReturnDto
    const product = new Product();
    returnDto.data = product
    return returnDto ;
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
          product.marca = updateDto.marca;
          product.modelo = updateDto.modelo;
  
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
  // override async _validate(dto: BaseDto): Promise<boolean> {
  //   const rules = dto.rules;
  //   let valid = true;
  //   if (rules.comparisonKind == KindEnum.UINQUE) {
  //     const scenarios = [];
  //     rules.field.forEach(rule => {
  //       const scenario = new ValidateScenarioDto();
  //       scenario.table = this.shopSectionProductRepository.metadata.tableName;
  //       // if(rule != "name")
  //       scenario.field = rule;
  //       scenario.value = dto[rule];
  //       scenarios.push(scenario);
  //     });
  //     const validated: ClassValidator = new ClassValidator();
  //     valid = await validated.validate(this.shopSectionProductRepository, scenarios);
  //   }
  //   return valid;
  // }

  async findItems(searchDto: ProductSearchDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();

    const queryBuilder = this.repository
      .createQueryBuilder('product')

    if (searchDto.name) {
      queryBuilder.andWhere('product.name LIKE :name', {
        name: `%${searchDto.name}%`,
      });
    }

    if (searchDto.marca) {
      queryBuilder.andWhere('product.marca = :marca', {
        marca: searchDto.marca,
      });
    }

    if (searchDto.modelo) {
      queryBuilder.andWhere('product.modelo = :modelo', {
        modelo: searchDto.modelo,
      });
    }

    if (searchDto.description) {
      queryBuilder.andWhere('product.description LIKE :description', {
        description: `%${searchDto.description}%`,
      });
    }

     // Aplicar ordenamiento
     if (searchDto.orderBy && searchDto.orderBy.length > 0) {
      searchDto.orderBy.forEach((orderByField, index) => {
        if (index === 0) {
          queryBuilder.orderBy(`product.${orderByField.field}`, orderByField.direction);
        } else {
          queryBuilder.addOrderBy(`product.${orderByField.field}`, orderByField.direction);
        }
      });
    }

    // Aplicar paginación
    const skip = searchDto.skip || 0; // Valor predeterminado de 0 si no se proporciona
    const take = searchDto.take || 10; // Valor predeterminado de 10 si no se proporciona
  
    queryBuilder.skip(this.startPage(skip, take)).take(take);
  

    // Verificar la consulta generada para depuración
    console.log(queryBuilder.getSql());
    
    returnDto.data = await queryBuilder.getMany();
    return returnDto;  
  }

}
