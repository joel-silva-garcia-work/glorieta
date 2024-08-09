import { BasicEntity } from "src/common/base/entities";
import { Currency } from "src/currency/entities/currency.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity("tipo-cambio") 
export class TipoCambio extends BasicEntity {

    @ManyToOne(() => Currency, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    baseCurrency: Currency;
  
    @ManyToOne(() => Currency, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    exchangeCurrency: Currency;

    @Column({
        type: 'date'
      })
    fecha: Date

    @Column( {
    type: 'decimal',
    precision: 10,   // Total de dígitos, incluyendo los decimales
    scale: 4          // Número de dígitos después del punto decimal
  })
    exchangeRate: number
  }