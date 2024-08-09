import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';
export class CreateConfiguracionDto {
  

  @ApiPropertyOptional()
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;


  @ApiProperty()
  @IsUUID()
  @IsString()
  sellCurrency: string;


  @ApiProperty()
  @IsUUID()
  @IsString()
  deliveryCurrency: string;

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto
  // aqui agregar codigo para que el sistema valide que sellCurrency no sea igual a deliveryCurrency
}

