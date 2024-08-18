import { Type } from 'class-transformer';
import { IsArray, IsEmail, IsNumber, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { OrderByFieldDto } from 'src/common/base/dto/orderByField.dto';

export class ShopSearchDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  description?: string;
  
  @IsOptional()
  @IsString()
  phone?: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsUUID()
  @IsString()
  municipality?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderByFieldDto)
  orderBy?: OrderByFieldDto[]; // Array de campos y direcciones de ordenamiento
  
  @IsOptional()
  @IsNumber()
  skip?: number;

  @IsOptional()
  @IsNumber()
  take?: number;
}
