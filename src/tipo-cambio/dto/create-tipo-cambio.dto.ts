import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Matches } from "class-validator";
import { RulesDto } from "src/common/base/dto/rules.dto";

export class CreateTipoCambioDto {

    @ApiProperty()
    @IsString()
    @IsUUID()
    baseCurrency: string;

    @ApiProperty()
    @IsString()
    @IsUUID()
    exchangeCurrency: string;

    @ApiProperty()
    @IsDate() 
    @IsString()
    @Matches(/^\d{4}-\d{2}-\d{2}$/, {
      message: 'La Fecha debe estar en formato YYYY-MM-DD',
    })
    @IsOptional()
    fecha: Date;

    @ApiProperty()
    @IsNumber() 
    exchangeRate: number

    @ApiProperty()
    @IsNotEmpty()
    rules: RulesDto 
}
  