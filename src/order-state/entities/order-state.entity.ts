import { BasicInformationEntity } from 'src/common/base/entities';
import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('order_states')
@Unique('uk_name_order_states', ['name'])
export class OrderStates extends BasicInformationEntity{}
