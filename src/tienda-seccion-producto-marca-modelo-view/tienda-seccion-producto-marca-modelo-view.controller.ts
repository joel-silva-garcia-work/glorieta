import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiendaSeccionProductoMarcaModeloViewService } from './tienda-seccion-producto-marca-modelo-view.service';
import { CreateTiendaSeccionProductoMarcaModeloViewDto } from './dto/search-tienda-seccion-producto-marca-modelo-view.dto';
import { UpdateTiendaSeccionProductoMarcaModeloViewDto } from './dto/update-tienda-seccion-producto-marca-modelo-view.dto';

@Controller('tienda-seccion-producto-marca-modelo-view')
export class TiendaSeccionProductoMarcaModeloViewController {
  constructor(private readonly tiendaSeccionProductoMarcaModeloViewService: TiendaSeccionProductoMarcaModeloViewService) {}

  @Post()
  create(@Body() createTiendaSeccionProductoMarcaModeloViewDto: CreateTiendaSeccionProductoMarcaModeloViewDto) {
    return this.tiendaSeccionProductoMarcaModeloViewService.create(createTiendaSeccionProductoMarcaModeloViewDto);
  }

  @Get()
  findAll() {
    return this.tiendaSeccionProductoMarcaModeloViewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiendaSeccionProductoMarcaModeloViewService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiendaSeccionProductoMarcaModeloViewDto: UpdateTiendaSeccionProductoMarcaModeloViewDto) {
    return this.tiendaSeccionProductoMarcaModeloViewService.update(+id, updateTiendaSeccionProductoMarcaModeloViewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiendaSeccionProductoMarcaModeloViewService.remove(+id);
  }
}
