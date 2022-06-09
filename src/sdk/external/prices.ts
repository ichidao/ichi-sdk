// import fetch from 'cross-fetch';
import 'cross-fetch/polyfill';
import { CoingeckoPrice, CoingeckoPriceResponse } from '../../models/coinGecko';
import { Optional } from '../../types/optional';

export const lookUpTokenPrices = async function (ids: string[]): Promise<Optional<CoingeckoPriceResponse>> {
  if (!ids || ids.length === 0) {
    return;
  }

  const idsFormatted = ids.join(encodeURIComponent(','));
  const result = await fetch(
    `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${idsFormatted}&vs_currencies=usd&include_24hr_change=true`
  );
  const json: CoingeckoPriceResponse = await result.json();
  return json;
};

export const getTokenPrice = async function (
  address: string,
  tokenPrices: CoingeckoPriceResponse
): Promise<Optional<CoingeckoPrice>> {
  if (!address) {
    return;
  }

  if (tokenPrices[address.toLowerCase()]) {
    return tokenPrices[address.toLowerCase()];
  }
  const prices = await lookUpTokenPrices([address.toLowerCase()]);

  if (!prices) {
    console.warn(`Could not fetch price given address: ${address}`);
    return;
  }

  return prices[address];
};
