import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { RelationType } from '../enum/relation.type.enum';

export class StructDto {
  @IsString()
  @ApiProperty({
    default: 'none',
  })
  table: string;

  @IsString()
  @ApiProperty({
    default: 'none',
  })
  relationField: string;

  @IsString()
  @ApiProperty({
    default: 'none',
  })
  alias: string;

}
