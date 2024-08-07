import { IsUUID } from 'class-validator';

export class CreateShopSectionDto {
  @IsUUID()
  id: string;

  @IsUUID()
  shopId: string;

  @IsUUID()
  sectionId: string;
}
