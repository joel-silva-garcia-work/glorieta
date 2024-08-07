// src/traza/traza.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Traza } from './entities/traza.entity';
import { CreateTrazaDto } from './dto/create-traza.dto';

@Injectable()
export class TrazaService {
  constructor(
    @InjectRepository(Traza)
    private readonly trazaRepository: Repository<Traza>,
  ) {}

  async guardarTraza(trazaDto: CreateTrazaDto): Promise<void> {

    const nuevaTraza = new Traza();
    nuevaTraza.ip = trazaDto.ip;
    nuevaTraza.url = trazaDto.url;
    nuevaTraza.nombreControlador = trazaDto.nombreControlador;
    nuevaTraza.traza = trazaDto.traza;

   await this.trazaRepository.save(nuevaTraza);
  }
}
