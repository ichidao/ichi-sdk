/* eslint-disable max-len */
import 'cross-fetch/polyfill';
import { chunk } from '../utils/array';
import {
  CoinGeckoPrice,
  CoinGeckoPriceResponse,
  CoinGeckoTokenInfo,
  CoinGeckoTokenInfoResponse
} from '../models/coinGecko';
import { Optional } from '../types/optional';
import { ChainId, SUPPORTED_NETWORKS } from '../crypto/networks';

export const lookUpTokenPrices = async function (
  chainId: ChainId,
  ids: string[],
  cg_key: string,
  chunkSize: number = 20
): Promise<Optional<CoinGeckoPriceResponse>> {
  if (!ids || ids.length === 0) {
    console.warn(`Could not lookup token prices, no ids given.`);
    return;
  }
  if (SUPPORTED_NETWORKS[chainId]?.coingecko === '') {
    console.warn(`Could not lookup token prices, chain not supported by Coingecko.`);
    return;
  }

  const chunkedIds = chunk(ids, chunkSize);

  let prices: CoinGeckoPriceResponse = {};

  // While we could do this in parallel we'd risk throttling, and we are already fetching multiple at one time,
  // so let's fetch in some reasonable amountl ike 20 at a time
  for (let ids of chunkedIds) {
    const idsFormatted = ids.join(encodeURIComponent(','));
    let url = '';
    if (cg_key !== '') {
      url = `https://pro-api.coingecko.com/api/v3/simple/token_price/${SUPPORTED_NETWORKS[chainId]?.coingecko}?contract_addresses=${idsFormatted}&vs_currencies=usd&include_24hr_change=true&x_cg_pro_api_key=${cg_key}`;
    } else {
      url = `https://api.coingecko.com/api/v3/simple/token_price/${SUPPORTED_NETWORKS[chainId]?.coingecko}?contract_addresses=${idsFormatted}&vs_currencies=usd&include_24hr_change=true`;
    }

    try {
      const result = await fetch(url);
      const json: CoinGeckoPriceResponse = await result.json();
      prices = {
        ...json,
        ...prices
      };
    } catch (e) {
      console.error(`Error calling ${url}`);
      throw e;
    }
  }

  return prices;
};

export const getTokenPrice = async function (
  chainId: ChainId,
  address: string,
  cg_key: string,
  tokenPrices?: CoinGeckoPriceResponse
): Promise<Optional<CoinGeckoPrice>> {
  if (!address) {
    console.warn(`Could not lookup token price, no address given.`);
    return;
  }

  if (tokenPrices && tokenPrices[address.toLowerCase()]) {
    return tokenPrices[address.toLowerCase()];
  }
  const prices = await lookUpTokenPrices(chainId, [address.toLowerCase()], cg_key);

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
