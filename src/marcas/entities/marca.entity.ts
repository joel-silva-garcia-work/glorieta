import { Entity } from 'typeorm';
import { ExtendedEntity } from '../../common/base/entities';

@Entity('marcas')
export class Marca extends ExtendedEntity {}
