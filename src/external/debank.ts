import 'cross-fetch/polyfill';
import { DebankPortfolio } from '../models/debank';
import { Apis } from '../constants/apis';

export const getDebankPortfolio = async (address: string, protocol: string): Promise<DebankPortfolio> => {
  const url = `${Apis.DEBANK}?id=${address}&protocol_id=${protocol}`;
  try {
    const result = await fetch(url);
    const json = await result.json();
    return json;
  } catch (e) {
    console.error(`Error calling ${url}`);
    throw e;
  }
};
