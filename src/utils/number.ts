import { Optional } from '../sdk/types/optional';

export function BNtoNumberWithoutDecimals(val: Optional<string>, decimals: number): number {
  // TODO: What do we do if a negative number is given?  We should establish that and test it
  if (val != null) {
    const digits = val.length;
    let tempVal = '';
    if (digits <= decimals) {
      tempVal = '0.';
      for (let i = 0; i < decimals - digits; i++) {
        tempVal = `${tempVal}0`;
      }
      tempVal = `${tempVal}${val}`;
    } else {
      for (let i = 0; i < digits - decimals; i++) {
        tempVal = `${tempVal}${val[i]}`;
      }
      tempVal = `${tempVal}.`;
      for (let i = digits - decimals; i < digits; i++) {
        tempVal = `${tempVal}${val[i]}`;
      }
    }
    return Number(tempVal);
  }
  return 0;
}
