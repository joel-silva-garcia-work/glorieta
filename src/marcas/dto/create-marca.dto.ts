import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { RulesDto } from 'src/common/base/dto/rules.dto';
import { KindEnum } from 'src/common/enum/kind.enum';
import { MethodEnum } from 'src/common/enum/method.enum';

export class CreateMarcaDto {

  @ApiPropertyOptional()
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;
  
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty({
    type: RulesDto
})

@IsNotEmpty()
rules: RulesDto 
}
