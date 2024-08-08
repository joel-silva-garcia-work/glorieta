import { Module } from '@nestjs/common';
import { TipoCambioService } from './tipo-cambio.service';
import { TipoCambioController } from './tipo-cambio.controller';

@Module({
  controllers: [TipoCambioController],
  providers: [TipoCambioService],
})
export class TipoCambioModule {}
