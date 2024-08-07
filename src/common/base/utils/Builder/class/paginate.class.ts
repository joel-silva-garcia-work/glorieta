import { ApiPropertyOptional } from '@nestjs/swagger';
import { Min } from 'class-validator';

export class Paginate {
  @Min(0)
  @ApiPropertyOptional({
    type: Number,
    default: 0,
  })
  skip: number;
  @Min(10)
  @ApiPropertyOptional({
    type: Number,
    default: 10,
  })
  take: number = 10;
}
