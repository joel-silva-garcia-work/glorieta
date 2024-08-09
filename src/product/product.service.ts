import { Injectable } from '@nestjs/common';
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


@Injectable()
export class ProductService extends BaseServiceCRUD<Product,CreateProductDto,UpdateProductDto> {
  private readonly imageFolder = 'products';
  private readonly baseUrl = '/products'; // URL base para acceder a las imágenes

  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {
    super(repository)
  }

  override async create(createDto: CreateProductDto): Promise<ReturnDto> {
    const returnDto: ReturnDto = new ReturnDto
    let valid = true
    if (createDto.rules) {
      valid = await this._validate(createDto);
    }

    if (valid) {
      try {
        const product: Product = new Product()

        product.description = createDto.description
        product.name = createDto.name
        product.price = createDto.price
        product.marca = createDto.marca as any
        product.modelo = createDto.modelo as any

        product.photo = await this.saveProductImage( createDto.photo);

        returnDto.data = await this.repository.save(product);
      } catch (error) {
        returnDto.isSuccess = false;
        returnDto.errorMessage =  error.message ;
        returnDto.returnCode = error.code;
      }
    } else {
      returnDto.isSuccess = false;
      returnDto.returnCode = CodeEnum.BAD_REQUEST;
      returnDto.errorMessage = ResourceEnum.ALREADY_EXST;
    }
    return returnDto;
  } 

  async saveProductImage( base64Image: string): Promise<string> {
    const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const fileName = `${uuidv4()}.png`; // Adjust extension as needed
    const filePath = path.join(path.resolve(__dirname, '..', '..', this.imageFolder), fileName);

    // Ensure the directory exists
    await this.ensureDirectoryExists(path.resolve(__dirname, '..', '..', this.imageFolder));

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
  // async saveProductImage(name: string, base64Image: string): Promise<string> {
  //   const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');
  //   const buffer = Buffer.from(base64Data, 'base64');
  //   const fileName = `${name}.png`; // Adjust extension as needed
  //   const filePath = path.join(__dirname, '..', '..', this.imageFolder, fileName);

  //   await fs.writeFile(filePath, buffer);

  //   return fileName;
  // }

  async findItems(searchDto: ProductSearchDto): Promise<Product[]> {
    const queryBuilder = this.repository.createQueryBuilder('product')
      .leftJoinAndSelect('product.marca', 'marca')
      .leftJoinAndSelect('product.modelo', 'modelo');

    if (searchDto.name) {
      queryBuilder.andWhere('product.name LIKE :name', { name: `%${searchDto.name}%` });
    }

    if (searchDto.marcaId) {
      queryBuilder.andWhere('product.marcaId = :marcaId', { marcaId: searchDto.marcaId });
    }

    if (searchDto.modeloId) {
      queryBuilder.andWhere('product.modeloId = :modeloId', { modeloId: searchDto.modeloId });
    }

    if (searchDto.descripcion) {
      queryBuilder.andWhere('product.descripcion LIKE :descripcion', { descripcion: `%${searchDto.descripcion}%` });
    }

    if (searchDto.photo) {
      queryBuilder.andWhere('product.photo LIKE :photo', { photo: `%${searchDto.photo}%` });
    }

    if (searchDto.price) {
      queryBuilder.andWhere('product.price = :price', { price: searchDto.price });
    }

    return queryBuilder.getMany();
  }
}