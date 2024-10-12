import { IsArray, IsUUID } from 'class-validator';

export class CreateShoppingCartDto {
  @IsArray()
  @IsUUID('all', { each: true })
  shopSectionProductIds: string[];

  @IsArray()
  quantities: number[];
}
