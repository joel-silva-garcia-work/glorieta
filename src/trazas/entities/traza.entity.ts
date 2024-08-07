// src/traza/traza.entity.ts

import { BasicEntity } from 'src/common/base/entities';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('traza')
export class Traza {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  ip: string;

  @Column()
  url: string;

  @Column({nullable:true})
  nombreControlador: string;

  @Column({ type: 'json' })
  traza: Record<string, any>; // Campo JSON para almacenar los datos de seguimiento
}
