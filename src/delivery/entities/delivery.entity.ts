import { BasicEntity } from 'src/common/base/entities';
import { DeliveryState } from 'src/delivery-state/entities/delivery-state.entity';
import { Municipality } from 'src/municipality/entities/municipality.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Unique } from 'typeorm';

@Entity('deliveries')
@Unique(['municipalityOrigin', 'municipalityDestiny'])
export class Deliveries extends BasicEntity {

  @ManyToOne(() => Municipality, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  municipalityOrigin: Municipality;

  @ManyToOne(() => Municipality, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  municipalityDestiny: Municipality;

  @ManyToOne(() => DeliveryState, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  deliveryState: DeliveryState;
  
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
