import { Module } from '@nestjs/common';
import { AuthModule } from './auth';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { config } from '../ormconfig';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user/user.module';
import { RolesModule } from './roles/roles.module';
import { SectionsModule } from './sections/sections.module';
import { CountryModule } from './country/country.module';
import { ProvinceModule } from './province/province.module';
import { MunicipalityModule } from './municipality/municipality.module';
import { TranslateModule } from './translate/translate.module';
import { UserRolesModule } from './user-roles/user-roles.module';
import { TrazasModule } from './trazas/trazas.module';
import { GlobalesService } from './globales/globales.service';
import { GlobalesModule } from './globales/globales.module';
import { ConfiguracionModule } from './configuracion/configuracion.module';
import { ClientInfoModule } from './client-info/client-info.module';
import { CurrencyModule } from './currency/currency.module';
import { DeliveryModule } from './delivery/delivery.module';
import { DeliveryStateModule } from './delivery-state/delivery-state.module';
import { OrderModule } from './order/order.module';
import { OrderProductDeliveryModule } from './order-product-delivery/order-product-delivery.module';
import { OrderStateModule } from './order-state/order-state.module';
import { ProductModule } from './product/product.module';
import { RejectOrderModule } from './reject-order/reject-order.module';
import { ShopModule } from './shop/shop.module';
import { ShopSectionProductsModule } from './shop-section-products/shop-section-products.module';
import { ShopSectionsModule } from './shop-sections/shop-sections.module';
import { TipoCambioModule } from './tipo-cambio/tipo-cambio.module';
import { TiendaSeccionProductoViewModule } from './tienda-seccion-producto-marca-modelo-view/tienda-seccion-producto-view.module';
 
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRoot(config),

    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
    }),
    // MongooseModule.forRoot('mongodb://localhost:27017/parking'),
    AuthModule,
    UserModule,
    RolesModule,
    SectionsModule,
    CountryModule,
    ProvinceModule,
    MunicipalityModule,
    TranslateModule,
    UserRolesModule,
    TrazasModule,
    GlobalesModule,
    ConfiguracionModule,
    ClientInfoModule,
    CurrencyModule,
    DeliveryModule,
    DeliveryStateModule,
    OrderModule,
    OrderProductDeliveryModule,
    OrderStateModule,
    ProductModule,
    RejectOrderModule,
    ShopModule,
    ShopSectionProductsModule,
    ShopSectionsModule,
    TipoCambioModule,
    TiendaSeccionProductoViewModule,
  ],
  controllers: [],
  providers: [GlobalesService],
  exports: [GlobalesModule],
})
export class AppModule {}
