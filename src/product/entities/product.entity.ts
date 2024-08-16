import { BasicInformationEntity } from 'src/common/base/entities';
import { Marca } from 'src/marcas/entities/marca.entity';
import { Modelo } from 'src/modelos/entities/modelo.entity';
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
  @ManyToOne(() => Marca, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT', eager:false })
  marca: Marca;

  @ManyToOne(() => Modelo, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT', eager:false })
  modelo: Modelo;

  @Column({ type: 'text' })
  photo: string;

}
