import { StaticJsonRpcProvider } from '@ethersproject/providers';
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
  XIchi,
  XIchi__factory,
  Rebalancing_regular_v1__factory,
  Rebalancing_regular_v1,
  Rebalancing_index_v2,
  Rebalancing_index_v2__factory,
  Rebalancing_index_v3__factory,
  Rebalancing_index_v3,
  KeeperRegistry,
  KeeperRegistry__factory,
  Rebalancing_stable_500_v1__factory,
  Rebalancing_stable_500_v1,
  AlgebraPool,
  AlgebraPool__factory,
  Rebalancing_flip_v1,
  Rebalancing_flip_v1__factory,
  AlgebraIntegralPool,
  AlgebraIntegralPool__factory,
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
import { Follow_price_v1 } from '../generated/Follow_price_v1';
import { Follow_price_v1__factory } from '../generated/factories/Follow_price_v1__factory';

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

export function getBalancerPoolContract(address: string, provider: StaticJsonRpcProvider): BalancerPool {
  try {
    return BalancerPool__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create BalancerPool contract with address: ${address}`);
    throw e;
  }
}
export function getBalancerSmartLpContract(address: string, provider: StaticJsonRpcProvider): BalancerSmartLp {
  try {
    return BalancerSmartLp__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create BalancerSmartLp contract with address: ${address}`);
    throw e;
  }
}

export function getIchiVaultContract(address: string, provider: StaticJsonRpcProvider): IchiVault {
  try {
    return IchiVault__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create IchiVault contract with address: ${address}`);
    throw e;
  }
}

export function getIchiBntContract(address: string, provider: StaticJsonRpcProvider): IchiBnt {
  try {
    return IchiBnt__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create IchiBnt contract with address: ${address}`);
    throw e;
  }
}
export function getIchiContract(address: string, provider: StaticJsonRpcProvider): Ichi {
  try {
    return Ichi__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create Ichi contract with address: ${address}`);
    throw e;
  }
}
export function getXIchiContract(address: string, provider: StaticJsonRpcProvider): XIchi {
  try {
    return XIchi__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create XICHI contract with address: ${address}`);
    throw e;
  }
}
export function getAllyContract(address: string, provider: StaticJsonRpcProvider): Ally {
  try {
    return Ally__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create Ally contract with address: ${address}`);
    throw e;
  }
}

export function getGenericPoolContract(address: string, provider: StaticJsonRpcProvider): GenericPool {
  try {
    return GenericPool__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create GenericPool contract with address: ${address}`);
    throw e;
  }
}

export function getErc20Contract(address: string, provider: StaticJsonRpcProvider): Erc20 {
  try {
    return Erc20__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create Erc20 contract with address: ${address}`);
    throw e;
  }
}

export function getOneTokenV1Contract(address: string, provider: StaticJsonRpcProvider): OneTokenV1 {
  try {
    return OneTokenV1__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create BalancerPool contract with address: ${address}`);
    throw e;
  }
}

// Farming
export function getFarmingV1Contract(address: string, provider: StaticJsonRpcProvider): FarmingV1 {
  try {
    return FarmingV1__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create FarmingV1 contract with address: ${address}`);
    throw e;
  }
}
export function getFarmingV2Contract(address: string, provider: StaticJsonRpcProvider): FarmingV2 {
  try {
    return FarmingV2__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create FarmingV2 contract with address: ${address}`);
    throw e;
  }
}
export function getGenericFarmingV2Contract(address: string, provider: StaticJsonRpcProvider): GenericFarmingV2 {
  try {
    return GenericFarmingV2__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create GenericFarmingV2 contract with address: ${address}`);
    throw e;
  }
}

// Uniswap Positions
export function getUniswapV3PositionsContract(address: string, provider: StaticJsonRpcProvider): UniswapV3Positions {
  try {
    return UniswapV3Positions__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create UniswapV3Positions contract with address: ${address}`);
    throw e;
  }
}
export function getUniswapV3PoolContract(address: string, provider: StaticJsonRpcProvider): UniswapV3Pool {
  try {
    return UniswapV3Pool__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create UniswapV3Pool contract with address: ${address}`);
    throw e;
  }
}
export function getAlgebraPoolContract(address: string, provider: StaticJsonRpcProvider): AlgebraPool {
  try {
    return AlgebraPool__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create AlgebraPool contract with address: ${address}`);
    throw e;
  }
}
export function getAlgebraIntegralPoolContract(address: string, provider: StaticJsonRpcProvider): AlgebraIntegralPool {
  try {
    return AlgebraIntegralPool__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create AlgebraIntegralPool contract with address: ${address}`);
    throw e;
  }
}
export function getUniswapV3FactoryContract(address: string, provider: StaticJsonRpcProvider): UniswapV3Factory {
  try {
    return UniswapV3Factory__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create UniswapV3Factory contract with address: ${address}`);
    throw e;
  }
}
export function getIchiBntV3Contract(address: string, provider: StaticJsonRpcProvider): IchiBntV3 {
  try {
    return IchiBntV3__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create IchiBntV3 contract with address: ${address}`);
    throw e;
  }
}

// DODO
// DLP
export function getDodoLiquidityPoolContract(address: string, provider: StaticJsonRpcProvider): DodoLiquidityPool {
  try {
    return DodoLiquidityPool__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create DodoLiquidityPool contract with address: ${address}`);
    throw e;
  }
}
export function getDodoFarmContract(address: string, provider: StaticJsonRpcProvider): DodoFarm {
  try {
    return DodoFarm__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create DodoFarm contract with address: ${address}`);
    throw e;
  }
}

// RARI
export function getRariPoolContract(address: string, provider: StaticJsonRpcProvider): RariPool {
  try {
    return RariPool__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create RariPool contract with address: ${address}`);
    throw e;
  }
}
export function getRariPoolLensContract(address: string, provider: StaticJsonRpcProvider): RariPoolLens {
  try {
    return RariPoolLens__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create RariPoolLens contract with address: ${address}`);
    throw e;
  }
}
export function getRariPoolLensSecondaryContract(address: string, provider: StaticJsonRpcProvider): RariPoolLensSecondary {
  try {
    return RariPoolLensSecondary__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create RariPoolLensSecondary contract with address: ${address}`);
    throw e;
  }
}

