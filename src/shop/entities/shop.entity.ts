import { BasicInformationEntity } from 'src/common/base/entities';
import { Municipality } from 'src/municipality/entities/municipality.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Unique } from 'typeorm';

@Entity('shop')
@Unique('uk_name_shop', ['name'])
export class Shop  extends BasicInformationEntity {

  @Column({ type: 'int' })
  longitud: number;

  @Column({ type: 'int' })
  latitud: number;

  @Column({ type: 'varchar', length: 255 })
  phone: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  address: string;

  @ManyToOne(() => Municipality, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  municipality: Municipality;
}
