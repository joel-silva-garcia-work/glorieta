import { BasicEntity } from 'src/common/base/entities';
import { Section } from 'src/sections/entities/section.entity';
import { Shop } from 'src/shop/entities/shop.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('shop_sections')
export class ShopSections extends BasicEntity{
  @ManyToOne(() => Shop, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT', eager: true })
  shop: Shop;

  @ManyToOne(() => Section, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT', eager: true  })
  section: Section;
}
