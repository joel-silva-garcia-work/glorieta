import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as argon from 'argon2';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from '../roles/entities/role.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  async findOneById(userId: string): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail({
        where: {
          id: userId,
        },
      });
      delete user.hash;
      return user;
    } catch (error) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
  }
  // validador para email
  async findOneByEmail(userEmail: string): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail({
        where: {
          email: userEmail,
        },
      });
      return user;
    } catch (error) {
      return null;
    }
  }
  // validador para username
  async findOneByUserName(userName: string): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail({
        where: {
          username: userName,
        },
      });
      return user;
    } catch (error) {
      return null;
    }
  }
  // async editUser(
  //     userId: number,
  //     dto: UpdateUserDto,
  // ):Promise <any>{
  //     // busco el usuario por el ID
  //     const user = await this.userRepository.findOneBy(
  //         {
  //             id:userId,
  //         }
  //     );
  //     if(!user){
  //     throw new NotFoundException(`El Id de usuario ${userId} no existe.`)
  //     }
  //     // si el rol del usuario es 3 no se puede modificar por el administrador
  //     if(user.role.id==3)
  //     {
  //         throw new ConflictException(`An Admin can not update a client.`)
  //     }
  //     if(dto.email)
  //     {
  //         const userExist = await this.findOneByEmail(dto.email)
  //         if(userExist)
  //         {
  //             if(user.id !== userExist.id)
  //             {
  //                 throw new ConflictException(`User email ${dto.email} is already taken`)
  //             }
  //         }
  //     }

  //    const updated = await this.userRepository.update(userId,dto);
  //     return dto

  // }

  async deleteUser(userId: string) {
    // busco el usuario por el ID
    const user = await this.userRepository.findOneBy({
      id: userId,
    });
    // si no existe retorno un error personalizado
    if (!user) {
      throw new ConflictException(`El Id de usuario ${userId} no existe.`);
    }
    // // if user is admin can't be deleted
    // if (user.role.id == 1) {
    //   throw new ConflictException(`You can't delete an admin`);
    // }
    // // if user is client can't be deleted
    // if (user.role.id == 3) {
    //   throw new ConflictException(`You can't delete an client`);
    // }
    //otherwise continue
    return await this.userRepository.remove(user);
  }

  async createUser(dto: CreateUserDto): Promise<any> {
    // busco si existe el usuario por el email
    const user = await this.findOneByUserName(dto.username);
    if (user) {
      throw new ConflictException(
        `Exist a user with the username: ${dto.username}. `,
      );
    }
    const hash = await argon.hash(dto.password);
    // Done
    const role = await this.roleRepository.findOneBy({});

    if (!role) {
      throw new ConflictException(
        `Does not exist a role with id: ${dto.role}. `,
      );
    }
    // inserto el nuevo usuario
    const saved = await this.userRepository.save({
      username: dto.username,
      hash: hash,
      role: role,
    });

    delete saved.hash;

    return saved;
  }
}
