import { OneInchPool } from '../models/oneInch';
import { Apis } from '../constants/apis';

export const get1InchPools = async (): Promise<OneInchPool[]> => {
  const result = await fetch(Apis['1inchPool']);
  const json = await result.json();
  return json;
};

// TODO: Genericize this with a default type of the above
export const call1Inch = async (address: string, protocol: string) => {
  let url = `${Apis['1inchPool']}?id=${address}&protocol_id=${protocol}`;
  const result = await fetch(url);
  const json = await result.json();
  return json;
};
