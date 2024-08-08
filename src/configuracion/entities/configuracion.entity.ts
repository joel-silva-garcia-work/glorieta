import { BasicEntity } from "src/common/base/entities";
import { Currency } from "src/currency/entities/currency.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('configuracion')
export class Configuracion extends BasicEntity {

  @ManyToOne(() => Currency, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  sellCurrency: Currency;

  @ManyToOne(() => Currency, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  deliveryCurrency: Currency;
}
