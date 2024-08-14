import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { Section } from 'src/sections/entities/section.entity';
import { ShopSections } from 'src/shop-sections/entities/shop-section.entity';
import { SectionsModule } from 'src/sections/sections.module';

@Module({
  imports: [TypeOrmModule.forFeature([Shop,Section,ShopSections]),
  SectionsModule,
  ShopSections
  ],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
