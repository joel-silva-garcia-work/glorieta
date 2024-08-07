import { IsString, IsUUID } from 'class-validator';

export class CreateOrderStateDto {
    
  @IsUUID()
  id: string;

  @IsString()
  name: string;
}

