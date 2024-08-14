import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsController } from './sections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from './entities/section.entity';
import { ShopSections } from 'src/shop-sections/entities/shop-section.entity';
import { Shop } from 'src/shop/entities/shop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shop,Section,ShopSections]),
  SectionsModule,
  ShopSections
  ],
  controllers: [SectionsController],
  providers: [SectionsService],
})
export class SectionsModule {}
