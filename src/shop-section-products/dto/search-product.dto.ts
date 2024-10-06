import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID, IsDecimal, Min } from 'class-validator';

export class SearchProductDto {
  @ApiProperty()
  @IsString()
  searchString: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  sectionId?: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  shopId?: string;

  @ApiProperty()
  @IsOptional()
  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  @Min(0)
  minPrice?: number;

  @ApiProperty()
  @IsOptional()
  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  @Min(0)
  maxPrice?: number;
}
