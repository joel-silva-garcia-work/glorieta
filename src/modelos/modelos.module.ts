import { Module } from '@nestjs/common';
import { ModelosService } from './modelos.service';
import { ModelosController } from './modelos.controller';
import { Modelo } from './entities/modelo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Modelo])],
  controllers: [ModelosController],
  providers: [ModelosService],
})
export class ModelosModule {}
