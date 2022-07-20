import 'cross-fetch/polyfill';
import { Apis } from '../constants/apis';
import { BancorV3Pools } from '../models/bancor';

export const getBancorV3Pools = async (): Promise<BancorV3Pools> => {
  const url = `${Apis.BANCOR_V3_API}`;
  try {
    const result = await fetch(url);
    const json = await result.json();
    return json;
  } catch (e) {
    console.error(`Error calling ${url}`);
    throw e;
  }
};
