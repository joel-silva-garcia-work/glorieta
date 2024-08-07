import { IsArray, IsNumber, IsObject, IsOptional } from "class-validator";
import { ConditionSearchDto } from "./condition.search.dto";
import { RelationSelectDto } from "./relation.search.dto";
import { SortOrder } from "src/common/enum/sort.order.enum";
import { Repository } from "typeorm";
import { fieldsEnum } from "src/common/enum/fields.enum";
import { ApiProperty } from "@nestjs/swagger";
import { OrderDto } from "./order.dto";

export class SearchManyDto {

  @ApiProperty()
  queryType: fieldsEnum;
  id: string;
  repo: Repository<any>;

  @IsOptional()
  @IsArray()
  select?: string[];

  @IsOptional()
  @IsArray()
  where?: ConditionSearchDto[];

  @IsOptional()
  @IsObject()
  relations?: { [key: string]: RelationSelectDto };

  @IsOptional()
  @IsArray()
  orderBy?: [OrderDto];

  @IsOptional()
  @IsNumber()
  skip?: number;

  @IsOptional()
  @IsNumber()
  take?: number;
}
