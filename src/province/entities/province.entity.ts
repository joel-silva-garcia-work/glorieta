import { ExtendedEntity } from 'src/common/base/entities';
import { Country } from 'src/country/entities/country.entity';
import { Municipality } from 'src/municipality/entities/municipality.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('province')
export class Province extends ExtendedEntity {


  // @ManyToOne(() => Country, (country) => country.provinces, {
  //   eager: false,
  // })
  // @JoinColumn({ name: 'country_id' })
  // country: Country;

  @OneToMany(() => Municipality, (municipality) => municipality.province, {
    cascade: false,
  })
  municipalities: Municipality[];
}
