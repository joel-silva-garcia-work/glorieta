import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Deliveries } from 'src/delivery/entities/delivery.entity';
import { BasicEntity } from 'src/common/base/entities';
import { OrderStates } from 'src/order-state/entities/order-state.entity';
import { Shop } from 'src/shop/entities/shop.entity';
import { DeliveryState } from 'src/delivery-state/entities/delivery-state.entity';
import { ClientInfo } from 'src/client-info/entities/client-info.entity';
import { ShoppingCart } from 'src/shopping-cart/entities/shopping-cart.entity';

@Entity('order')
export class Order extends BasicEntity {
  


  @ManyToOne(() => ClientInfo, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT', nullable: true })
  clientInfo: ClientInfo;

  @OneToOne(() => ShoppingCart, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn()
  shoppingCart: ShoppingCart;
  @Column({ type: 'varchar', length: 255,unique:true })
  noOrden: string;


  @ManyToOne(() => Deliveries, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  delivery: Deliveries;

  @ManyToOne(() => OrderStates, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  orderState: OrderStates;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalProductsPrices: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalPrice: number;

  @Column({ type: 'varchar', length: 10, nullable: true })
  fechaOrder: string;

  @Column({ type: 'varchar', length: 10,nullable:true })
  fechaEntrega: string;

  @ManyToOne(() => DeliveryState, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    nullable:true,
  })
  deliveryState: DeliveryState;

  @Column({ type: 'boolean', default: true })
  toDelivery: boolean;

}
