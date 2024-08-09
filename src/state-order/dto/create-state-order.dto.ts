import { IsOptional, IsString, IsUUID } from 'class-validator';
export class CreateStateOrderDto {

  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;
  
  @IsString()
  name: string;
}
