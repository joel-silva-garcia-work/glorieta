import { BasicEntity } from 'src/common/base/entities';
import { OrderProductDelivery } from 'src/order-product-delivery/entities/order-product-delivery.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('reject_order')
export class RejectOrder extends BasicEntity {
  

  @ManyToOne(() => OrderProductDelivery, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  orderProductDelivery: OrderProductDelivery;

  @Column({ type: 'int' })
  rejectProductAmount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  rejectProductPrice: number;
}
