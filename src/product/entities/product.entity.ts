import { BasicInformationEntity } from 'src/common/base/entities';

import {
  Entity,
  Column,
  Unique,
} from 'typeorm';

@Entity('product')
@Unique('uk_name_product', ['name'])
export class Product extends BasicInformationEntity {

  @Column({nullable:true})
  marca: string;

  @Column({nullable:true})
  modelo: string;

  @Column({ type: 'text' })
  photo: string;

}
