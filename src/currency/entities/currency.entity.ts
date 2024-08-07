import { BasicInformationEntity } from 'src/common/base/entities';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('currency')
export class Currency  extends BasicInformationEntity  {
  @Column({ type: 'varchar', length: 3 })
  currency: string;

  
}
