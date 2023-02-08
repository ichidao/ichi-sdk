import { ChainId } from '../crypto/networks';
import { TokenName } from '../enums/tokenName';
import { getToken, TOKENS } from '../constants/tokens';
import {
  getMemberTokenPrice,
  getOneTokenPriceFromVault,
  getPriceFromUSDCVault,
  getStimulusOraclePrice,
  getStimulusUSDPrice,
  getVBTCPrice,
  getXICHIPrice
} from '../crypto/prices';
import { lookUpTokenPrices } from '../external/coinGecko';
import { getErc20Contract } from './contracts';
import { getProvider } from '../crypto/providers';
import { AddressName } from '../enums/addressName';
import { getAddress } from '../constants/addresses';
import { CoinGeckoPriceResponse } from '../models/coinGecko';
import { Optional } from '../types/optional';
import { TokenMetrics, TokenSupply } from '../models/tokenMetrics';
import { VaultName } from 'src/enums/vaultName';

export function isOneToken(tokenName: TokenName | string, chainId: ChainId): boolean {
  try {
    const token = getToken(tokenName as TokenName, chainId);
    return token.isOneToken;
  } catch {
    try {
      const token = getToken(tokenName.toLowerCase() as TokenName, chainId);
      return token.isOneToken;
    } catch {
      return false;
    }
  }
}

async function getStandardTokenSupply(tokenName: TokenName, chainId: ChainId): Promise<TokenSupply>{
  try {
    const provider = await getProvider(chainId);
    if (!provider) {
      throw new Error('Could not establish provider');
    }

    const token = getToken(tokenName, chainId);

    const tokenContract = getErc20Contract(token.address, provider);
    const totalSupply = await tokenContract.totalSupply();
    const totalTokens = Number(totalSupply) / 10 ** token.decimals;
    const circulating = totalTokens;

    const tokenSupply: TokenSupply = {
      circulating,
      totalTokens
    };

    return tokenSupply;
  } catch (e) {
    console.error(`Could not get token supply for ${tokenName}`, e);
    throw e;
  }
}

async function getIchiSupply(): Promise<TokenSupply>{
  try {
    const provider = await getProvider(ChainId.Mainnet);
    if (!provider) {
      throw new Error('Could not establish provider');
    }

    const token = getToken(TokenName.ICHI, ChainId.Mainnet);

    const tokenContract = getErc20Contract(token.address, provider);
    const totalSupply = await tokenContract.totalSupply();
    const totalTokens = Number(totalSupply) / 10 ** token.decimals;

    const v1Balance = Number(await tokenContract.balanceOf(getAddress(AddressName.FARMING_V1, ChainId.Mainnet))) / 10 ** 9;
    const v2Balance = Number(await tokenContract.balanceOf(getAddress(AddressName.FARMING_V2, ChainId.Mainnet))) / 10 ** 9;
    const communityGnosisBalance_V1 =
      Number(await tokenContract.balanceOf(getAddress(AddressName.ICHI_COMMUNITY_GNOSIS, ChainId.Mainnet))) / 10 ** 9;
    const ichiInV2Balance =
      Number(await tokenContract.balanceOf(getToken(TokenName.ICHI_V2, ChainId.Mainnet).address)) / 10 ** 9;

    const circulating =
      totalTokens -
      v1Balance -
      v2Balance -
      ichiInV2Balance -
      communityGnosisBalance_V1;

    const tokenSupply: TokenSupply = {
      circulating,
      totalTokens
    };

    return tokenSupply;
  } catch (e) {
    console.error(`Could not get token supply for ICHI`, e);
    throw e;
  }
}

