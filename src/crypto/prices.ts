import { TokenName } from '../enums/tokenName';
import { getToken, getUniswapToken } from '../constants/tokens';
import { ChainId } from './networks';
import { getTokenPrice, lookUpTokenPrices } from '../external/coinGecko';
import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { CoinGeckoPrice, CoinGeckoPriceResponse } from '../models/coinGecko';
import { WETH, Fetcher, Route } from '@uniswap/sdk';
import { CommonOracle__factory, OneTokenV1__factory, OneEth__factory, OneLink__factory } from '../generated';
import { getProvider } from './providers';
import { getAlgebraPoolContract, getErc20Contract, getIchiVaultContract, getUniswapV3PoolContract } from '../utils/contracts';
import { VaultName } from '../enums/vaultName';
import { getVault, VAULTS } from '../constants/vaults';
import { getPrice } from '../utils/vault';

export async function getXICHIPrice(
  chainId: ChainId,
  cg_key: string,
  opts?: { tokenPrices?: CoinGeckoPriceResponse; provider?: StaticJsonRpcProvider }
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

  const lookupPrice = await getTokenPrice(chainId, ichiV2Token.address, cg_key, opts?.tokenPrices);

  if (lookupPrice == null) {
    console.warn(`Could not lookup xICHI price, could not resolve lookup`);
    return -1;
  }

  const ichiPrice = lookupPrice.usd;
  return Number(ichiPrice) * xichiRatio;
}

export async function getVBTCPrice(
  chainId: ChainId,
  wethPrices: CoinGeckoPrice
) {
  const uniVbtc = getUniswapToken(TokenName.VBTC, chainId);

  const pair = await Fetcher.fetchPairData(uniVbtc, WETH[uniVbtc.chainId]);
  const route = new Route([pair], WETH[uniVbtc.chainId]);

  let vBtcWEthPrice = route.midPrice.invert().toSignificant(6);

  let wethPriceUsd = Number(wethPrices.usd);
  let vBtcPriceUsd = wethPriceUsd * Number(vBtcWEthPrice);

  return vBtcPriceUsd;
}

export async function getMemberTokenPrice(
  oneTokenName: TokenName,
  memberTokenName: TokenName,
  opts?: { chainId?: ChainId; provider?: StaticJsonRpcProvider; decimals?: number }
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
  opts?: { chainId?: ChainId; provider?: StaticJsonRpcProvider; decimals?: number }
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
  opts?: { chainId?: ChainId; provider?: StaticJsonRpcProvider; decimals?: number }
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
  provider: StaticJsonRpcProvider,
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

    return ichiPrice / price;
  } catch (e) {
    console.error(`Could not get ${name} price from vault`);
    throw e;
  }
}

export async function getPriceFromUSDCVault(
  vault: VaultName,
  provider: StaticJsonRpcProvider,
  chainId: ChainId
): Promise<number> {
  let vaultObj = VAULTS[vault][chainId];
  if (vaultObj){
    try {

      const vaultContract = getIchiVaultContract(vaultObj.address, provider);
      const poolAddress: string = await vaultContract.pool();

      const poolContract = getUniswapV3PoolContract(poolAddress, provider);
      const slot0 = await poolContract.slot0();

      const sqrtPrice = slot0[0];
      let price = 1;
      if (vaultObj.baseTokenName === TokenName.USDC) {
        price = getPrice(
          vaultObj.isInverted, sqrtPrice, vaultObj.baseTokenDecimals, vaultObj.scarceTokenDecimals, 5);
      } else {
        price = getPrice(
          !vaultObj.isInverted, sqrtPrice, vaultObj.scarceTokenDecimals, vaultObj.baseTokenDecimals, 5);
      }

      return price;
    } catch (e) {
      console.error(`Could not get price from ${vaultObj.displayName} vault`);
      throw e;
    }
  } else {
    console.error(`Could not find ${vault} vault`);
    return 0;
  }
}

