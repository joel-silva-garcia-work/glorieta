import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { Section } from 'src/sections/entities/section.entity';
import { ShopSections } from 'src/shop-sections/entities/shop-section.entity';
import { SectionsModule } from 'src/sections/sections.module';
import { Deliveries } from 'src/delivery/entities/delivery.entity';
import { ShopSectionsModule } from 'src/shop-sections/shop-sections.module';
import { DeliveryModule } from '../delivery/delivery.module';
import { MailService } from 'src/mail-service/mail-service.service';
@Module({
  imports: [TypeOrmModule.forFeature([Shop,Section,ShopSections,Deliveries]),
  SectionsModule,
  ShopSectionsModule,
  DeliveryModule
  ],
  controllers: [ShopController],
  providers: [ShopService, MailService],
})
export class ShopModule {}
