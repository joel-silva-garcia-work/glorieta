import {
  IsUUID,
  IsString,
} from 'class-validator';

export class ProductLocations{
  @IsUUID()
  @IsString()

  product: string;

}
