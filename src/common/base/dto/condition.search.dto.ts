import { IsOptional, IsString, IsArray, IsEnum, IsObject, IsNumber } from 'class-validator';
import { ComparisonType } from 'src/common/enum/comparison.type.enum';
import { SortOrder } from 'src/common/enum/sort.order.enum';
import { JsonFieldDto } from './json.field.dto ';



export class ConditionSearchDto {
  @IsEnum(ComparisonType)
  type: ComparisonType;

  @IsString()
  field: string;

  @IsOptional()
  JsonField?: JsonFieldDto
  
  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  range?: number[];
}
