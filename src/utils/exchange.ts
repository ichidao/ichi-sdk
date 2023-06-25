import { PoolNumberValues } from '../enums/poolNumber';
import { Pools } from '../constants/pools';
import { ChainId } from '../crypto/networks';

export function getExchangeName(poolId: PoolNumberValues, chainId: ChainId) {
  if (Pools.DEPOSIT_POOLS[chainId].includes(poolId)) return '';
  if (Pools.BANCOR_POOLS_V2[chainId].includes(poolId)) return 'bancor';
  if (Pools.BANCOR_POOLS_V3[chainId].includes(poolId)) return 'bancor v3';
  if (Pools.DODO_POOLS[chainId].includes(poolId)) return 'dodo';
  if (Pools.RARI_ASSETS[chainId].includes(poolId)) return 'rari';
  if (Pools.ONE_INCH_POOLS[chainId].includes(poolId)) return '1inch';
  if (Pools.UNI_POOLS[chainId].includes(poolId)) return 'uni v2';
  if (Pools.ACTIVE_VAULTS[chainId].includes(poolId)) return 'uni v3';
  if (Pools.BALANCER_POOLS[chainId].includes(poolId))
    return 'balancer v1';

  if ([ChainId.Mumbai].includes(chainId)) {
    return 'test exchange';
  }
  return 'sushi';
}