async function getIchiV2Supply(): Promise<TokenSupply>{
  try {
    const provider = await getProvider(ChainId.Mainnet);
    if (!provider) {
      throw new Error('Could not establish provider');
    }

    const token = getToken(TokenName.ICHI_V2, ChainId.Mainnet);

    const tokenContract = getErc20Contract(token.address, provider);
    const totalSupply = await tokenContract.totalSupply();
    const totalTokens = Number(totalSupply) / 10 ** token.decimals;

    const ichiContract = getErc20Contract(getToken(TokenName.ICHI, ChainId.Mainnet).address, provider);
    const ichiTotalSupply = Number(await ichiContract.totalSupply()) / 10 ** 9;

    const v1Balance = Number(await ichiContract.balanceOf(getAddress(AddressName.FARMING_V1, ChainId.Mainnet))) / 10 ** 9;
    const v2Balance = Number(await ichiContract.balanceOf(getAddress(AddressName.FARMING_V2, ChainId.Mainnet))) / 10 ** 9;
    const v3Balance = Number(await tokenContract.balanceOf(getAddress(AddressName.FARMING_V3, ChainId.Mainnet))) / 10 ** 18;
    const communityGnosisBalance_V1 =
      Number(await ichiContract.balanceOf(getAddress(AddressName.ICHI_COMMUNITY_GNOSIS, ChainId.Mainnet))) / 10 ** 9;
    const communityGnosisBalance_V2 =
      Number(await tokenContract.balanceOf(getAddress(AddressName.ICHI_COMMUNITY_GNOSIS, ChainId.Mainnet))) / 10 ** 18;
    const ichiV2GnosisBalance =
      Number(await tokenContract.balanceOf(getAddress(AddressName.ICHI_V2_GNOSIS, ChainId.Mainnet))) / 10 ** 18;
    const ichiAllyBalance = Number(await tokenContract.balanceOf(getAddress(AddressName.ALLY, ChainId.Mainnet))) / 10 ** 18;
    const ichiInV2Balance =
      Number(await ichiContract.balanceOf(getToken(TokenName.ICHI_V2, ChainId.Mainnet).address)) / 10 ** 9;
    const ichiGSRBalance = Number(await tokenContract.balanceOf(getAddress(AddressName.GSR, ChainId.Mainnet))) / 10 ** 18;

    const circulating =
      totalTokens +
      ichiTotalSupply -
      v1Balance -
      v2Balance -
      v3Balance -
      ichiInV2Balance -
      communityGnosisBalance_V1 -
      communityGnosisBalance_V2 -
      ichiV2GnosisBalance -
      ichiAllyBalance -
      ichiGSRBalance;

    const tokenSupply: TokenSupply = {
      circulating,
      totalTokens
    };

    return tokenSupply;
  } catch (e) {
    console.error(`Could not get token supply for ICHI V2`, e);
    throw e;
  }
}

