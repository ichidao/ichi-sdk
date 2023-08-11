import { ChainId } from '../crypto/networks';
import { TokenName } from '../enums/tokenName';
import { getToken, TOKENS } from '../constants/tokens';
import {
  getMemberTokenPrice,
  getOneTokenPriceFromVault,
  getPriceFromRetroVault,
  getPriceFromUSDCVault,
  getPriceFromWethVault,
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
import { VaultName } from '../enums/vaultName';

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

export function tokenNameWithChainPrefix(tokenName: TokenName | string, chainId: ChainId): string {
  switch (chainId) {
    case ChainId.Arbitrum:
      return `arbitrum_${tokenName}`
    case ChainId.Avalanche:
      return `avalanche_${tokenName}`
    case ChainId.Polygon:
      return `pol_${tokenName}`
    case ChainId.Mumbai:
      return `mum_${tokenName}`
    case ChainId.Bsc:
      return `bsc_${tokenName}`
    default:
      return tokenName
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
  cg_key: string,
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
        let tokenPrices = await lookUpTokenPrices(chainId, [ichiV2Token.address.toLowerCase()], cg_key);
        if (!tokenPrices || !(ichiV2Token.address.toLowerCase() in tokenPrices)) {
          throw new Error(`Could not lookup token prices for ${ichiV2Token.symbol}, possibly flooding CoinGecko`);
        }

        ichiPrice = tokenPrices[ichiV2Token.address.toLowerCase()].usd;
      }

      price = await getOneTokenPriceFromVault(tokenName, ichiPrice, provider, chainId);
    } else if (token.isOneToken) {
      price = 1;
    } else {

      // used for WEN and FBX token prices:
      let wethPrice: number;
      let polygonProvider;
      const wethAddress = TOKENS[TokenName.WETH]![ChainId.Mainnet]?.address?.toLowerCase();

      // used for oRETRO token price:
      let retroPrice: number;
      const retroAddress = TOKENS[TokenName.RETRO]![ChainId.Polygon]?.address?.toLowerCase();

      switch (tokenName) {
        case TokenName.USDT:
        case TokenName.USDC:
        case TokenName.DAI:
        case TokenName.CASH:
        case TokenName.HOME:
          price = 1;
          break;
        case TokenName.XICHI:
          price = await getXICHIPrice(chainId, cg_key);
          break;
        case TokenName.COC:
          price = await getPriceFromUSDCVault( 
            VaultName.COC_USDC,
            provider,
            ChainId.Mainnet)
          break;
        case TokenName.WEN:
          polygonProvider = await getProvider(ChainId.Polygon);
          if (!polygonProvider) {
            throw new Error('Could not establish Polygon provider');
          }

          if (opts.tokenPrices && wethAddress && wethAddress in opts.tokenPrices) {
            wethPrice = opts.tokenPrices[wethAddress].usd;
            price = await getPriceFromWethVault( 
              VaultName.POLYGON_WEN_WETH,
              polygonProvider,
              ChainId.Polygon,
              wethPrice
              )
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}`);
          }
          break;
        case TokenName.ORETRO:
          polygonProvider = await getProvider(ChainId.Polygon);
          if (!polygonProvider) {
            throw new Error('Could not establish Polygon provider');
          }

          if (opts.tokenPrices && retroAddress && retroAddress in opts.tokenPrices) {
            retroPrice = opts.tokenPrices[retroAddress].usd;
            price = await getPriceFromRetroVault( 
              VaultName.RETRO_ORETRO_RETRO,
              polygonProvider,
              ChainId.Polygon,
              retroPrice
              )
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}`);
          }
          break;
        case TokenName.VBTC:
          if (opts.tokenPrices && wethAddress) {
            price = await getVBTCPrice(chainId, opts.tokenPrices[wethAddress]);
          } else {
            throw new Error(`Could not lookup token prices for VBTC`);
          }
          break;
        case TokenName.PWING:
          price = await getMemberTokenPrice(TokenName.ONE_WING, TokenName.PWING, { chainId, provider, decimals: 9 });
          break;
        case TokenName.BOOT:
          price = await getMemberTokenPrice(TokenName.BOOT_USD, TokenName.BOOT, { chainId, provider, decimals: 9 });
          break;
        case TokenName.SFRXETH:
          if (opts.tokenPrices && wethAddress) {
            price = opts.tokenPrices[wethAddress].usd;
            priceChange = opts.tokenPrices[wethAddress].usd_24h_change;
          } else {
            throw new Error(`Could not lookup token prices for SFRXETH`);
          }
          break;
        case TokenName.ICHI:
          const ichiV2Token = getToken(TokenName.ICHI_V2, chainId);

          // If tokenPrices has been passed in defer to that if possible
          if (opts.tokenPrices && ichiV2Token.address.toLowerCase() in opts.tokenPrices) {
            price = opts.tokenPrices[ichiV2Token.address.toLowerCase()].usd;
            priceChange = opts.tokenPrices[ichiV2Token.address.toLowerCase()].usd_24h_change;
          } else {
            const ichiAddress = TOKENS[TokenName.ICHI_V2]![ChainId.Mainnet]?.address?.toLowerCase();
            if (!ichiAddress) {
              throw new Error(`Could not lookup token prices for ${ichiV2Token.symbol}, no address`);
            }
            let tokenPrices = await lookUpTokenPrices(ChainId.Mainnet, [ichiAddress.toLowerCase()], cg_key);
            if (!tokenPrices || !(ichiAddress.toLowerCase() in tokenPrices)) {
              throw new Error(`Could not lookup token prices for ${ichiV2Token.symbol}, possibly flooding CoinGecko`);
            }

            price = tokenPrices[ichiAddress.toLowerCase()].usd;
            priceChange = tokenPrices[ichiAddress.toLowerCase()].usd_24h_change;
          }

          break;
        default:
          // If tokenPrices has been passed in defer to that if possible
          if (opts.tokenPrices && token.address.toLowerCase() in opts.tokenPrices) {
            price = opts.tokenPrices[token.address.toLowerCase()].usd;
            priceChange = opts.tokenPrices[token.address.toLowerCase()].usd_24h_change;
          } else {
            let tokenPrices = await lookUpTokenPrices(chainId, [token.address.toLowerCase()], cg_key);
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
