import { BasicEntity } from 'src/common/base/entities';
import { Product } from 'src/product/entities/product.entity';
import { ShopSections } from 'src/shop-sections/entities/shop-section.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('shop_section_products')
export class ShopSectionProducts extends BasicEntity {
  @ManyToOne(() => ShopSections, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT', eager: true })
  shopSection: ShopSections;

  @ManyToOne(() => Product, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT', eager: true })
  product: Product;

  @Column({ type: 'int' })
  existence: number;

}