export async function getTokenMetrics(
  tokenName: TokenName,
  chainId: ChainId,
  opts: { tokenPrices: Optional<CoinGeckoPriceResponse> } = { tokenPrices: undefined }
): Promise<TokenMetrics> {
  try {
    const provider = await getProvider(chainId);
    if (!provider) {
      throw new Error('Could not establish provider');
    }

    const token = getToken(tokenName, chainId);
    let price = 0;
    let priceChange = 0;
    let totalTokens = 0;
    let circulating = 0;
    let tokenSupply: TokenSupply;

    if (tokenName === TokenName.XICHI){
      tokenSupply = await getStandardTokenSupply(TokenName.XICHI, chainId);
      totalTokens = tokenSupply.totalTokens;
      circulating = tokenSupply.circulating;
    }

    if (tokenName === TokenName.ICHI){
      tokenSupply = await getIchiSupply();
      totalTokens = tokenSupply.totalTokens;
      circulating = tokenSupply.circulating;
    }

    if (tokenName === TokenName.ICHI_V2){
      tokenSupply = await getIchiV2Supply();
      totalTokens = tokenSupply.totalTokens;
      circulating = tokenSupply.circulating;
    }

    if ([TokenName.ONE_BTC, TokenName.ONE_UNI, TokenName.ALLY].includes(tokenName) && chainId === ChainId.Mainnet) {
      // special case - get price from oneToken/ICHI vault's pool
      // ONE_BTC is a special case on Mainnet only
      const ichiV2Token = getToken(TokenName.ICHI_V2, chainId);

      let ichiPrice: number;

      // If tokenPrices has been passed in defer to that if possible
      if (opts.tokenPrices && ichiV2Token.address.toLowerCase() in opts.tokenPrices) {
        ichiPrice = opts.tokenPrices[ichiV2Token.address.toLowerCase()].usd;
      } else {
        let tokenPrices = await lookUpTokenPrices([ichiV2Token.address.toLowerCase()]);
        if (!tokenPrices || !(ichiV2Token.address.toLowerCase() in tokenPrices)) {
          throw new Error(`Could not lookup token prices for ${ichiV2Token.symbol}, possibly flooding CoinGecko`);
        }

        ichiPrice = tokenPrices[ichiV2Token.address.toLowerCase()].usd;
      }

      price = await getOneTokenPriceFromVault(tokenName, ichiPrice, provider, chainId);
    } else if (token.isOneToken) {
      price = 1;
    } else {
      switch (tokenName) {
        case TokenName.USDT:
        case TokenName.USDC:
        case TokenName.DAI:
        case TokenName.HOME:
          price = 1;
          break;
        case TokenName.XICHI:
          price = await getXICHIPrice(chainId);
          break;
        case TokenName.COC:
          price = await getPriceFromUSDCVault( 
            VaultName.COC_USDC,
            provider,
            ChainId.Mainnet)
          break;
        case TokenName.VBTC:
          price = await getVBTCPrice(chainId);
          break;
        case TokenName.GOVI:
          const goviMainnetAddress = TOKENS[TokenName.GOVI]![ChainId.Mainnet]?.address;
          if (goviMainnetAddress) {
            let tokenPrices = await lookUpTokenPrices([goviMainnetAddress.toLowerCase()]);
            if (!tokenPrices || !(goviMainnetAddress.toLowerCase() in tokenPrices)) {
              throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
            }

            price = tokenPrices[goviMainnetAddress.toLowerCase()].usd;
            priceChange = tokenPrices[goviMainnetAddress.toLowerCase()].usd_24h_change;
          }
          break;
        case TokenName.TRADE:
          const tradeMainnetAddress = TOKENS[TokenName.TRADE]![ChainId.Mainnet]?.address;
          if (tradeMainnetAddress) {
            let tokenPrices = await lookUpTokenPrices([tradeMainnetAddress.toLowerCase()]);
            if (!tokenPrices || !(tradeMainnetAddress.toLowerCase() in tokenPrices)) {
              throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
            }

            price = tokenPrices[tradeMainnetAddress.toLowerCase()].usd;
            priceChange = tokenPrices[tradeMainnetAddress.toLowerCase()].usd_24h_change;
          }
          break;
        case TokenName.PWING:
          // price = await getMemberTokenPrice(TOKENS['onewing']['address'], TOKENS['pwing']['address'], 9);
          price = await getMemberTokenPrice(TokenName.ONE_WING, TokenName.PWING, { chainId, provider, decimals: 9 });
          break;
        case TokenName.BOOT:
          price = await getMemberTokenPrice(TokenName.BOOT_USD, TokenName.BOOT, { chainId, provider, decimals: 9 });
          break;
        case TokenName.SFRXETH:
        case TokenName.WETH:
          price = await getStimulusUSDPrice(TokenName.ONE_ETH, { chainId, provider, decimals: 9 });
          break;
        case TokenName.WBTC:
          price = await getMemberTokenPrice(TokenName.ONE_BTC, TokenName.WBTC, { chainId, provider, decimals: 8 });
          break;
        case TokenName.LINK:
          price = await getStimulusOraclePrice(TokenName.ONE_LINK, { chainId, provider, decimals: 9 });
          break;
        case TokenName.ICHI:
          const ichiV2Token = getToken(TokenName.ICHI_V2, chainId);

          // If tokenPrices has been passed in defer to that if possible
          if (opts.tokenPrices && ichiV2Token.address.toLowerCase() in opts.tokenPrices) {
            price = opts.tokenPrices[ichiV2Token.address.toLowerCase()].usd;
            priceChange = opts.tokenPrices[ichiV2Token.address.toLowerCase()].usd_24h_change;
          } else {
            let tokenPrices = await lookUpTokenPrices([ichiV2Token.address.toLowerCase()]);
            if (!tokenPrices || !(ichiV2Token.address.toLowerCase() in tokenPrices)) {
              throw new Error(`Could not lookup token prices for ${ichiV2Token.symbol}, possibly flooding CoinGecko`);
            }

            price = tokenPrices[ichiV2Token.address.toLowerCase()].usd;
            priceChange = tokenPrices[ichiV2Token.address.toLowerCase()].usd_24h_change;
          }

          break;
        default:
          // If tokenPrices has been passed in defer to that if possible
          if (opts.tokenPrices && token.address.toLowerCase() in opts.tokenPrices) {
            price = opts.tokenPrices[token.address.toLowerCase()].usd;
            priceChange = opts.tokenPrices[token.address.toLowerCase()].usd_24h_change;
          } else {
            let tokenPrices = await lookUpTokenPrices([token.address.toLowerCase()]);
            if (!tokenPrices || !(token.address.toLowerCase() in tokenPrices)) {
              throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
            }

            price = tokenPrices[token.address.toLowerCase()].usd;
            priceChange = tokenPrices[token.address.toLowerCase()].usd_24h_change;
          }
      }
    }

    const tokenMetrics: TokenMetrics = {
      price,
      circulating,
      priceChange,
      totalTokens
    };

    return tokenMetrics;
  } catch (e) {
    console.error(`Could not get token metrics for ${tokenName}`, e);
    throw e;
  }
}
