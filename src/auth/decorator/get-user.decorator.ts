import {
  ConflictException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { User } from '../../user/entities/user.entity';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    if (data) {
      return request.user[data];
    }
    // otherwise continue
    return request.user;
  },
);

export const GetUserAdmin = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    const user: Partial<User> = request.user;
    // Verifica si el ID del rol del usuario es 1
    // if (user && user.role.id === 1) {
      return user;
  //   }
  //   // return null to try catch the null object in the method
  //   return null;
  },
);

export const GetUserEmployee = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    const user: Partial<User> = request.user;

    // Verifica si el ID del rol del usuario es 2
    // if (user && user.role.id === 2) {
      return user;
    // } else {
      // throw new ConflictException('El usuario no es empleado.');
    // }
  },
);

export const GetUserClient = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    const user: Partial<User> = request.user;
    // Verifica si el ID del rol del usuario es 3
    // if (user && user.role.id === 3) {
      return user;
    // } else {
      // throw new ConflictException('El usuario no es cliente.');
    // }
  },
);
