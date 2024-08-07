import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';
export class CreateConfiguracionDto {
  

    @ApiProperty()
    @IsUUID()
    @IsString()
  id: string;


  @ApiProperty()
  @IsUUID()
  @IsString()
  sellCurrencyId: string;


  @ApiProperty()
  @IsUUID()
  @IsString()
  deliveryCurrencyId: string;
}

