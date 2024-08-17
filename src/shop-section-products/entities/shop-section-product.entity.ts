import { BasicEntity } from 'src/common/base/entities';
import { Product } from 'src/product/entities/product.entity';
import { ShopSections } from 'src/shop-sections/entities/shop-section.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('shop_section_products')
export class ShopSectionProducts extends BasicEntity {
  @ManyToOne(() => ShopSections, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  shopSection: ShopSections;

  @ManyToOne(() => Product, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  product: Product;

  
  @Column('json',{nullable:true})
  caracteristicas: Record<string, any>

  @Column({ type: 'int' })
  existence: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 ,nullable: true})
  price: number;
}
