import { IsString, IsUUID, IsDecimal, IsOptional, IsNotEmpty } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';

export class CreateProductDto {
    
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;
    
  @IsString()
  name: string;

  @IsUUID()
  marca: string;

  @IsUUID()
  modelo: string;

  @IsString()
  description: string;

  @IsString()
  photo: string;

  @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
  price: number;

  @IsNotEmpty()
  rules: RulesDto 
}
