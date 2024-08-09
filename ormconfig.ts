import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Role } from './src/roles/entities/role.entity';
import { User } from './src/user/entities/user.entity';
import { Section } from './src/sections/entities/section.entity';
import { Marca } from './src/marcas/entities/marca.entity';
import { Modelo } from './src/modelos/entities/modelo.entity';
import { Country } from './src/country/entities/country.entity';
import { Province } from './src/province/entities/province.entity';
import { Municipality } from './src/municipality/entities/municipality.entity';
import { Locality } from './src/locality/entities/locality.entity';
import { UserRole } from './src/user-roles/entities/user-role.entity';
import { Configuracion } from './src/configuracion/entities/configuracion.entity';
import { Traza } from 'src/trazas/entities/traza.entity';
import { Currency } from 'src/currency/entities/currency.entity';
import { ClientInfo } from 'src/client-info/entities/client-info.entity';
import { Deliveries } from 'src/delivery/entities/delivery.entity';
import { DeliveryState } from 'src/delivery-state/entities/delivery-state.entity';
import { Order } from 'src/order/entities/order.entity';
import { OrderProductDelivery } from 'src/order-product-delivery/entities/order-product-delivery.entity';
import { OrderStates } from 'src/order-state/entities/order-state.entity';
import { Product } from 'src/product/entities/product.entity';
import { RejectOrder } from 'src/reject-order/entities/reject-order.entity';
import { Shop } from 'src/shop/entities/shop.entity';
import { ShopSectionProducts } from 'src/shop-section-products/entities/shop-section-product.entity';
import { ShopSections } from 'src/shop-sections/entities/shop-section.entity';
import { StateOrder } from 'src/state-order/entities/state-order.entity';
import { TipoCambio } from 'src/tipo-cambio/entities/tipo-cambio.entity';

dotenv.config(); // Carga las variables de entorno desde el archivo .env

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  // entities: ['src/**/entities/*.entity.ts'],

  entities: [
    Traza,
    User,
    Role,
    UserRole,
    Section,
    Marca,
    Modelo,
    Country,
    Province,
    Municipality,
    Locality,
    Configuracion,
    Currency,
    ClientInfo,
    Deliveries,
    DeliveryState,
    Order,
    OrderProductDelivery,
    OrderStates,
    Product,
    RejectOrder,
    Section,
    Shop,
    ShopSectionProducts,
    ShopSections,
    StateOrder,
    TipoCambio
  ],
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: true,
};

export default config;
