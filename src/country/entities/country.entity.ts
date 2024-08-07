import { ExtendedEntity } from 'src/common/base/entities';
import { Province } from 'src/province/entities/province.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('country')
export class Country extends ExtendedEntity {
  @Column({ unique: true })
  code: string;

  @Column({ nullable: true })
  numericCode: number;

  @OneToMany(() => Province, (province) => province.country, {
    cascade: false,
  })
  provinces: Province[];
}
