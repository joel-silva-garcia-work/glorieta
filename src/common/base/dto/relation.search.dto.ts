import { IsOptional, IsString, IsArray } from 'class-validator';
import { SortOrder } from 'src/common/enum/sort.order.enum';
import { ConditionSearchDto } from './condition.search.dto';
import { OrderDto } from './order.dto';



export class RelationSelectDto {
  @IsArray()
  select: string[];

  @IsOptional()
  @IsArray()
  where?: ConditionSearchDto[];

  @IsOptional()
  @IsArray()
  orderBy?: OrderDto[];
}
