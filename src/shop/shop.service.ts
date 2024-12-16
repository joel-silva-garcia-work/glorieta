import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';
import { promises as fs } from 'fs';
import * as path from 'path';
import { ReturnDto } from 'src/common/base/dto';
import { CodeEnum } from 'src/common/enum/code.enum';
import { ResourceEnum } from 'src/common/enum/resource.enum';
import { v4 as uuidv4 } from 'uuid';
import { Section } from 'src/sections/entities/section.entity';
import { ShopSections } from 'src/shop-sections/entities/shop-section.entity';
import { Deliveries } from 'src/delivery/entities/delivery.entity';
import { ShopSearchDto } from './dto/shop-search.dto';
import { MailService } from 'src/mail-service/mail-service.service';
@Injectable()
export class ShopService extends BaseServiceCRUD<
  Shop,
  CreateShopDto,
  UpdateShopDto
> {
  private readonly imageFolder = 'tiendas';
  private readonly baseUrl = '/tiendas'; // URL base para acceder a las imágenes

  constructor(
    @InjectRepository(Shop)
    private readonly repository: Repository<Shop>,
    @InjectRepository(Section)
    private readonly sectionRepository: Repository<Section>,
    @InjectRepository(ShopSections)
    private readonly shopSectionRepository: Repository<ShopSections>,
    @InjectRepository(Deliveries)
    private readonly deliveriesRepository: Repository<Deliveries>,
    private readonly mailService: MailService, // Inyección del servicio de correo

  ) {
    super(repository);
  }

  async addShop(createDto: CreateShopDto):Promise<ReturnDto>{
    
    const emailTemplate = ` bgfmknjbhgbnhjg`
    // const emailTemplate = `
    //   <h1>Order Details</h1>
    //   <p>Order ID: ${order.id}</p>
    //   <p>Total Price: ${order.totalPrice}</p>
    //   <p>Total Products Prices: ${order.totalProductsPrices}</p>
    //   <h2>Products</h2>
    //   <ul>
    //     ${order.delivery.map(delivery => `
    //       <li>
    //         <p>Product Name: ${delivery.shopSectionProduct.product.name}</p>
    //         <p>Product Description: ${delivery.shopSectionProduct.product.description}</p>
    //         <p>Amount: ${delivery.amountProduct}</p>
    //         <p>Price: ${delivery.shopSectionProduct.product.price}</p>
    //       </li>
    //     `).join('')}
    //   </ul>
    // `;
  
    // Assuming you have a mail service to send emails
    await this.mailService.sendEmail('joel.silva.garcia.work@gmail.com', 'Your Order Details', emailTemplate);
    
    const returnDto = new ReturnDto
    let valid = true;
    if (createDto.rules) {
      valid = await this._validate(createDto);
    }
    if (valid) {
      try {
        const shop: Shop = new Shop();

        shop.description = createDto.description;
        shop.name = createDto.name;
        shop.email = createDto.email;
        shop.municipality = createDto.municipality as any;
        shop.phone = createDto.phone
        shop.photo = await this.savetImage(createDto.photo);
        shop.address = createDto.address
      

        returnDto.data = await this.repository.save(shop);

        const sections = await this.sectionRepository.find({})
        sections.forEach(async (section)=>{
          const shopSection = new ShopSections()
          shopSection.section = section
          shopSection.shop = shop
          await this.shopSectionRepository.save(shopSection)
        })
        
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
    return returnDto
  }

  async savetImage(base64Image: string): Promise<string> {
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

  async getShopDataWithDeliveries(shopID: string): Promise<ReturnDto> {
    const returnDto = new ReturnDto();
    try {
      const shop = await this.repository.findOne({ where: { id: shopID }, relations: ['municipio'] });
      if (!shop) {
        returnDto.isSuccess = false;
        returnDto.returnCode = CodeEnum.NOT_FOUND;
        returnDto.errorMessage = 'Shop not found';
        return returnDto;
      }

      const deliveries = await this.deliveriesRepository.find({
        where: { 
          municipalityDestiny: shop.municipality
        }
       });

      returnDto.data = {
        shop,
        deliveries,
      };
      returnDto.isSuccess = true;
    } catch (error) {
      returnDto.isSuccess = false;
      returnDto.errorMessage = error.message;
      returnDto.returnCode = error.code;
    }
    return returnDto;
  }

  async findBy(searchDto: ShopSearchDto): Promise<ReturnDto> {
    const returnDto = new ReturnDto();
    const queryBuilder = this.repository.createQueryBuilder('shop')
      .leftJoinAndSelect('shop.municipality', 'municipality')
 
    if (searchDto.name) {
      queryBuilder.andWhere('shop.name LIKE :name', { name: `%${searchDto.name}%` });
    }
    if (searchDto.description) {
      queryBuilder.andWhere('shop.description LIKE :description', { description: `%${searchDto.description}%` });
    }
    if (searchDto.phone) {
      queryBuilder.andWhere('shop.phone LIKE :phone', { phone: `%${searchDto.phone}%` });
    }
    if (searchDto.email) {
      queryBuilder.andWhere('shop.email LIKE :email', { email: `%${searchDto.email}%` });
    }
    if (searchDto.address) {
      queryBuilder.andWhere('shop.address LIKE :address', { address: `%${searchDto.address}%` });
    }
    if (searchDto.municipality) {
      queryBuilder.andWhere('municipality.id = :municipality', { municipality: searchDto.municipality });
    }
    // if (searchDto.orderBy) {
    //   queryBuilder.orderBy(searchDto.orderBy);
    // }
    if (searchDto.skip) {
      queryBuilder.skip(searchDto.skip);
    }
    if (searchDto.take) {
      queryBuilder.take(searchDto.take);
    }
    returnDto.data = await queryBuilder.getMany();
    return returnDto;
  }
}
