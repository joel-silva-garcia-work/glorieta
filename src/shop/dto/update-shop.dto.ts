import { CreateShopDto } from './create-shop.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { RulesDto } from '../../common/base/dto/rules.dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateShopDto extends PartialType(CreateShopDto) {
  
    @ApiProperty()
    @IsString()
    @IsUUID()
    id: string;  
    @ApiProperty({
      type: RulesDto
    })
    @IsNotEmpty()
    rules: RulesDto 

}
