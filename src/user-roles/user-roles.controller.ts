import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserRolesService } from './user-roles.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';

@ApiTags('User-role')
@Controller('user-roles')
export class UserRolesController extends BaseControllerCRUD<
  CreateUserRoleDto,
  UpdateUserRoleDto,
  UserRolesService
> {
  constructor(private readonly Service: UserRolesService) {
    super(Service);
  }
}
