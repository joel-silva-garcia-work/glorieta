import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiendaSeccionProductoView } from './entities/tienda-seccion-producto-view.entity';
import { TiendaSeccionProductoViewService } from './tienda-seccion-producto-view.service';
import { TiendaSeccionProductoViewController } from './tienda-seccion-producto-view.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([TiendaSeccionProductoView]), // Registra la entidad
  ],
  controllers: [TiendaSeccionProductoViewController],
  providers: [TiendaSeccionProductoViewService],
})
export class TiendaSeccionProductoViewModule {}
