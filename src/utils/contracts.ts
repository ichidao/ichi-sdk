import { JsonRpcProvider } from '@ethersproject/providers';
import { Optional } from '../types/optional';
import { getToken } from '../constants/tokens';
import { ChainId } from '../crypto/networks';
import {
  Ally,
  Ally__factory,
  BmiStaking,
  BmiStaking__factory,
  CommonOracle,
  CommonOracle__factory,
  IchiOracleAggregator,
  Erc20,
  Erc20__factory,
  FarmingV2,
  FarmingV2__factory,
  GenericFarmingV2,
  GenericFarmingV2__factory,
  Ichi,
  IchiV2,
  IchiV2__factory,
  IchiVault,
  IchiVault__factory,
  Ichi__factory,
  OneEth,
  OneInchStaking,
  OneInchStaking__factory,
  OneLink,
  OneTokenV1,
  OneTokenV1__factory,
  StablecoinV2,
  UniswapV3Factory,
  UniswapV3Factory__factory,
  UniswapV3Pool,
  UniswapV3Pool__factory,
  UniswapV3Positions,
  UniswapV3Positions__factory,
  IchiOracleAggregator__factory,
  OneTokenFactory,
  OneTokenFactory__factory,
  XICHI,
  XICHI__factory,
} from '../generated';
import { TokenName } from '../enums/tokenName';
import { AddressName } from '../enums/addressName';
import { IchiBnt } from '../generated/IchiBnt';
import { IchiBnt__factory } from '../generated/factories/IchiBnt__factory';
import { Token } from '../models/token';
import { BancorV3Pool } from '../models/bancor';
import { GenericPool } from '../generated/GenericPool';
import { DodoLiquidityPool } from '../generated/DodoLiquidityPool';
import { BalancerPool } from '../generated/BalancerPool';
import { BalancerPool__factory } from '../generated/factories/BalancerPool__factory';
import { GenericPool__factory } from '../generated/factories/GenericPool__factory';
import { BalancerSmartLp } from '../generated/BalancerSmartLp';
import { BalancerSmartLp__factory } from '../generated/factories/BalancerSmartLp__factory';
import { FarmingV1 } from '../generated/FarmingV1';
import { FarmingV1__factory } from '../generated/factories/FarmingV1__factory';
import { DodoLiquidityPool__factory } from '../generated/factories/DodoLiquidityPool__factory';
import { IchiBntV3 } from '../generated/IchiBntV3';
import { IchiBntV3__factory } from '../generated/factories/IchiBntV3__factory';
import { RariPool__factory } from '../generated/factories/RariPool__factory';
import { RariPool } from '../generated/RariPool';
import { RariPoolLens__factory } from '../generated/factories/RariPoolLens__factory';
import { RariPoolLens } from '../generated/RariPoolLens';
import { RariPoolLensSecondary } from '../generated/RariPoolLensSecondary';
import { RariPoolLensSecondary__factory } from '../generated/factories/RariPoolLensSecondary__factory';
import { DodoFarm } from '../generated/DodoFarm';
import { DodoFarm__factory } from '../generated/factories/DodoFarm__factory';

export type Contracts =
  | Ichi
  | IchiV2
  | Erc20
  | IchiBnt
  | IchiBntV3
  | OneEth
  | OneLink
  | OneTokenV1
  | BancorV3Pool
  | GenericPool
  | DodoLiquidityPool
  | IchiVault
  | BalancerPool
  | BalancerSmartLp
  | StablecoinV2
  | FarmingV1
  | FarmingV2
  | GenericFarmingV2
  | DodoLiquidityPool;

export type FarmingContracts = FarmingV1 | FarmingV2 | GenericFarmingV2;

export function getBalancerPoolContract(address: string, provider: JsonRpcProvider): BalancerPool {
  try {
    return BalancerPool__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create BalancerPool contract with address: ${address}`);
    throw e;
  }
}
export function getBalancerSmartLpContract(address: string, provider: JsonRpcProvider): BalancerSmartLp {
  try {
    return BalancerSmartLp__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create BalancerSmartLp contract with address: ${address}`);
    throw e;
  }
}

export function getIchiVaultContract(address: string, provider: JsonRpcProvider): IchiVault {
  try {
    return IchiVault__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create IchiVault contract with address: ${address}`);
    throw e;
  }
}

export function getIchiBntContract(address: string, provider: JsonRpcProvider): IchiBnt {
  try {
    return IchiBnt__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create IchiBnt contract with address: ${address}`);
    throw e;
  }
}
export function getIchiContract(address: string, provider: JsonRpcProvider): Ichi {
  try {
    return Ichi__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create Ichi contract with address: ${address}`);
    throw e;
  }
}
export function getAllyContract(address: string, provider: JsonRpcProvider): Ally {
  try {
    return Ally__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create Ally contract with address: ${address}`);
    throw e;
  }
}

export function getGenericPoolContract(address: string, provider: JsonRpcProvider): GenericPool {
  try {
    return GenericPool__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create GenericPool contract with address: ${address}`);
    throw e;
  }
}

export function getErc20Contract(address: string, provider: JsonRpcProvider): Erc20 {
  try {
    return Erc20__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create Erc20 contract with address: ${address}`);
    throw e;
  }
}

export function getOneTokenV1Contract(address: string, provider: JsonRpcProvider): OneTokenV1 {
  try {
    return OneTokenV1__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create BalancerPool contract with address: ${address}`);
    throw e;
  }
}

// Farming
export function getFarmingV1Contract(address: string, provider: JsonRpcProvider): FarmingV1 {
  try {
    return FarmingV1__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create FarmingV1 contract with address: ${address}`);
    throw e;
  }
}
export function getFarmingV2Contract(address: string, provider: JsonRpcProvider): FarmingV2 {
  try {
    return FarmingV2__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create FarmingV2 contract with address: ${address}`);
    throw e;
  }
}
export function getGenericFarmingV2Contract(address: string, provider: JsonRpcProvider): GenericFarmingV2 {
  try {
    return GenericFarmingV2__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create GenericFarmingV2 contract with address: ${address}`);
    throw e;
  }
}

