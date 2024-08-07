import { Module } from '@nestjs/common';
import { GlobalesService } from './globales.service';

@Module({
  providers: [GlobalesService],
  exports:[GlobalesService]
})
export class GlobalesModule {}
