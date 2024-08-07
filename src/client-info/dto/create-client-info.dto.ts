import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsUUID, IsBoolean, IsNotEmpty } from 'class-validator';

export class ClientInfoCreateDTO {
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  municipalityId: string;

//   @ApiProperty()
//   @IsBoolean()
//   @IsNotEmpty()
  actual?: boolean = true; // Optional, default is true
}
