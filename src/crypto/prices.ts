import { TokenName } from '../enums/tokenName';
import { getToken, getUniswapToken } from '../constants/tokens';
import { ChainId } from './networks';
import { getTokenPrice, lookUpTokenPrices } from '../external/coinGecko';
import { JsonRpcProvider } from '@ethersproject/providers';
import { CoinGeckoPriceResponse } from '../models/coinGecko';
import { WETH, Fetcher, Route } from '@uniswap/sdk';
import { CommonOracle__factory, OneTokenV1__factory, OneEth__factory, OneLink__factory } from '../generated';
import { getProvider } from './providers';
import { getErc20Contract, getIchiVaultContract, getUniswapV3PoolContract } from '../utils/contracts';
import { VaultName } from '../enums/vaultName';
import { getVault } from '../constants/vaults';
import { getPrice } from '../utils/vault';

export async function getXICHIPrice(
  chainId: ChainId,
  opts?: { tokenPrices?: CoinGeckoPriceResponse; provider?: JsonRpcProvider }
) {
  const provider = opts?.provider ?? (await getProvider(chainId));

  if (provider == null) {
    throw new Error(`Could not resolve provider.`);
  }

  const ichiToken = getToken(TokenName.ICHI, chainId);
  const ichiV2Token = getToken(TokenName.ICHI_V2, chainId);
  const xIchiToken = getToken(TokenName.XICHI, chainId);

  const ichiContract = getErc20Contract(ichiToken.address, provider);
  const xichiContract = getErc20Contract(xIchiToken.address, provider);

  const xichiSupply = await xichiContract.totalSupply();
  const xichiBalance = await ichiContract.balanceOf(xIchiToken.address);

  const xichiRatio = Number(xichiBalance) / Number(xichiSupply);

  const lookupPrice = await getTokenPrice(ichiV2Token.address, opts?.tokenPrices);

  if (lookupPrice == null) {
    console.warn(`Could not lookup xICHI price, could not resolve lookup`);
    return -1;
  }

  const ichiPrice = lookupPrice.usd;
  return Number(ichiPrice) * xichiRatio;
}

export async function getVBTCPrice(chainId: ChainId) {
  const uniVbtc = getUniswapToken(TokenName.VBTC, chainId);

  const pair = await Fetcher.fetchPairData(uniVbtc, WETH[uniVbtc.chainId]);
  const route = new Route([pair], WETH[uniVbtc.chainId]);

  //console.log(route.midPrice.toSignificant(6))
  //console.log(route.midPrice.invert().toSignificant(6))

  let vBtcWEthPrice = route.midPrice.invert().toSignificant(6);

  const wethToken = getToken(TokenName.WETH, chainId);
  let prices = await lookUpTokenPrices([wethToken.address.toLowerCase()]);

  if (prices == null) {
    console.warn(`Could not get VBTC price, weth lookup price is undefined`);
    return -1;
  }

  let wethPriceUsd = prices[wethToken.address.toLowerCase()].usd;
  let vBtcPriceUsd = wethPriceUsd * Number(vBtcWEthPrice);

  return vBtcPriceUsd;
}

export async function getMemberTokenPrice(
  oneTokenName: TokenName,
  memberTokenName: TokenName,
  opts?: { chainId?: ChainId; provider?: JsonRpcProvider; decimals?: number }
) {
  const provider = opts?.provider ?? (await getProvider(opts?.chainId ?? ChainId.Mainnet));
  const chainId = provider!.network.chainId;

  if (provider == null) {
    throw new Error(`Could not resolve provider.`);
  }

  const oneToken = getToken(oneTokenName, chainId);
  const oneTokenContract = OneTokenV1__factory.connect(oneToken.address, provider);

  const memberToken = getToken(memberTokenName, chainId);
  const assets = await oneTokenContract.assets(memberToken.address);
  const oracleAddress = assets.oracle;

  const oracleContract = CommonOracle__factory.connect(oracleAddress, provider);

  const price = await oracleContract.read(
    memberToken.address,
    Number(10 ** (opts?.decimals ?? memberToken.decimals)).toString()
  );

  return Number(price.amountUsd) / 10 ** 18;
}

export async function getStimulusUSDPrice(
  tokenName: TokenName,
  opts?: { chainId?: ChainId; provider?: JsonRpcProvider; decimals?: number }
) {
  const provider = opts?.provider ?? (await getProvider(opts?.chainId ?? ChainId.Mainnet));
  const chainId = provider!.network.chainId;

  const token = getToken(tokenName, chainId);

  if (provider == null) {
    throw new Error(`Could not resolve provider.`);
  }

  const oneTokenContract = OneEth__factory.connect(token.address, provider);
  let price = await oneTokenContract.getStimulusUSD();
  return Number(price) / 10 ** (opts?.decimals ?? token.decimals);
}

export async function getStimulusOraclePrice(
  tokenName: TokenName,
  opts?: { chainId?: ChainId; provider?: JsonRpcProvider; decimals?: number }
) {
  const provider = opts?.provider ?? (await getProvider(opts?.chainId ?? ChainId.Mainnet));
  const chainId = provider!.network.chainId;

  const token = getToken(tokenName, chainId);

  if (provider == null) {
    throw new Error(`Could not resolve provider.`);
  }

  const oneTokenContract = OneLink__factory.connect(token.address, provider);
  let price = await oneTokenContract.getStimulusOracle();
  return Number(price) / 10 ** (opts?.decimals ?? token.decimals);
}

export async function getOneTokenPriceFromVault(
  name: TokenName,
  ichiPrice: number,
  provider: JsonRpcProvider,
  chainId: ChainId
): Promise<number> {
  try {
    let vaultAddress = '';
    let inverted = true;
    let ichiDecimals = 9;
    if (name == TokenName.ONE_BTC) {
      vaultAddress = getToken(TokenName.ONE_BTC, chainId).ichiVault?.address || '';
    }
    if (name == TokenName.ALLY) {
      vaultAddress = getVault(VaultName.ALLY, chainId).address;
      ichiDecimals = 18;
    }
    if (name == TokenName.ONE_UNI) {
      vaultAddress = getToken(TokenName.ONE_UNI, chainId).ichiVault?.address || '';
      inverted = false;
    }

    const vaultContract = getIchiVaultContract(vaultAddress, provider);

    const poolAddress: string = await vaultContract.pool();

    if (vaultAddress == '') return 1;

    const poolContract = getUniswapV3PoolContract(poolAddress, provider);
    const slot0 = await poolContract.slot0();

    const sqrtPrice = slot0[0];
    const price = getPrice(inverted, sqrtPrice, 18, ichiDecimals, 5);
    //console.log(price);
    //console.log(ichi_price / price);

    return ichiPrice / price;
  } catch (e) {
    console.error(`Could not get ${name} price from vault`);
    throw e;
  }
}
