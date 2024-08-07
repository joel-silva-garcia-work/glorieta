import { EnumTypeOf } from "src/common/enum/typeOf.enum";

export class TypeOf{
checkType(variable: any): string {
  if (typeof variable === 'string') {
    return EnumTypeOf.STRING;
  } else if (typeof variable === 'number') {
    return EnumTypeOf.NUMBER;
  } else if (typeof variable === 'boolean') {
    return EnumTypeOf.BOOLEAN;
  } else if (typeof variable === 'undefined') {
    return 'La variable es undefined';
  } else if (typeof variable === 'symbol') {
    return 'La variable es un símbolo';
  } else if (typeof variable === 'bigint') {
    return 'La variable es un bigint';
  } else if (variable === null) {
    return 'La variable es null';
  } else if (Array.isArray(variable)) {
    return 'La variable es un array';
  } else if (typeof variable === 'object') {
    return EnumTypeOf.OBJECT;
  } else {
    return 'Tipo de dato no reconocido';
  }
}

}