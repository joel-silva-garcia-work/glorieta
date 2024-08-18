import { Module, forwardRef } from '@nestjs/common';
import { ShopSectionProductsService } from './shop-section-products.service';
import { ShopSectionProductsController } from './shop-section-products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopSectionProducts } from './entities/shop-section-product.entity';
import { ShopSections } from 'src/shop-sections/entities/shop-section.entity';
import { ShopSectionsModule } from 'src/shop-sections/shop-sections.module';
import { Product } from 'src/product/entities/product.entity';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([
    ShopSectionProducts,
    ShopSections,
  Product]),
  forwardRef(() => ShopSectionsModule),
  forwardRef(() => ProductModule),

  ],
  controllers: [ShopSectionProductsController],
  providers: [ShopSectionProductsService],
})
export class ShopSectionProductsModule {}
