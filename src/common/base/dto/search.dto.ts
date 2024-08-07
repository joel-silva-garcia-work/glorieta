import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ConditionDto } from './condition.dto';
import { FindOptionsOrderValue, Repository } from 'typeorm';
import { orderEnum } from '../../enum/order.enum';
import { fieldsEnum } from '../../../common/enum/fields.enum';
import { IsArray, IsInt, IsOptional, Min } from 'class-validator';
import { SearchFieldDto } from '../utils/Builder/class/fields.dto';
import { type } from 'os';
import { StructDto } from '../utils/Builder/class/struct.dto';

export class SearchDto {
  @ApiProperty()
  queryType: fieldsEnum;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({
    type: [SearchFieldDto],
    isArray: true
    })
  fields?: SearchFieldDto[];

  @IsInt()
  @Min(0)
  @ApiProperty()
  page: number = 0;

  @ApiProperty()
  @IsInt()
  @Min(3)
  limit: number = 3;
  @ApiPropertyOptional()
  order: string;
  @ApiPropertyOptional()
  orderDirection: FindOptionsOrderValue;

  @IsOptional()
  @ApiPropertyOptional({
    type: () => [ConditionDto],
    isArray: true,
    default: []
  })
  conditions?: ConditionDto[];

  @IsOptional()
  @ApiPropertyOptional({
    type: () => [StructDto],
    isArray: true,
    default: []
  })
  relations?: StructDto[];

  repo: Repository<any>;
}
