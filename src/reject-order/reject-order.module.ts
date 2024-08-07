import { Module } from '@nestjs/common';
import { RejectOrderService } from './reject-order.service';
import { RejectOrderController } from './reject-order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RejectOrder } from './entities/reject-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RejectOrder])],
  controllers: [RejectOrderController],
  providers: [RejectOrderService],
})
export class RejectOrderModule {}
