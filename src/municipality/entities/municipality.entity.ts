import { ExtendedEntity } from 'src/common/base/entities';
import { Locality } from 'src/locality/entities/locality.entity';
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

  @OneToMany(() => Locality, (locality) => locality.municipality, {
    cascade: false,
  })
  localities: Locality[];

}
