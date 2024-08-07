import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class RelationalDto {

  @ApiProperty({
    type: String,
    nullable:false
  })
  @IsString()
  @IsUUID()
  id: string;
}
