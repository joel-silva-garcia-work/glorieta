import { Module } from '@nestjs/common';
import { TipoCambioService } from './tipo-cambio.service';
import { TipoCambioController } from './tipo-cambio.controller';
import { TipoCambio } from './entities/tipo-cambio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoCambio])],
  controllers: [TipoCambioController],
  providers: [TipoCambioService],
})
export class TipoCambioModule {}
