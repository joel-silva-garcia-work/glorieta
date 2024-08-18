import { Controller } from '@nestjs/common';
import { TiendaSeccionProductoViewService } from './tienda-seccion-producto-view.service';
 
@Controller('tienda-seccion-producto-marca-modelo-view')
export class TiendaSeccionProductoViewController {
  constructor(private readonly tiendaSeccionProductoViewService: TiendaSeccionProductoViewService) {}



}
