import { BasicInformationEntity } from 'src/common/base/entities';
import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('state_order')
@Unique('uk_name_state_order', ['name'])
export class StateOrder  extends BasicInformationEntity {

// vincular state Order
}
