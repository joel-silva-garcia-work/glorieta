import { Module } from '@nestjs/common';
import { DeliveryStateService } from './delivery-state.service';
import { DeliveryStateController } from './delivery-state.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryState } from './entities/delivery-state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryState])],
  controllers: [DeliveryStateController],
  providers: [DeliveryStateService],
})
export class DeliveryStateModule {}
