import { Injectable } from '@nestjs/common';
import { ClientInfoCreateDTO } from './dto/create-client-info.dto';
import { UpdateClientInfoDto } from './dto/update-client-info.dto';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientInfo } from './entities/client-info.entity';

@Injectable()
export class ClientInfoService extends BaseServiceCRUD<ClientInfo,ClientInfoCreateDTO,UpdateClientInfoDto> {
  constructor(
    @InjectRepository(ClientInfo)
    private readonly repository: Repository<ClientInfo>,
  ) {
    super(repository)
  }
}