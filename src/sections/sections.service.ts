import { Injectable } from '@nestjs/common';
import { Section } from './entities/section.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseServiceCRUD } from '../common/base/class/base.service.crud.class';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { ReturnDto } from 'src/common/base/dto';
import { Shop } from 'src/shop/entities/shop.entity';
import { ShopSections } from 'src/shop-sections/entities/shop-section.entity';
import { CodeEnum } from 'src/common/enum/code.enum';
import { ResourceEnum } from 'src/common/enum/resource.enum';

@Injectable()
export class SectionsService extends BaseServiceCRUD<Section,CreateSectionDto,UpdateSectionDto> {
  constructor(
    @InjectRepository(Section)
    private readonly repository: Repository<Section>,
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>,
    @InjectRepository(ShopSections)
    private readonly shopSectionRepository: Repository<ShopSections>
  ) {
    super(repository)
  }
  async addSection(createDto: CreateSectionDto):Promise<ReturnDto>{
    const returnDto = new ReturnDto
    let valid = true;
    if (createDto.rules) {
      valid = await this._validate(createDto);
    }
    if (valid) {
      try {
        const section: Section = new Section();

        section.description = createDto.description;
        section.name = createDto.name;

        returnDto.data = await this.repository.save(section);

        const shops = await this.shopRepository.find({})
        shops.forEach(async (shop)=>{
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
}