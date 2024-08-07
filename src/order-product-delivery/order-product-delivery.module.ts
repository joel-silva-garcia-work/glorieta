import { Module } from '@nestjs/common';
import { OrderProductDeliveryService } from './order-product-delivery.service';
import { OrderProductDeliveryController } from './order-product-delivery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProductDelivery } from './entities/order-product-delivery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderProductDelivery])],
  controllers: [OrderProductDeliveryController],
  providers: [OrderProductDeliveryService],
})
export class OrderProductDeliveryModule {}
