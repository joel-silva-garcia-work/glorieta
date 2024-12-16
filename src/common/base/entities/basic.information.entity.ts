import { Column } from 'typeorm';
import { BasicEntity } from './basic.entity';

export abstract class BasicInformationEntity
  extends BasicEntity
{
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

}
