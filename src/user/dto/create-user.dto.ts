import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsStrongPassword, IsUUID } from 'class-validator';

export class CreateUserDto {

  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;
  
  @ApiProperty()
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    },
    {
      message: 'weak',
    },
  )
  password: string;

  @IsString()
  @IsUUID()
  @IsOptional()
  role?: string;

  hash?: string;
}
