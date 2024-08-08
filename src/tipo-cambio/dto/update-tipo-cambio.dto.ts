import { PartialType } from '@nestjs/swagger';
import { CreateTipoCambioDto } from './create-tipo-cambio.dto';

export class UpdateTipoCambioDto extends PartialType(CreateTipoCambioDto) {}
