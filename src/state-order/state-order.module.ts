import { Module } from '@nestjs/common';
import { StateOrderService } from './state-order.service';
import { StateOrderController } from './state-order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateOrder } from './entities/state-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StateOrder])],
  controllers: [StateOrderController],
  providers: [StateOrderService],
})
export class StateOrderModule {}
