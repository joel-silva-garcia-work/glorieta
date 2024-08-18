import { BasicInformationEntity } from 'src/common/base/entities';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Unique,
} from 'typeorm';

@Entity('product')
@Unique('uk_name_product', ['name'])
export class Product extends BasicInformationEntity {

  marca: string;

  modelo: string;

  @Column({ type: 'text' })
  photo: string;

}
