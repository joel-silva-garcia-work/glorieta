import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCurrencyDto } from './create-currency.dto';
import { IsUUID, IsString } from 'class-validator';

export class UpdateCurrencyDto extends PartialType(CreateCurrencyDto) {

    @ApiProperty()
    @IsUUID()
    @IsString()
    id: string;
    
}
