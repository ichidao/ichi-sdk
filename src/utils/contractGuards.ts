import { Contract } from 'ethers';
import {
  Erc20,
  FarmingV2,
  GenericFarmingV2,
  Ichi,
  IchiVault,
  OneEth,
  OneLink,
  OneTokenV1,
  StablecoinV2
} from '../generated';
import { BalancerPool } from '../generated/BalancerPool';
import { DodoLiquidityPool } from '../generated/DodoLiquidityPool';
import { IchiBnt } from '../generated/IchiBnt';
import { BancorV3Pool } from '../models/bancor';
import { GenericPool } from '../generated/GenericPool';
import { Contracts } from './contracts';
import { FarmingV1 } from '../generated/FarmingV1';

// GenericPool
// PAIR_ABI maps to GenericPool
export function isGenericPool(contract: Contracts): contract is GenericPool {
  return contract != null;
}
export function asGenericPool(contract: Contracts | Contract): GenericPool {
  return contract as GenericPool;
}

// BancorV3Pool
export function isBancorV3Pool(contract: Contracts): contract is BancorV3Pool {
  return contract != null;
}
export function asBancorV3Pool(contract: Contracts | Contract): BancorV3Pool {
  return contract as BancorV3Pool;
}

// GenericPool
export function isDodoLiquidityPool(contract: Contracts): contract is DodoLiquidityPool {
  return contract != null;
}
export function asDodoLiquidityPool(contract: Contracts | Contract): DodoLiquidityPool {
  return contract as DodoLiquidityPool;
}

// Ichi Vault
export function isIchiVault(contract: Contracts): contract is IchiVault {
  return contract != null;
}
export function asIchiVault(contract: Contracts | Contract): IchiVault {
  return contract as IchiVault;
}

// Balancer Pool
export function isBalancerPool(contract: Contracts): contract is BalancerPool {
  return contract != null;
}
export function asBalancerPool(contract: Contracts | Contract): BalancerPool {
  return contract as BalancerPool;
}
// Erc20
export function isErc20(contract: Contracts): contract is Erc20 {
  return contract != null;
}
export function asErc20(contract: Contracts | Contract): Erc20 {
  return contract as Erc20;
}

// Ichi
export function isIchi(contract: Contracts): contract is Ichi {
  return contract != null;
}
export function asIchi(contract: Contracts | Contract): Ichi {
  return contract as Ichi;
}

// IchiBnt
export function isIchiBnt(contract: Contracts): contract is IchiBnt {
  return contract != null;
}
export function asIchiBnt(contract: Contracts | Contract): IchiBnt {
  return contract as IchiBnt;
}

// OneEth
export function isOneEth(contract: Contracts): contract is OneEth {
  return contract != null;
}
export function asOneEth(contract: Contracts | Contract): OneEth {
  return contract as OneEth;
}

// OneLink
export function isOneLink(contract: Contracts): contract is OneLink {
  return contract != null;
}
export function asOneLink(contract: Contracts | Contract): OneLink {
  return contract as OneLink;
}

// OneTokenV1
export function isOneTokenV1(contract: Contracts): contract is OneTokenV1 {
  return contract != null;
}
export function asOneTokenV1(contract: Contracts | Contract): OneTokenV1 {
  return contract as OneTokenV1;
}

// StablecoinV2
export function isStablecoinV2(contract: Contracts): contract is StablecoinV2 {
  return contract != null;
}
export function asStablecoinV2(contract: Contracts | Contract): StablecoinV2 {
  return contract as StablecoinV2;
}

// FarmingV1
export function isFarmingV1(contract: Contracts): contract is FarmingV1 {
  return contract != null;
}
export function asFarmingV1(contract: Contracts | Contract): FarmingV1 {
  return contract as FarmingV1;
}

// Farming
export function isFarmingV2(contract: Contracts): contract is FarmingV2 {
  return contract != null;
}
export function asFarmingV2(contract: Contracts | Contract): FarmingV2 {
  return contract as FarmingV2;
}
export function asGenericFarmingV2(contract: Contracts | Contract): GenericFarmingV2 {
  return contract as GenericFarmingV2;
}
