import { ExtendedEntity } from 'src/common/base/entities';
import { Municipality } from 'src/municipality/entities/municipality.entity';
import { Entity, ManyToOne, JoinColumn } from 'typeorm';

@Entity('locality')
export class Locality extends ExtendedEntity {
  @ManyToOne(() => Municipality, (municipality) => municipality.localities)
  @JoinColumn({ name: 'municipality_id' })
  municipality: Municipality;
}