// Uniswap Positions
export function getUniswapV3PositionsContract(address: string, provider: JsonRpcProvider): UniswapV3Positions {
  try {
    return UniswapV3Positions__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create UniswapV3Positions contract with address: ${address}`);
    throw e;
  }
}
export function getUniswapV3PoolContract(address: string, provider: JsonRpcProvider): UniswapV3Pool {
  try {
    return UniswapV3Pool__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create UniswapV3Pool contract with address: ${address}`);
    throw e;
  }
}
export function getUniswapV3FactoryContract(address: string, provider: JsonRpcProvider): UniswapV3Factory {
  try {
    return UniswapV3Factory__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create UniswapV3Factory contract with address: ${address}`);
    throw e;
  }
}
export function getIchiBntV3Contract(address: string, provider: JsonRpcProvider): IchiBntV3 {
  try {
    return IchiBntV3__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create IchiBntV3 contract with address: ${address}`);
    throw e;
  }
}

// DODO
// DLP
export function getDodoLiquidityPoolContract(address: string, provider: JsonRpcProvider): DodoLiquidityPool {
  try {
    return DodoLiquidityPool__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create DodoLiquidityPool contract with address: ${address}`);
    throw e;
  }
}
export function getDodoFarmContract(address: string, provider: JsonRpcProvider): DodoFarm {
  try {
    return DodoFarm__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create DodoFarm contract with address: ${address}`);
    throw e;
  }
}

// RARI
export function getRariPoolContract(address: string, provider: JsonRpcProvider): RariPool {
  try {
    return RariPool__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create RariPool contract with address: ${address}`);
    throw e;
  }
}
export function getRariPoolLensContract(address: string, provider: JsonRpcProvider): RariPoolLens {
  try {
    return RariPoolLens__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create RariPoolLens contract with address: ${address}`);
    throw e;
  }
}
export function getRariPoolLensSecondaryContract(address: string, provider: JsonRpcProvider): RariPoolLensSecondary {
  try {
    return RariPoolLensSecondary__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create RariPoolLensSecondary contract with address: ${address}`);
    throw e;
  }
}

export function getBmiStakingContract(address: string, provider: JsonRpcProvider): BmiStaking {
  try {
    return BmiStaking__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create BmiStaking contract with address: ${address}`);
    throw e;
  }
}

export function get1InchStakingContract(address: string, provider: JsonRpcProvider): OneInchStaking {
  try {
    return OneInchStaking__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create OneInchStaking contract with address: ${address}`);
    throw e;
  }
}

export function getOneTokenFactoryContract(address: string, provider: JsonRpcProvider): OneTokenFactory {
  try {
    return OneTokenFactory__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create One Token Factory contract with address: ${address}`);
    throw e;
  }
}

export function getXICHIContract(address: string, provider: JsonRpcProvider): XICHI {
  try {
    return XICHI__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create XICHI Factory contract with address: ${address}`);
    throw e;
  }
}

export function getIchiOracleAggregatorContract(address: string, provider: JsonRpcProvider): IchiOracleAggregator {
  try {
    return IchiOracleAggregator__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create ICHI Oracle Aggregator contract with address: ${address}`);
    throw e;
  }
}

export function getCommonOracleContract(address: string, provider: JsonRpcProvider): CommonOracle {
  try {
    return CommonOracle__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create CommonOracle contract with address: ${address}`);
    throw e;
  }
}

export function getContract(
  tokenName: TokenName,
  provider: JsonRpcProvider,
  opts: { forceErc20?: boolean } = { forceErc20: false }
): Optional<Contracts> {
  const chainId: ChainId = provider.network.chainId;

  if (opts?.forceErc20 === true) {
    const token = getToken(tokenName, chainId);
    return getErc20Contract(token.address, provider);
  }

  let token: Token;
  switch (tokenName) {
    case TokenName.OJA:
      token = getToken(TokenName.OJA, chainId);
      return getErc20Contract(token.address, provider);
    case TokenName.USDC:
      token = getToken(TokenName.USDC, chainId);
      return getErc20Contract(token.address, provider);
    case TokenName.WBTC:
      token = getToken(TokenName.WBTC, chainId);
      return getErc20Contract(token.address, provider);
    case TokenName.ICHI:
      token = getToken(TokenName.ICHI, chainId);
      return Ichi__factory.connect(token.address, provider);
    case TokenName.ICHI_V2:
      token = getToken(TokenName.ICHI_V2, chainId);
      return IchiV2__factory.connect(token.address, provider);
    case TokenName.XICHI:
      token = getToken(TokenName.XICHI, chainId);
      return getErc20Contract(token.address, provider);
    case TokenName.ONE_OJA:
      token = getToken(TokenName.ONE_OJA, chainId);
      return getOneTokenV1Contract(token.address, provider);
    default:
      throw new Error(`Could not resolve contract via token name '${tokenName}' on network: ${chainId}`);
  }
}

export function getContractByAddress(
  address: string,
  provider: JsonRpcProvider,
  opts: { forceErc20?: boolean } = { forceErc20: false }
): Optional<Contracts> {
  if (opts?.forceErc20 === true) {
    return getErc20Contract(address, provider);
  }

  switch (address) {
    case AddressName.ICHI_BNT:
      return getIchiBntContract(address, provider);
    default:
      throw new Error(`Could not resolve contract via address '${address}' on network: ${provider.network.chainId}`);
  }
}
