import { Entity } from 'typeorm';
import { ExtendedEntity } from '../../common/base/entities';

@Entity('modelos')
export class Modelo extends ExtendedEntity {}
