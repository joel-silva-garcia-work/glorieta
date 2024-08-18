import { IsArray, IsInt, IsNumber, IsObject, IsOptional } from 'class-validator';
import { ConditionSearchDto } from './condition.search.dto';
import { RelationSelectDto } from './relation.search.dto';
import { SortOrder } from 'src/common/enum/sort.order.enum';
import { Repository } from 'typeorm';
import { fieldsEnum } from 'src/common/enum/fields.enum';
import { ApiProperty } from '@nestjs/swagger';
import { OrderDto } from './order.dto';

export class SearchManyDto {
  @ApiProperty()
  queryType: fieldsEnum;
  
  id: string;
  repo: Repository<any>;

  @IsOptional()
  @IsInt()
  skip?: number;

  @IsOptional()
  @IsInt()
  take?: number;
}
