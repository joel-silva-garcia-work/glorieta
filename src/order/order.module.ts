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
import { Municipality } from 'src/municipality/entities/municipality.entity';
import { MunicipalityModule } from 'src/municipality/municipality.module';
import { Product } from 'src/product/entities/product.entity';
import { ProductModule } from 'src/product/product.module';
import { ClientInfo } from 'src/client-info/entities/client-info.entity';
import { ShoppingCart } from 'src/shopping-cart/entities/shopping-cart.entity';
import { ShoppingCartModule } from 'src/shopping-cart/shopping-cart.module';
import { ClientInfoModule } from 'src/client-info/client-info.module';
import { OrderStateModule } from 'src/order-state/order-state.module';
import { OrderStates } from 'src/order-state/entities/order-state.entity';
import { Shop } from 'src/shop/entities/shop.entity';
import { DeliveryState } from 'src/delivery-state/entities/delivery-state.entity';
import { MailService } from 'src/mail-service/mail-service.service';
 
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderProductDelivery,
      ShopSectionProducts, 
      Deliveries,
      Municipality,
      Product,
      ShoppingCart,
      ClientInfo,
      OrderStates,
      Shop,
      DeliveryState
    ]),    
    forwardRef(() => OrderProductDeliveryModule),
    forwardRef(() => ShopSectionProductsModule),
    forwardRef(() => MunicipalityModule),
    forwardRef(() => ProductModule),
    forwardRef(() => DeliveryModule),
    forwardRef(() => ShoppingCartModule),
    forwardRef(() => ClientInfoModule),
    forwardRef(() => OrderStateModule),
    

],
  controllers: [OrderController],
  providers: [OrderService,MailService],
})
export class OrderModule {}
