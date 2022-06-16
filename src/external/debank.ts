import 'cross-fetch/polyfill';
import { DebankPortfolio } from '../models/debank';
import { Apis } from '../constants/apis';

export const getDebankPortfolio = async (address: string, protocol: string): Promise<DebankPortfolio> => {
  let url = `${Apis.debank}?id=${address}&protocol_id=${protocol}`;
  const result = await fetch(url);
  const json = await result.json();
  return json;
};
