import { Module } from '@nestjs/common';
import { RejectOrderService } from './reject-order.service';
import { RejectOrderController } from './reject-order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RejectOrder } from './entities/reject-order.entity';
import { OrderModule } from 'src/order/order.module';
import { Order } from 'src/order/entities/order.entity';
import { OrderProductDeliveryModule } from 'src/order-product-delivery/order-product-delivery.module';
import { OrderProductDelivery } from 'src/order-product-delivery/entities/order-product-delivery.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RejectOrder,
      OrderProductDelivery,
      Order]),
    OrderModule,
    OrderProductDeliveryModule,
],
  controllers: [RejectOrderController],
  providers: [RejectOrderService],
})
export class RejectOrderModule {}
