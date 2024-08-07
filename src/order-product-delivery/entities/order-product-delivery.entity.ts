import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';
import { BasicEntity } from 'src/common/base/entities';
import { DeliveryState } from 'src/delivery-state/entities/delivery-state.entity';
import { ShopSectionProducts } from 'src/shop-section-products/entities/shop-section-product.entity';

@Entity('order_product_delivery')
export class OrderProductDelivery extends BasicEntity {
  
  @ManyToOne(() => Order, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  order: Order;

  @ManyToOne(() => ShopSectionProducts, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  shopSectionProduct: ShopSectionProducts;

  @Column({ type: 'int', nullable: true })
  amountProduct: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  productOrderPrice: number;

  @Column({ type: 'varchar', length: 10 })
  fechaEntrega: string;

  @ManyToOne(() => DeliveryState, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  deliveryState: DeliveryState;

  @Column({ type: 'boolean', default: true })
  toDelivery: boolean;
}
