import { IsString, IsUUID } from 'class-validator';
export class CreateStateOrderDto {
 @IsUUID()
  id: string;

  @IsString()
  name: string;
}