export function getBmiStakingContract(address: string, provider: StaticJsonRpcProvider): BmiStaking {
  try {
    return BmiStaking__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create BmiStaking contract with address: ${address}`);
    throw e;
  }
}

export function get1InchStakingContract(address: string, provider: StaticJsonRpcProvider): OneInchStaking {
  try {
    return OneInchStaking__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create OneInchStaking contract with address: ${address}`);
    throw e;
  }
}

export function getOneTokenFactoryContract(address: string, provider: StaticJsonRpcProvider): OneTokenFactory {
  try {
    return OneTokenFactory__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create One Token Factory contract with address: ${address}`);
    throw e;
  }
}

export function getIchiOracleAggregatorContract(address: string, provider: StaticJsonRpcProvider): IchiOracleAggregator {
  try {
    return IchiOracleAggregator__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create ICHI Oracle Aggregator contract with address: ${address}`);
    throw e;
  }
}

export function getCommonOracleContract(address: string, provider: StaticJsonRpcProvider): CommonOracle {
  try {
    return CommonOracle__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create CommonOracle contract with address: ${address}`);
    throw e;
  }
}

export function getRebalancingStrategyRegularV1Contract(address: string, provider: StaticJsonRpcProvider): Rebalancing_regular_v1 {
  try {
    return Rebalancing_regular_v1__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create Rebalancing_regular_v1 contract with address: ${address}`);
    throw e;
  }
}

export function getRebalancingStrategyStable500V1Contract(address: string, provider: StaticJsonRpcProvider): Rebalancing_stable_500_v1 {
  try {
    return Rebalancing_stable_500_v1__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create Rebalancing_stable_500_v1 contract with address: ${address}`);
    throw e;
  }
}

export function getRebalancingStrategyIndexV2Contract(address: string, provider: StaticJsonRpcProvider): Rebalancing_index_v2 {
  try {
    return Rebalancing_index_v2__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create Rebalancing_index_v2 contract with address: ${address}`);
    throw e;
  }
}

export function getRebalancingStrategyIndexV3Contract(address: string, provider: StaticJsonRpcProvider): Rebalancing_index_v3 {
  try {
    return Rebalancing_index_v3__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create Rebalancing_index_v3 contract with address: ${address}`);
    throw e;
  }
}

export function getRebalancingStrategyFollowPriceV1Contract(address: string, provider: StaticJsonRpcProvider): Follow_price_v1 {
  try {
    return Follow_price_v1__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create Follow_price_v1 contract with address: ${address}`);
    throw e;
  }
}

export function getRebalancingStrategyFlipV1Contract(address: string, provider: StaticJsonRpcProvider): Rebalancing_flip_v1 {
  try {
    return Rebalancing_flip_v1__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create Rebalancing_flip_v1 contract with address: ${address}`);
    throw e;
  }
}

export function getKeeperRegistryContract(address: string, provider: StaticJsonRpcProvider): KeeperRegistry {
  try {
    return KeeperRegistry__factory.connect(address, provider);
  } catch (e) {
    console.error(`Couldn't create KeeperRegistry contract with address: ${address}`);
    throw e;
  }
}

export function getContract(
  tokenName: TokenName,
  provider: StaticJsonRpcProvider,
  opts: { forceErc20?: boolean } = { forceErc20: false }
): Optional<Contracts> {
  const chainId: ChainId = provider.network.chainId;
  if (opts?.forceErc20 === true) {
    const token = getToken(tokenName, chainId);
    return getErc20Contract(token.address, provider);
  }

  throw new Error(`Could not resolve contract via token name '${tokenName}' on network: ${chainId}`);
}

export function getContractByAddress(
  address: string,
  provider: StaticJsonRpcProvider,
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
