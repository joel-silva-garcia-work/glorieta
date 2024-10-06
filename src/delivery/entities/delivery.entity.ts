import { BasicEntity } from 'src/common/base/entities';
import { DeliveryState } from 'src/delivery-state/entities/delivery-state.entity';
import { Municipality } from 'src/municipality/entities/municipality.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Unique,
} from 'typeorm';

@Entity('deliveries')
@Unique(['municipalityOrigin', 'municipalityDestiny'])
export class Deliveries extends BasicEntity {
  @ManyToOne(() => Municipality, {eager: true})
  municipalityOrigin: Municipality;

  @ManyToOne(() => Municipality, {eager: true})
  municipalityDestiny: Municipality;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
