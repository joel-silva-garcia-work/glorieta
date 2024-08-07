import { Module } from '@nestjs/common';
import { ShopSectionsService } from './shop-sections.service';
import { ShopSectionsController } from './shop-sections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopSections } from './entities/shop-section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShopSections])],
  controllers: [ShopSectionsController],
  providers: [ShopSectionsService],
})
export class ShopSectionsModule {}
