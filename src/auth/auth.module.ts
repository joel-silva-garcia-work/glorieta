import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy';
// import { MongooseModule } from "@nestjs/mongoose";
// import { ParkingSchema } from "../models/schema/parking.schema";
import { User } from '../user/entities/user.entity';
import { Role } from '../roles/entities/role.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    TypeOrmModule.forFeature([User, Role]),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
    }),
    // MongooseModule.forFeature([{ name: 'Parking', schema: ParkingSchema }]),
  ],
})
export class AuthModule {}
