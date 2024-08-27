import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
// import { InjectModel } from "@nestjs/mongoose";
// import { Model } from "mongoose";
// import { Parking } from "../models/schema/parking.schema";
import { User } from '../user/entities/user.entity';
import { Role } from 'src/roles/entities/role.entity';
import { LoginDto } from './dto/login.dto';

@Injectable({})
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async login(dto: LoginDto) {
    // find the user by username
    const user = await this.userRepository.findOneBy({
      username: dto.username,
    });

    if (!user) {
      throw new ForbiddenException('User Name do not exist');
    }
    // otherwise continue
    // compare password
    const pwMatch = await argon.verify(user.hash, dto.password);
    // if password incorrect throw an exception
    if (!pwMatch) {
      throw new ForbiddenException('Password incorrects.');
    }
    // otherwise continue
    // return the save user token
    return this.signToken(user.id, user.username, '1m');
  }

  async logOut(dto: LoginDto) {
    // find the user by username
    const user = await this.userRepository.findOneBy({
      username: dto.username,
    });

    if (!user) {
      throw new ForbiddenException('User Name do not exist');
    }
    // otherwise continue
    // compare password
    const pwMatch = await argon.verify(user.hash, dto.password);
    // if password incorrect throw an exception
    if (!pwMatch) {
      throw new ForbiddenException('Password incorrects.');
    }
    // otherwise continue
    // return the save user token
    return {
      access_token: "",
    };  
  }

  async signupAdmin(dto: AuthDto) {
    // to register only the first admin
    //generate the password hash
    const hash = await argon.hash(dto.password);

    // get the Admin Role
    // TODO
    const role = await this.roleRepository.findOne({
      where:{
        id:"dc3ab524-d911-4f8a-93a6-5ab0a524f2bc"
      }
    })
    // search for another user with the same username
    let userExist = await this.userRepository.findOneBy({
      username: dto.username,
    });
    if (userExist) {
      throw new ConflictException(`The user Name ${dto.username} is taken.`);
    }
    // search if exist any admin
    // TODO
    userExist = await this.userRepository.findOneBy({
      role: role,
    });
    if (userExist) {
      throw new ConflictException(`There is an admin already.`);
    }
    // otherwise continue
    //save the user in the BD
    let user = await this.userRepository.create({
      username: dto.username,
      email: dto.username,
      name: dto.name,
      description: dto.description,
      lastName: dto.lastName,
      phone: dto.phone,
      hash: hash,
      role: role,
    });
    
    user = await this.userRepository.save(user);
    // return the save user token
    return this.signToken(user.id, user.username, '1m');
  }
  async signup(dto: AuthDto) {
    //generate the password hash
    const hash = await argon.hash(dto.password);

    // get the Client Role
    // TODO
    const role = await this.roleRepository.findOneBy({});
    // search for another user with the same username
    const userExist = await this.userRepository.findOneBy({
      username: dto.username,
    });
    if (userExist) {
      throw new ConflictException(`The user Name ${dto.username} is taken.`);
    }
    // otherwise continue
    //save the user in the BD
    let user = await this.userRepository.create({
      username: dto.username,
      email: dto.username,
      hash: hash,
      // role: role,
    });
    user = await this.userRepository.save(user);

    // return the save user token
    return this.signToken(user.id, user.username, '1m');
  }
  async signToken(
    userID: string,
    username: string,
    time: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userID,
      username: username,
      // roleID: role,
    };
    const secret = this.config.get('JWT_SECRET_KEY');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: time,
      secret: secret,
    });
    return {
      access_token: token,
    };
  }
}
