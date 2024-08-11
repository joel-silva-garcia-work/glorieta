import { BasicInformationEntity } from 'src/common/base/entities';
import { Municipality } from 'src/municipality/entities/municipality.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
} from 'typeorm';
import { v4 } from 'uuid';

@Index(v4(), ['email'])
@Entity('client_info')
export class ClientInfo extends BasicInformationEntity {
  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  address: string;

  @ManyToOne(() => Municipality, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  municipality: Municipality;

  @Column({ type: 'boolean', default: true })
  actual: boolean;
}
