import { ExtendedEntity } from 'src/common/base/entities';
import { Province } from 'src/province/entities/province.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  Unique,
} from 'typeorm';

@Entity('municipality')
export class Municipality extends ExtendedEntity {
  @ManyToOne(() => Province, (province) => province.municipalities, {
    eager: false,
  })
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @Column({ default: 0, type: 'double precision' })
  latitude: number

  @Column({ default: 0, type: 'double precision' })
  longitude: number  

}
