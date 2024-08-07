import { Column } from 'typeorm';
import { BasicInformationEntity } from './basic.information.entity';

export abstract class ExtendedEntity
  extends BasicInformationEntity
{
  @Column({ default: true })
  isActive: boolean;
  @Column({ default: false })
  isUsed: boolean;
}
