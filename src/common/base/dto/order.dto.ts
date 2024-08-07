import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { SortOrder } from 'src/common/enum/sort.order.enum';

export class OrderDto {
  @ApiPropertyOptional()
  @IsOptional()
  field: string;

  @ApiPropertyOptional()
  order: SortOrder;


}
