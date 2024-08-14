import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ShopSectionProducts } from 'src/shop-section-products/entities/shop-section-product.entity';
import { ShopSectionProductsModule } from 'src/shop-section-products/shop-section-products.module';
import { ShopSections } from 'src/shop-sections/entities/shop-section.entity';
import { ShopSectionsModule } from 'src/shop-sections/shop-sections.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product,ShopSections,ShopSectionProducts]),
  ShopSectionsModule,
  ShopSectionProductsModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
