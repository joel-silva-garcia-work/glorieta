import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsOptional, IsString, IsUUID, Matches } from "class-validator";

export class CreateTipoCambioDto {

    @ApiProperty()
    @IsString()
    @IsUUID()
    baseCurrencyId: string;

    @ApiProperty()
    @IsString()
    @IsUUID()
    exchageCurrencyId: string;

    @ApiProperty()
    @IsDate() 
    @IsString()
    @Matches(/^\d{4}-\d{2}-\d{2}$/, {
      message: 'La Fecha debe estar en formato YYYY-MM-DD',
    })
    @IsOptional()
    fecha: Date;


}
