import { Injectable } from '@nestjs/common';
import { CreateTipoCambioDto } from './dto/create-tipo-cambio.dto';
import { UpdateTipoCambioDto } from './dto/update-tipo-cambio.dto';

@Injectable()
export class TipoCambioService {
  create(createTipoCambioDto: CreateTipoCambioDto) {
    return 'This action adds a new tipoCambio';
  }

  findAll() {
    return `This action returns all tipoCambio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoCambio`;
  }

  update(id: number, updateTipoCambioDto: UpdateTipoCambioDto) {
    return `This action updates a #${id} tipoCambio`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoCambio`;
  }
}
