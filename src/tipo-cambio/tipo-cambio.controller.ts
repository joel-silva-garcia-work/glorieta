import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoCambioService } from './tipo-cambio.service';
import { CreateTipoCambioDto } from './dto/create-tipo-cambio.dto';
import { UpdateTipoCambioDto } from './dto/update-tipo-cambio.dto';

@Controller('tipo-cambio')
export class TipoCambioController {
  constructor(private readonly tipoCambioService: TipoCambioService) {}

  @Post()
  create(@Body() createTipoCambioDto: CreateTipoCambioDto) {
    return this.tipoCambioService.create(createTipoCambioDto);
  }

  @Get()
  findAll() {
    return this.tipoCambioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoCambioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoCambioDto: UpdateTipoCambioDto) {
    return this.tipoCambioService.update(+id, updateTipoCambioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoCambioService.remove(+id);
  }
}
