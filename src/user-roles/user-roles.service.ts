import { Injectable } from '@nestjs/common';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseServiceCRUD } from 'src/common/base/class/base.service.crud.class';
import { Repository } from 'typeorm';
import { UserRole } from './entities/user-role.entity';
@Injectable()
export class UserRolesService extends BaseServiceCRUD<UserRole,CreateUserRoleDto,UpdateUserRoleDto> {
  constructor(
    @InjectRepository(UserRole)
    private readonly repository: Repository<UserRole>,
  ) {
    super(repository)
  }
}