import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiendaSeccionProductoMarcaModeloViewService } from './tienda-seccion-producto-marca-modelo-view.service';

@Controller('tienda-seccion-producto-marca-modelo-view')
export class TiendaSeccionProductoMarcaModeloViewController {
  constructor(private readonly tiendaSeccionProductoMarcaModeloViewService: TiendaSeccionProductoMarcaModeloViewService) {}



}
