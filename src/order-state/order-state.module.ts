import { Module } from '@nestjs/common';
import { OrderStateService } from './order-state.service';
import { OrderStateController } from './order-state.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderStates } from './entities/order-state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderStates])],
  controllers: [OrderStateController],
  providers: [OrderStateService],
})
export class OrderStateModule {}
