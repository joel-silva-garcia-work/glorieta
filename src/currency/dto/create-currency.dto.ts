
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, Max } from 'class-validator';

export class CreateCurrencyDto {
  
  @ApiProperty()
  @IsUUID()
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @IsUUID()
  @ApiProperty()
//   long = 3
  currency: string;

  @IsString()
  @ApiProperty()
  name: string;
}
