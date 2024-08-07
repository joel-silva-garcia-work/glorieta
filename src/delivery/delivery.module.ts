import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deliveries } from './entities/delivery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deliveries])],
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}
