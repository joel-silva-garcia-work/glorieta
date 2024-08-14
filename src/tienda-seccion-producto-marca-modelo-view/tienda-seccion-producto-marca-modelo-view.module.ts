import { Module } from '@nestjs/common';
import { TiendaSeccionProductoMarcaModeloViewController } from './tienda-seccion-producto-marca-modelo-view.controller';
import { TiendaSeccionProductoMarcaModeloView } from './entities/tienda-seccion-producto-marca-modelo-view.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([TiendaSeccionProductoMarcaModeloView]), // Registra la entidad
  ],
  controllers: [TiendaSeccionProductoMarcaModeloViewController],
  providers: [TiendaSeccionProductoMarcaModeloView],
})
export class TiendaSeccionProductoMarcaModeloViewModule {}
