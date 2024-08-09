import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsNumber, IsOptional, IsNotEmpty, IsEmail } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class CreateShopDto {

  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;
  
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  longitud: number;

  @IsNumber()
  latitud: number;

  @IsString()
  phone: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  address: string;

  @IsUUID()
  municipality: string;

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto
}
