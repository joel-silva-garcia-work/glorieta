import { IsUUID, IsNumber, IsOptional } from 'class-validator';

export class CreateShopSectionProductDto {

    @IsUUID()
    @IsOptional()
  id?: string;

  @IsUUID()
  shopSectionId: string;

  @IsUUID()
  productId: string;

  @IsNumber()
  existence: number;
}
