import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID, ValidateIf } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';
import { validate } from 'class-validator';

export class CreateConfiguracionDto {
  

  @ApiPropertyOptional()
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;


  @ApiProperty()
  @IsUUID()
  @IsString()
  @ValidateIf((o) => o.deliveryCurrency !== o.sellCurrency)
  sellCurrency: string;


  @ApiProperty()
  @IsUUID()
  @IsString()
  @ValidateIf((o) => o.sellCurrency !== o.deliveryCurrency)

  deliveryCurrency: string;

  @ApiProperty()
  @IsNotEmpty()
  rules: RulesDto

  async validate() {
    const errors = await validate(this);
    
    // Validar que sellCurrency no sea igual a deliveryCurrency
    if (this.sellCurrency === this.deliveryCurrency) {
      errors.push({
        property: 'sellCurrency',
        constraints: { isEqual: 'sellCurrency should not be equal to deliveryCurrency' },
      });
    }

    if (errors.length > 0) {
      throw new Error('Validation failed: ' + JSON.stringify(errors));
    }
  }

  // aqui agregar codigo para que el sistema valide que sellCurrency no sea igual a deliveryCurrency
}

