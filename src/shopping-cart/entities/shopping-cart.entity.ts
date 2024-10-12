import { BasicEntity } from "src/common/base/entities/basic.entity";
import { Column, Entity } from "typeorm";

@Entity('shopping_cart')
export class ShoppingCart extends BasicEntity {
  @Column("simple-array")
  shopSectionProductIds: string[];
  @Column("simple-array")
  quantities: number[];
}
