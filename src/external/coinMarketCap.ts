import CoinMarketCap from 'coinmarketcap-api';
import 
{   QuotePriceData, 
    CoinMarketCapTokenInfoResponse } from '../models/coinMarketCap';
import { EnvUtils } from '../utils/env';
import { Optional } from '../types/optional';

const cmcClient = new CoinMarketCap(EnvUtils.EnvValue.CMC_API_KEY);

export async function getTokenPriceFromCoinMarketCap(tokenName: string, denominationName: string = 'USD'): Promise<Optional<QuotePriceData>> {
    let tokenInfo = await getTokenInfoFromCoinMarketCap(tokenName);
    if (!tokenInfo) {
        throw new Error(`Error calling coinmarketcap for ${tokenName}`);
    }
    return tokenInfo.data[tokenName].quote[denominationName];
}

export async function getTokenInfoFromCoinMarketCap(tokenName: string): Promise<Optional<CoinMarketCapTokenInfoResponse>> {
    return cmcClient.getQuotes({ symbol: [tokenName] });
}