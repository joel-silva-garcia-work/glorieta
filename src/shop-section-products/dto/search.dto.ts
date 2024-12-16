import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';

export class SearchSSPDto {

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  Id?: string;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  sectionId?: string;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  shopId?: string;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  productId?: string;
}
