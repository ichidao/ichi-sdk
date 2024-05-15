import { ChainId } from '../crypto/networks';
import { TokenName } from '../enums/tokenName';
import { getToken, TOKENS } from '../constants/tokens';
import {
  getDollarTokenPriceFromAlgebraVault,
  getDollarTokenPriceFromUniV3Vault,
  getMemberTokenPrice,
  getOneTokenPriceFromVault,
  getPriceFromAlgebraVault,
  getPriceFromRetroVault,
  getPriceFromUSDCVault,
  getPriceFromWethVault,
  getStimulusOraclePrice,
  getStimulusUSDPrice,
  getTokenPriceFromVault,
  getVBTCPrice,
  getXICHIPrice
} from '../crypto/prices';
import { getTokenPriceById, lookUpTokenPrices } from '../external/coinGecko';
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
      let mainnetProvider;
      const wethAddress = TOKENS[TokenName.WETH]![ChainId.Mainnet]?.address?.toLowerCase();

      // used for oRETRO & liveRETRO token price:
      let retroPrice: number;
      const retroAddress = TOKENS[TokenName.RETRO]![ChainId.Polygon]?.address?.toLowerCase();

      let whbarPrice: number;
      const whbarAddress = TOKENS[TokenName.WHBAR]![ChainId.Hedera]?.address?.toLowerCase();

      let priceWbnb: number;
      const wbnbAddress = TOKENS[TokenName.WBNB]![ChainId.Bsc]?.address?.toLowerCase();

      switch (tokenName) {
        case TokenName.USDT:
        case TokenName.USDC:
        case TokenName.USDC2:
        case TokenName.DAI:
        case TokenName.HOME:
        case TokenName.CUSD:
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
        case TokenName.EURO3:
          price = await getPriceFromUSDCVault( 
            VaultName.POLYGON_USDC_EURO3,
            provider,
            ChainId.Polygon)
          break;
        case TokenName.A3A:
          const priceEuro3 = await getPriceFromUSDCVault( 
            VaultName.POLYGON_USDC_EURO3,
            provider,
            ChainId.Polygon)
          price = await getTokenPriceFromVault( 
            VaultName.POLYGON_EURO3_A3A,
            provider,
            ChainId.Polygon, 
            TokenName.A3A, 
            priceEuro3)
          break;
        case TokenName.LMR:
          const lmrAddress = chainId === ChainId.Mainnet 
            ? token.address.toLowerCase()
            : TOKENS[TokenName.LMR]![ChainId.Mainnet]?.address?.toLowerCase();
          if (opts.tokenPrices && lmrAddress && lmrAddress in opts.tokenPrices) {
            price = opts.tokenPrices[lmrAddress].usd;
            priceChange = opts.tokenPrices[lmrAddress].usd_24h_change;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          break;
        case TokenName.BTCB:
          const btcbAddress = chainId === ChainId.opBNB 
            ? TOKENS[TokenName.BTCB]![ChainId.Bsc]?.address?.toLowerCase()
            : token.address.toLowerCase();
          if (opts.tokenPrices && btcbAddress && btcbAddress in opts.tokenPrices) {
            price = opts.tokenPrices[btcbAddress].usd;
            priceChange = opts.tokenPrices[btcbAddress].usd_24h_change;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          break;
        case TokenName.CLEO:
          const wmntAddress = TOKENS[TokenName.WMNT]![ChainId.Mantle]?.address?.toLowerCase();
          let priceWmnt: number; 
          if (opts.tokenPrices && wmntAddress && wmntAddress in opts.tokenPrices) {
            priceWmnt = opts.tokenPrices[wmntAddress].usd;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          price = await getTokenPriceFromVault( 
            VaultName.MANTLE_CLEO_WMNT_CLEO,
            provider,
            ChainId.Mantle, 
            TokenName.CLEO, 
            priceWmnt)
          break;
        case TokenName.GRAI:
          const graiAddress = (chainId === ChainId.Mantle || chainId === ChainId.zkEVM)
            ? TOKENS[TokenName.GRAI]![ChainId.Arbitrum]?.address?.toLowerCase()
            : token.address.toLowerCase();
          if (opts.tokenPrices && graiAddress && graiAddress in opts.tokenPrices) {
            price = opts.tokenPrices[graiAddress].usd;
            priceChange = opts.tokenPrices[graiAddress].usd_24h_change;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          break;
        case TokenName.LINKHTS:
          if (opts.tokenPrices && whbarAddress && whbarAddress in opts.tokenPrices) {
            whbarPrice = opts.tokenPrices[whbarAddress].usd;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          price = await getDollarTokenPriceFromUniV3Vault( 
            '0x409b8cf38276c6052851773d3e88bbe3445fde3d',
            provider,
            '0x0000000000000000000000000000000000101b07', 
            whbarPrice)
          break;
        case TokenName.HST:
          if (opts.tokenPrices && whbarAddress && whbarAddress in opts.tokenPrices) {
            whbarPrice = opts.tokenPrices[whbarAddress].usd;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          price = await getDollarTokenPriceFromUniV3Vault( 
            '0xeea759212ee893acef75b5ee6e652cc83f3fb58c',
            provider,
            '0x00000000000000000000000000000000000ec585', 
            whbarPrice)
          break;
        case TokenName.METH:
          if (opts.tokenPrices && wethAddress && wethAddress in opts.tokenPrices) {
            wethPrice = opts.tokenPrices[wethAddress].usd;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          price = await getDollarTokenPriceFromUniV3Vault( 
            '0x66C0E5020fD8eD867907810Acb58BF910EA80e28',
            provider,
            '0xcDA86A272531e8640cD7F1a92c01839911B90bb0', 
            wethPrice)
          break;
        case TokenName.CRS:
          const usdcAddress = TOKENS[TokenName.USDC]![ChainId.Polygon]?.address?.toLowerCase();
          let usdcPrice = 1;
          if (opts.tokenPrices && usdcAddress && usdcAddress in opts.tokenPrices) {
            usdcPrice = opts.tokenPrices[usdcAddress].usd;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          price = await getDollarTokenPriceFromAlgebraVault( 
            '0xdc58504630972421445CBa4f856ABbA3Ce1BCB8a',
            provider,
            '0x731C79f054DF3A567584Ee21A95399d343103143', 
            usdcPrice)
          break;
        case TokenName.ETHENA:
          if (opts.tokenPrices && wbnbAddress && wbnbAddress in opts.tokenPrices) {
            priceWbnb = opts.tokenPrices[wbnbAddress].usd;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          price = await getDollarTokenPriceFromAlgebraVault( 
            '0xCE71693a998D7cE11714A6B80f8De90C994ad198',
            provider,
            '0xafbe3b8b0939a5538DE32f7752A78e08C8492295', 
            priceWbnb)
          break;
        case TokenName.DEUS:
          if (opts.tokenPrices && wethAddress && wethAddress in opts.tokenPrices) {
            wethPrice = opts.tokenPrices[wethAddress].usd;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          price = await getDollarTokenPriceFromUniV3Vault( 
            '0x1805C5BE28Ad205cd6Ea853a925c02Ecca987E08',
            provider,
            '0xDE5ed76E7c05eC5e4572CfC88d1ACEA165109E44', 
            wethPrice)
          break;
        case TokenName.ZUSD:
          const wzenCoingeckoId = 'zencash';
          const wzenPrice = await getTokenPriceById(wzenCoingeckoId, cg_key);
          let price1 = 1;
          if (wzenPrice) {
            price1 = wzenPrice[wzenCoingeckoId].usd;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          price = await getDollarTokenPriceFromUniV3Vault( 
            '0x1c01d36c3c2d516068f5a97a9Fe0b972d2F1B07d', // ZUSD-WZEN
            provider,
            '0xCEad8ee30e03aE87E5E709617f7FdF180Eef9973', 
            price1 ) 
          break;
        case TokenName.TAOUSD:
          price = await getDollarTokenPriceFromUniV3Vault( 
            '0x2347E1daecC7CF0CEFa3704b013855d9A19655B8', // taoUSD-USDC
            provider,
            '0x966570A84709D693463CDD69dCadb0121b2C9d26', // taoUSD
            1)
          break;
        case TokenName.WEVMOS:
          const evmosCoingeckoId = 'evmos';
          const evmosPrice = await getTokenPriceById(evmosCoingeckoId, cg_key);
          if (evmosPrice) {
            price = evmosPrice[evmosCoingeckoId].usd;
            priceChange = evmosPrice[evmosCoingeckoId].usd_24h_change;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          break;
        case TokenName.CEUR:
          const ceurCoingeckoId = 'celo-euro';
          const ceurPrice = await getTokenPriceById(ceurCoingeckoId, cg_key);
          if (ceurPrice) {
            price = ceurPrice[ceurCoingeckoId].usd;
            priceChange = ceurPrice[ceurCoingeckoId].usd_24h_change;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          break;
        case TokenName.TASHI:
          const evmosForTashiCoingeckoId = 'evmos';
          const evmosForTashiPrice = await getTokenPriceById(evmosForTashiCoingeckoId, cg_key);
          if (evmosForTashiPrice) {
            const evmosTokenPrice = evmosForTashiPrice[evmosForTashiCoingeckoId].usd;
            price = await getDollarTokenPriceFromUniV3Vault( 
              '0x4305325b20518fF42C50CB7288B6A5D26dff19b0',
              provider,
              '0x98fAFD9F714CE0B4bB2870527076F2F314aAed82', 
              evmosTokenPrice)
            } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          break;
        case TokenName.SFRAX:
          const fraxAddress = TOKENS[TokenName.FRAX]![ChainId.Arbitrum]?.address?.toLowerCase();
          let priceFrax: number; 
          if (opts.tokenPrices && fraxAddress && fraxAddress in opts.tokenPrices) {
            priceFrax = opts.tokenPrices[fraxAddress].usd;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          price = await getTokenPriceFromVault( 
            VaultName.ARBITRUM_RAMSES_SFRAX_FRAX,
            provider,
            ChainId.Arbitrum, 
            TokenName.SFRAX, 
            priceFrax)
          break;
        case TokenName.ORDI:
          if (opts.tokenPrices && wbnbAddress && wbnbAddress in opts.tokenPrices) {
            priceWbnb = opts.tokenPrices[wbnbAddress].usd;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          price = await getTokenPriceFromVault( 
            VaultName.BSC_ORDI_WBNB,
            provider,
            ChainId.Bsc, 
            TokenName.ORDI, 
            priceWbnb)
          break;
        case TokenName.SATS:
          if (opts.tokenPrices && wbnbAddress && wbnbAddress in opts.tokenPrices) {
            priceWbnb = opts.tokenPrices[wbnbAddress].usd;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          price = await getTokenPriceFromVault( 
            VaultName.BSC_SATS_WBNB,
            provider,
            ChainId.Bsc, 
            TokenName.SATS, 
            priceWbnb)
          break;
        case TokenName.WBTC:
          const wbtcAddress = (chainId !== ChainId.Eon 
            && chainId !== ChainId.Linea 
            && chainId !== ChainId.Evmos 
            && chainId !== ChainId.Blast) 
            ? token.address.toLowerCase()
            : TOKENS[TokenName.WBTC]![ChainId.Mainnet]?.address?.toLowerCase();
          if (opts.tokenPrices && wbtcAddress && wbtcAddress in opts.tokenPrices) {
            price = opts.tokenPrices[wbtcAddress].usd;
            priceChange = opts.tokenPrices[wbtcAddress].usd_24h_change;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          break;
        case TokenName.WAVAX:
          const wavaxAddress = chainId !== ChainId.Eon 
            ? token.address.toLowerCase()
            : TOKENS[TokenName.WAVAX]![ChainId.Avalanche]?.address?.toLowerCase();
          if (opts.tokenPrices && wavaxAddress && wavaxAddress in opts.tokenPrices) {
            price = opts.tokenPrices[wavaxAddress].usd;
            priceChange = opts.tokenPrices[wavaxAddress].usd_24h_change;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          break;
        case TokenName.WETH:
          const tAddress = (chainId !== ChainId.Eon && chainId !== ChainId.zkSync && chainId !== ChainId.Evmos) 
            ? token.address.toLowerCase()
            : wethAddress;
          if (opts.tokenPrices && tAddress && tAddress in opts.tokenPrices) {
            price = opts.tokenPrices[tAddress].usd;
            priceChange = opts.tokenPrices[tAddress].usd_24h_change;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          break;
        case TokenName.WSTETH:
          const wstEthAddress = (chainId !== ChainId.zkEVM) 
            ? token.address.toLowerCase()
            : TOKENS[TokenName.WSTETH]![ChainId.Polygon]?.address?.toLowerCase();
          if (opts.tokenPrices && wstEthAddress && wstEthAddress in opts.tokenPrices) {
            price = opts.tokenPrices[wstEthAddress].usd;
            priceChange = opts.tokenPrices[wstEthAddress].usd_24h_change;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          break;
        case TokenName.RETH:
          if (opts.tokenPrices && wethAddress && wethAddress in opts.tokenPrices) {
            wethPrice = opts.tokenPrices[wethAddress].usd;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          price = await getDollarTokenPriceFromUniV3Vault( 
            '0x02F3893D0A1725155357dA6125d0f3Ca67d86FbB', // wETH-rETH
            provider,
            '0xb23C20EFcE6e24Acca0Cef9B7B7aA196b84EC942', // rETH
            wethPrice)
          break;
        case TokenName.RSETH:
          if (opts.tokenPrices && wethAddress && wethAddress in opts.tokenPrices) {
            wethPrice = opts.tokenPrices[wethAddress].usd;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          price = await getDollarTokenPriceFromUniV3Vault( 
            '0x36ED8160b40eA5A5c267Ca1362e329805B7eb9E4', // wETH-rsETH
            provider,
            '0x8C7D118B5c47a5BCBD47cc51789558B98dAD17c5', // rsETH
            wethPrice)
          break;
        case TokenName.WZEN:
          const zenCoingeckoId = 'zencash';
          const zenPrice = await getTokenPriceById(zenCoingeckoId, cg_key);
          if (zenPrice) {
            price = zenPrice[zenCoingeckoId].usd;
            priceChange = zenPrice[zenCoingeckoId].usd_24h_change;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          break;
        case TokenName.OXT:
          const oxtAddress = chainId === ChainId.Mainnet 
            ? token.address.toLowerCase()
            : TOKENS[TokenName.LMR]![ChainId.Mainnet]?.address?.toLowerCase();
          if (opts.tokenPrices && oxtAddress && oxtAddress in opts.tokenPrices) {
            price = opts.tokenPrices[oxtAddress].usd;
            priceChange = opts.tokenPrices[oxtAddress].usd_24h_change;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
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
        case TokenName.ABOND:
          mainnetProvider = await getProvider(ChainId.Mainnet);
          if (!mainnetProvider) {
            throw new Error('Could not establish Mainnet provider');
          }

          if (opts.tokenPrices && wethAddress && wethAddress in opts.tokenPrices) {
            wethPrice = opts.tokenPrices[wethAddress].usd;
            price = await getPriceFromWethVault( 
              VaultName.WETH_ABOND,
              mainnetProvider,
              ChainId.Mainnet,
              wethPrice
              )
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}`);
          }
          break;
        case TokenName.BLUE:
          mainnetProvider = await getProvider(ChainId.Mainnet);
          if (!mainnetProvider) {
            throw new Error('Could not establish Mainnet provider');
          }

          if (opts.tokenPrices && wethAddress && wethAddress in opts.tokenPrices) {
            wethPrice = opts.tokenPrices[wethAddress].usd;
            price = await getPriceFromWethVault( 
              VaultName.ETHEREUM_BLUEPRINT_WETH_BLUE,
              mainnetProvider,
              ChainId.Mainnet,
              wethPrice
              )
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}`);
          }
          break;
        case TokenName.MPDAO:
          if (opts.tokenPrices && wethAddress && wethAddress in opts.tokenPrices) {
            wethPrice = opts.tokenPrices[wethAddress].usd;
            price = await getPriceFromWethVault( 
              VaultName.WETH_MPDAO,
              provider,
              ChainId.Mainnet,
              wethPrice
              )
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}`);
          }
          break;
        case TokenName.GARBAGE:
          mainnetProvider = await getProvider(ChainId.Mainnet);
          if (!mainnetProvider) {
            throw new Error('Could not establish Mainnet provider');
          }

          if (opts.tokenPrices && wethAddress && wethAddress in opts.tokenPrices) {
            wethPrice = opts.tokenPrices[wethAddress].usd;
            price = await getPriceFromWethVault( 
              VaultName.WETH_GARBAGE,
              mainnetProvider,
              ChainId.Mainnet,
              wethPrice
              )
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}`);
          }
          break;
        case TokenName.ZERO:
          const zkEvmProvider = await getProvider(ChainId.zkEVM);
          if (!zkEvmProvider) {
            throw new Error('Could not establish zkEVM provider');
          }
          const zkevm_wethAddress = TOKENS[TokenName.WETH]![ChainId.zkEVM]?.address?.toLowerCase();


          if (opts.tokenPrices && zkevm_wethAddress && zkevm_wethAddress in opts.tokenPrices) {
            const zkevm_wethPrice = opts.tokenPrices[zkevm_wethAddress].usd;
            price = await getPriceFromWethVault( 
              VaultName.ZKEVM_ZERO_WETH_ZERO,
              zkEvmProvider,
              ChainId.zkEVM,
              zkevm_wethPrice
              )
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}`);
          }
          break;
        case TokenName.ETH:
          if (opts.tokenPrices && wethAddress && wethAddress in opts.tokenPrices) {
            wethPrice = opts.tokenPrices[wethAddress].usd;
            price = wethPrice
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}`);
          }
          break;
        case TokenName.HBR:
          const bscProvider = await getProvider(ChainId.Bsc);
          if (!bscProvider) {
            throw new Error('Could not establish Bsc provider');
          }
          price = await getPriceFromAlgebraVault( 
            VaultName.BSC_THENA_USDT_HBR,
            bscProvider,
            ChainId.Bsc,
            TokenName.HBR,
            1 // USDT price = 1
            )
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
        case TokenName.LIVERETRO:
          polygonProvider = await getProvider(ChainId.Polygon);
          if (!polygonProvider) {
            throw new Error('Could not establish Polygon provider');
          }

          if (opts.tokenPrices && retroAddress && retroAddress in opts.tokenPrices) {
            retroPrice = opts.tokenPrices[retroAddress].usd;
            price = await getPriceFromRetroVault( 
              VaultName.RETRO_RETRO_LIVERETRO,
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
        case TokenName.LYNX:
          const wethOnLineaAddress = TOKENS[TokenName.WETH]![ChainId.Linea]?.address?.toLowerCase();
          let wethOnLineaPrice: number; 
          if (opts.tokenPrices && wethOnLineaAddress && wethOnLineaAddress in opts.tokenPrices) {
            wethOnLineaPrice = opts.tokenPrices[wethOnLineaAddress].usd;
          } else {
            throw new Error(`Could not lookup token prices for ${token.symbol}, possibly flooding CoinGecko`);
          }
          price = await getDollarTokenPriceFromAlgebraVault( 
            '0x511481ef0DEB10eB5c1E36B72140718c58921265', // wETH-LYNX vault
            provider,
            token.address, 
            wethOnLineaPrice)
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
