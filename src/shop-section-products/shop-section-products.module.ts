import { Module } from '@nestjs/common';
import { ShopSectionProductsService } from './shop-section-products.service';
import { ShopSectionProductsController } from './shop-section-products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopSectionProducts } from './entities/shop-section-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShopSectionProducts])],
  controllers: [ShopSectionProductsController],
  providers: [ShopSectionProductsService],
})
export class ShopSectionProductsModule {}
