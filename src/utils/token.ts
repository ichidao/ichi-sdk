import { ChainId } from '../crypto/networks';
import { TokenName } from '../enums/tokenName';
import { getToken, TOKENS } from '../constants/tokens';
import {
  getMemberTokenPrice,
  getOneTokenPriceFromVault,
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
import { TokenMetrics } from '../models/tokenMetrics';

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

    const tokenContract = getErc20Contract(token.address, provider);
    let totalSupply = await tokenContract.totalSupply();
    let totalTokens = Number(totalSupply) / 10 ** token.decimals;
    let circulating = totalTokens;

    if (tokenName == TokenName.ICHI) {
      // const ichiV2Contract = new ethers.Contract(TOKENS.ichi_v2.address, ERC20_ABI as ContractInterface, provider);
      const ichiV2Contract = getErc20Contract(getToken(TokenName.ICHI_V2, chainId).address, provider);
      let ichiV2TotalSupply = Number(await ichiV2Contract.totalSupply()) / 10 ** 18;

      const v1Balance = Number(await tokenContract.balanceOf(getAddress(AddressName.FARMING_V1, chainId))) / 10 ** 9;
      const v2Balance = Number(await tokenContract.balanceOf(getAddress(AddressName.FARMING_V2, chainId))) / 10 ** 9;
      const v3Balance = Number(await ichiV2Contract.balanceOf(getAddress(AddressName.FARMING_V3, chainId))) / 10 ** 18;
      const communityGnosisBalance_V1 =
        Number(await tokenContract.balanceOf(getAddress(AddressName.ICHI_COMMUNITY_GNOSIS, chainId))) / 10 ** 9;
      const communityGnosisBalance_V2 =
        Number(await ichiV2Contract.balanceOf(getAddress(AddressName.ICHI_COMMUNITY_GNOSIS, chainId))) / 10 ** 18;
      const ichiV2GnosisBalance =
        Number(await ichiV2Contract.balanceOf(getAddress(AddressName.ICHI_V2_GNOSIS, chainId))) / 10 ** 18;
      const ichiAllyBalance = Number(await ichiV2Contract.balanceOf(getAddress(AddressName.ALLY, chainId))) / 10 ** 18;
      const ichiInV2Balance =
        Number(await tokenContract.balanceOf(getToken(TokenName.ICHI_V2, chainId).address)) / 10 ** 9;
      const ichiV2GSRBalance = Number(await ichiV2Contract.balanceOf(getAddress(AddressName.GSR, chainId))) / 10 ** 18;

      circulating =
        totalTokens +
        // ichiV2TotalSupply -
        v1Balance -
        v2Balance -
        // v3Balance -
        ichiInV2Balance -
        communityGnosisBalance_V1;
        // communityGnosisBalance_V2 -
        // ichiV2GnosisBalance -
        // ichiAllyBalance -
        // ichiV2GSRBalance;
    }

    if (tokenName == TokenName.ICHI_V2) {
      const ichiContract = getErc20Contract(getToken(TokenName.ICHI, chainId).address, provider);
      let ichiTotalSupply = Number(await ichiContract.totalSupply()) / 10 ** 9;

      const v1Balance = Number(await ichiContract.balanceOf(getAddress(AddressName.FARMING_V1, chainId))) / 10 ** 9;
      const v2Balance = Number(await ichiContract.balanceOf(getAddress(AddressName.FARMING_V2, chainId))) / 10 ** 9;
      const v3Balance = Number(await tokenContract.balanceOf(getAddress(AddressName.FARMING_V3, chainId))) / 10 ** 18;
      const communityGnosisBalance_V1 =
        Number(await ichiContract.balanceOf(getAddress(AddressName.ICHI_COMMUNITY_GNOSIS, chainId))) / 10 ** 9;
      const communityGnosisBalance_V2 =
        Number(await tokenContract.balanceOf(getAddress(AddressName.ICHI_COMMUNITY_GNOSIS, chainId))) / 10 ** 18;
      const ichiV2GnosisBalance =
        Number(await tokenContract.balanceOf(getAddress(AddressName.ICHI_V2_GNOSIS, chainId))) / 10 ** 18;
      const ichiAllyBalance = Number(await tokenContract.balanceOf(getAddress(AddressName.ALLY, chainId))) / 10 ** 18;
      const ichiInV2Balance =
        Number(await ichiContract.balanceOf(getToken(TokenName.ICHI_V2, chainId).address)) / 10 ** 9;
      const ichiGSRBalance = Number(await tokenContract.balanceOf(getAddress(AddressName.GSR, chainId))) / 10 ** 18;

      circulating =
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
        case TokenName.USDC:
        case TokenName.DAI:
        case TokenName.HOME:
          price = 1;
          break;
        case TokenName.XICHI:
          price = await getXICHIPrice(chainId);
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
        case TokenName.PWING:
          // price = await getMemberTokenPrice(TOKENS['onewing']['address'], TOKENS['pwing']['address'], 9);
          price = await getMemberTokenPrice(TokenName.ONE_WING, TokenName.PWING, { chainId, provider, decimals: 9 });
          break;
        case TokenName.BOOT:
          price = await getMemberTokenPrice(TokenName.BOOT_USD, TokenName.BOOT, { chainId, provider, decimals: 9 });
          break;
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

getTokenMetrics(TokenName.ICHI, 1).then((result) => console.log(result));