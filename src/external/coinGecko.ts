import 'cross-fetch/polyfill';
import {
  CoinGeckoPrice,
  CoinGeckoPriceResponse,
  CoinGeckoTokenInfo,
  CoinGeckoTokenInfoResponse
} from '../models/coinGecko';
import { Optional } from '../types/optional';

export const lookUpTokenPrices = async function (ids: string[]): Promise<Optional<CoinGeckoPriceResponse>> {
  if (!ids || ids.length === 0) {
    console.warn(`Could not lookup token prices, no ids given.`);
    return;
  }

  const idsFormatted = ids.join(encodeURIComponent(','));
  const url = `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${idsFormatted}&vs_currencies=usd&include_24hr_change=true`;

  try {
    const result = await fetch(url);
    const json: CoinGeckoPriceResponse = await result.json();
    return json;
  } catch (e) {
    console.error(`Error calling ${url}`);
    throw e;
  }
};

export const getTokenPrice = async function (
  address: string,
  tokenPrices?: CoinGeckoPriceResponse
): Promise<Optional<CoinGeckoPrice>> {
  if (!address) {
    console.warn(`Could not lookup token price, no address given.`);
    return;
  }

  if (tokenPrices && tokenPrices[address.toLowerCase()]) {
    return tokenPrices[address.toLowerCase()];
  }
  const prices = await lookUpTokenPrices([address.toLowerCase()]);

  if (!prices) {
    console.warn(`Could not fetch price given address: ${address}`);
    return;
  }

  return prices[address.toLowerCase()];
};

export const getTokenInfo = async function (
  ids: string[],
  priceChangePeriod: string = '7d'
): Promise<Optional<CoinGeckoTokenInfoResponse>> {
  if (!ids) {
    console.warn(`Could not lookup token info, no ids given.`);
    return;
  }

  const idsFormatted = ids.join(encodeURIComponent(','));
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${idsFormatted}&sparkline=false&price_change_percentage=${priceChangePeriod}`;

  try {
    const result = await fetch(url);
    const tokenInfos: CoinGeckoTokenInfo[] = await result.json();

    const response: CoinGeckoTokenInfoResponse = {};
    for (const tokenInfo of tokenInfos) {
      response[tokenInfo.id] = tokenInfo;
    }

    return response;
  } catch (e) {
    console.error(`Error calling ${url}`);
    throw e;
  }
};