export async function getPriceFromWethVault(
  vault: VaultName,
  provider: StaticJsonRpcProvider,
  chainId: ChainId,
  wethPrice: number
): Promise<number> {
  let vaultObj = VAULTS[vault][chainId];
  if (vaultObj){
    try {

      const vaultContract = getIchiVaultContract(vaultObj.address, provider);
      const poolAddress: string = await vaultContract.pool();

      const poolContract = getUniswapV3PoolContract(poolAddress, provider);
      const slot0 = await poolContract.slot0();

      const sqrtPrice = slot0[0];
      let price = 1;
      if (vaultObj.baseTokenName === TokenName.WETH) {
        price = getPrice(
          vaultObj.isInverted, sqrtPrice, vaultObj.baseTokenDecimals, vaultObj.scarceTokenDecimals, 15);
      } else {
        price = getPrice(
          !vaultObj.isInverted, sqrtPrice, vaultObj.scarceTokenDecimals, vaultObj.baseTokenDecimals, 15);
      }

      price = price * wethPrice;

      return price;
    } catch (e) {
      console.error(`Could not get price from ${vaultObj.displayName} vault`);
      throw e;
    }
  } else {
    console.error(`Could not find ${vault} vault`);
    return 0;
  }
}

export async function getPriceFromRetroVault(
  vault: VaultName,
  provider: StaticJsonRpcProvider,
  chainId: ChainId,
  retroPrice: number
): Promise<number> {
  let vaultObj = VAULTS[vault][chainId];
  if (vaultObj){
    try {

      const vaultContract = getIchiVaultContract(vaultObj.address, provider);
      const poolAddress: string = await vaultContract.pool();

      const poolContract = getUniswapV3PoolContract(poolAddress, provider);
      const slot0 = await poolContract.slot0();

      const sqrtPrice = slot0[0];
      let price = 1;
      if (vaultObj.baseTokenName === TokenName.RETRO) {
        price = getPrice(
          vaultObj.isInverted, sqrtPrice, vaultObj.baseTokenDecimals, vaultObj.scarceTokenDecimals, 15);
      } else {
        price = getPrice(
          !vaultObj.isInverted, sqrtPrice, vaultObj.scarceTokenDecimals, vaultObj.baseTokenDecimals, 15);
      }
      
      price = price * retroPrice;

      return price;
    } catch (e) {
      console.error(`Could not get price from ${vaultObj.displayName} vault`);
      throw e;
    }
  } else {
    console.error(`Could not find ${vault} vault`);
    return 0;
  }
}

export async function getTokenPriceFromVault(
  vault: VaultName,
  provider: StaticJsonRpcProvider,
  chainId: ChainId,
  tokenName: TokenName,
  otherTokenPrice: number
): Promise<number> {
  let vaultObj = VAULTS[vault][chainId];
  if (vaultObj){
    try {

      const vaultContract = getIchiVaultContract(vaultObj.address, provider);
      const poolAddress: string = await vaultContract.pool();

      const poolContract = getUniswapV3PoolContract(poolAddress, provider);
      const slot0 = await poolContract.slot0();

      const sqrtPrice = slot0[0];
      let price = 1;
      if (vaultObj.scarceTokenName === tokenName) {
        price = getPrice(
          vaultObj.isInverted, sqrtPrice, vaultObj.baseTokenDecimals, vaultObj.scarceTokenDecimals, 15);
      } else {
        price = getPrice(
          !vaultObj.isInverted, sqrtPrice, vaultObj.scarceTokenDecimals, vaultObj.baseTokenDecimals, 15);
      }

      price = price * otherTokenPrice;

      return price;
    } catch (e) {
      console.error(`Could not get price from ${vaultObj.displayName} vault`);
      throw e;
    }
  } else {
    console.error(`Could not find ${vault} vault`);
    return 0;
  }
}

