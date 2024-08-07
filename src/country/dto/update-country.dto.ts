import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCountryDto } from './create-country.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdateCountryDto extends PartialType(CreateCountryDto) {
  @ApiProperty()
  @IsString()
  @IsUUID()
  id: string; 
}
