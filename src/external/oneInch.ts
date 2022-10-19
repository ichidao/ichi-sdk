import { OneInchPool } from '../models/oneInch';
import { Apis } from '../constants/apis';

export const get1InchPools = async (): Promise<OneInchPool[]> => {
  const url = Apis.ONE_INCH_POOL;
  try {
    const result = await fetch(url);
    const json = await result.json();
    return json;
  } catch (e) {
    console.error(`Error calling ${url}`);
    throw e;
  }
};