export async function getDollarTokenPriceFromUniV3Vault(
  vaultAddress: string,
  provider: StaticJsonRpcProvider,
  tokenAddress: string,
  otherTokenPrice: number
): Promise<number> {
  try {

    const vaultContract = getIchiVaultContract(vaultAddress, provider);
    const isInverted: boolean = await vaultContract.allowToken1();
    const token0: string = await vaultContract.token0();
    const token0contact = getErc20Contract(token0, provider);
    const decimals0 = await token0contact.decimals();
    const token1: string = await vaultContract.token1();
    const token1contact = getErc20Contract(token1, provider);
    const decimals1 = await token1contact.decimals();
    const baseTokenDecimals = !isInverted ? decimals0 : decimals1;
    const scarceTokenDecimals = isInverted ? decimals0 : decimals1;
    const scarceToken = isInverted ? token0 : token1;

    const poolAddress: string = await vaultContract.pool();

    const poolContract = getUniswapV3PoolContract(poolAddress, provider);
    const slot0 = await poolContract.slot0();

    const sqrtPrice = slot0[0];
    let price = 1;
    if (scarceToken.toLocaleLowerCase() === tokenAddress.toLocaleLowerCase()) {
      price = getPrice(
        isInverted, sqrtPrice, baseTokenDecimals, scarceTokenDecimals, 15);
    } else {
      price = getPrice(
        !isInverted, sqrtPrice, scarceTokenDecimals, baseTokenDecimals, 15);
    }

    price = price * otherTokenPrice;

    return price;
  } catch (e) {
    console.error(`Could not get price from ${vaultAddress} vault`);
    throw e;
  }
}

export async function getDollarTokenPriceFromAlgebraVault(
  vaultAddress: string,
  provider: StaticJsonRpcProvider,
  tokenAddress: string,
  otherTokenPrice: number
): Promise<number> {
  try {

    const vaultContract = getIchiVaultContract(vaultAddress, provider);
    const isInverted: boolean = await vaultContract.allowToken1();
    const token0: string = await vaultContract.token0();
    const token0contact = getErc20Contract(token0, provider);
    const decimals0 = await token0contact.decimals();
    const token1: string = await vaultContract.token1();
    const token1contact = getErc20Contract(token1, provider);
    const decimals1 = await token1contact.decimals();
    const baseTokenDecimals = !isInverted ? decimals0 : decimals1;
    const scarceTokenDecimals = isInverted ? decimals0 : decimals1;
    const scarceToken = isInverted ? token0 : token1;

    const poolAddress: string = await vaultContract.pool();

    const poolContract = getAlgebraPoolContract(poolAddress, provider);
    const globalState = await poolContract.globalState();

    const sqrtPrice = globalState.price;
    let price = 1;
    if (scarceToken.toLocaleLowerCase() === tokenAddress.toLocaleLowerCase()) {
      price = getPrice(
        isInverted, sqrtPrice, baseTokenDecimals, scarceTokenDecimals, 15);
    } else {
      price = getPrice(
        !isInverted, sqrtPrice, scarceTokenDecimals, baseTokenDecimals, 15);
    }

    price = price * otherTokenPrice;

    return price;
  } catch (e) {
    console.error(`Could not get price from ${vaultAddress} vault`);
    throw e;
  }
}

export async function getPriceFromAlgebraVault(
  vault: VaultName,
  provider: StaticJsonRpcProvider,
  chainId: ChainId,
  tokenName: TokenName,
  otherTokenPrice: number
): Promise<number> {
  let vaultObj = VAULTS[vault][chainId];
  if (vaultObj){
    try {

      const vaultContract = getIchiVaultContract(vaultObj.address, provider);
      const poolAddress: string = await vaultContract.pool();

      const poolContract = getAlgebraPoolContract(poolAddress, provider);
      const globalState = await poolContract.globalState();

      const sqrtPrice = globalState.price;
      let price = 1;
      if (vaultObj.scarceTokenName === tokenName) {
        price = getPrice(
          vaultObj.isInverted, sqrtPrice, vaultObj.baseTokenDecimals, vaultObj.scarceTokenDecimals, 15);
      } else {
        price = getPrice(
          !vaultObj.isInverted, sqrtPrice, vaultObj.scarceTokenDecimals, vaultObj.baseTokenDecimals, 15);
      }

      price = price * otherTokenPrice;

      return price;
    } catch (e) {
      console.error(`Could not get price from ${vaultObj.displayName} vault`);
      throw e;
    }
  } else {
    console.error(`Could not find ${vault} vault on chain ${chainId}`);
    return 0;
  }
}
