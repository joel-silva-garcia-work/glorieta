import { Module, forwardRef } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderProductDelivery } from 'src/order-product-delivery/entities/order-product-delivery.entity';
import { OrderProductDeliveryModule } from 'src/order-product-delivery/order-product-delivery.module';
import { ShopSectionProducts } from 'src/shop-section-products/entities/shop-section-product.entity';
import { ShopSectionProductsModule } from 'src/shop-section-products/shop-section-products.module';
import { Deliveries } from 'src/delivery/entities/delivery.entity';
import { DeliveryModule } from 'src/delivery/delivery.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderProductDelivery,
      ShopSectionProducts, 
      Deliveries]),    
    forwardRef(() => OrderProductDeliveryModule),
    forwardRef(() => ShopSectionProductsModule),
    forwardRef(() => DeliveryModule),

],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
