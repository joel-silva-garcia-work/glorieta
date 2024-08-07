import { PartialType } from '@nestjs/swagger';
import { ClientInfoCreateDTO } from './create-client-info.dto';

export class UpdateClientInfoDto extends PartialType(ClientInfoCreateDTO) {}
