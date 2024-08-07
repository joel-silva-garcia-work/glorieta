// src/traza/traza.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { TrazaService } from './trazas.service';
import { CreateTrazaDto } from './dto/create-traza.dto';

@Controller('api')
export class TrazaController {
  constructor(private readonly trazaService: TrazaService) {}

  @Post('/guardar')
  async guardarTraza(@Body() trazaDto: CreateTrazaDto) {
    const traza = await this.trazaService.guardarTraza(trazaDto);
    return { message: 'Traza guardada correctamente', traza };
  }
}
