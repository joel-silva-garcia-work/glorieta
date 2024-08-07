import { BasicEntity } from 'src/common/base/entities';
import { Municipality } from 'src/municipality/entities/municipality.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Unique } from 'typeorm';

@Entity('deliveries')
@Unique(['municipalityOrigin', 'municipalityDestiny'])
export class Deliveries extends BasicEntity {

  @ManyToOne(() => Municipality, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  municipalityOrigin: Municipality;

  @ManyToOne(() => Municipality, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  municipalityDestiny: Municipality;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
