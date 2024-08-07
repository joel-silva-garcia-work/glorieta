import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  ConditionalOperators,
  DateOperators,
  LanguagesOperators,
  LogicalOperators,
  ValueType,
} from '../enum';


export class SearchFieldDto {
  @ApiProperty()
  alias: string;
  @ApiProperty()
  field: string;
}
export class DataFields {
  @ApiProperty()
  alias: string;
  @ApiProperty()
  field: string;
  @ApiProperty()
  typeField: ValueType;
  @ApiProperty()
  language: LanguagesOperators;
  @ApiProperty()
  logicalOperator: LogicalOperators | DateOperators;
  @ApiProperty()
  first_data: any;
  second_data: any;
}

export class FieldDto extends SearchFieldDto {

  @ApiPropertyOptional()
  conditionalOperator: ConditionalOperators;
  @ApiPropertyOptional()
  useBrackets?: boolean;
  @ApiPropertyOptional()
  dataField: DataFields[];
}
