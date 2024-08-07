import { notifyEnum } from 'src/common/enum/notify.enum';
import { RelationalDto } from '.';
import { RulesDto } from './rules.dto';
import { DestinationType } from '../types/destination.type';




// }
export interface BaseDto {
  id?: string;
  [key: string]: any; // Index signature for accepting any other properties
}

