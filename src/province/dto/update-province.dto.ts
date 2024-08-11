import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProvinceDto } from './create-province.dto';
import { IsUUID, IsString } from 'class-validator';

export class UpdateProvinceDto extends PartialType(CreateProvinceDto) {
  @ApiProperty()
  @IsUUID()
  @IsString()
  id: string;
}
