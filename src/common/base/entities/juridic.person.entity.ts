import { Column } from 'typeorm';
import { ExtendedEntity } from './extended.entity';

export abstract class JuridicPerson extends ExtendedEntity {
  @Column({})
  email: string;

  @Column()
  phone: string;

  @Column()
  direccion: string;
}
