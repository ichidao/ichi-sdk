import CoinMarketCap from 'coinmarketcap-api';
import 
{   QuotePriceData, 
    CoinMarketCapTokenInfoResponse } from '../models/coinMarketCap';
import { Optional } from 'src/types/optional';

async function getTokenPrice(apiKey: string, tokenName: string, denominationName: string = 'USD'): Promise<Optional<QuotePriceData>> {
  let tokenInfo = await getTokenInfo(apiKey, tokenName);
  return tokenInfo!.data[tokenName].quote[denominationName];
}

async function getTokenInfo(apiKey: string, tokenName: string): Promise<Optional<CoinMarketCapTokenInfoResponse>> {
    let cmcClient: any = new CoinMarketCap(apiKey);
    return cmcClient.getQuotes({ symbol: [tokenName] });
}