import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Deliveries } from 'src/delivery/entities/delivery.entity';
import { BasicEntity } from 'src/common/base/entities';
import { OrderStates } from 'src/order-state/entities/order-state.entity';
import { Shop } from 'src/shop/entities/shop.entity';

@Entity('order')
export class Order extends BasicEntity {
  
  @Column({ type: 'varchar', length: 255,unique:true })
  noOrden: string;

  @ManyToOne(() => Shop, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  shop: Shop;

  @ManyToOne(() => Deliveries, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  delivery: Deliveries;

  @Column({ type: 'int' })
  deliveryTravels: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  deliveryTotalPrice: number;

  @ManyToOne(() => OrderStates, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  orderState: OrderStates;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalProductsPrices: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalPrice: number;

  @Column({ type: 'varchar', length: 10, nullable: true })
  fechaOrder: string;

}
