import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';
import { BasicEntity } from 'src/common/base/entities';
import { ShopSectionProducts } from 'src/shop-section-products/entities/shop-section-product.entity';
import { join } from 'path';

@Entity('order_product_delivery')
export class OrderProductDelivery extends BasicEntity {
  @ManyToOne(() => Order, (order) => order.orderProductDeliveries, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT', eager: true })
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => ShopSectionProducts, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    eager: true
  })
  shopSectionProduct: ShopSectionProducts;

  @Column({ type: 'int', nullable: true })
  amountProduct: number;

}
