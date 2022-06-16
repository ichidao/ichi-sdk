import { TokenName } from '../models/tokenNames';
import { PoolName } from '../models/poolNames';
import { ChainId } from '../crypto/networks';
import { Pool } from '../models/pool';
import { PartialRecord } from '../types/common';

type PoolMapping = {
  [vaultName in PoolName]: PartialRecord<ChainId, Pool>;
};

export const POOLS: PoolMapping = {
  [PoolName.ONEFUSE_USDC]: {
    [ChainId.Mainnet]: {
      poolName: PoolName.ONEFUSE_USDC,
      displayName: 'oneFUSE-USDC',
      address: '0x61f2ea3ddabcb9f0b7bd73adba4ec24479247a86',
      oneTokenName: TokenName.ONE_FUSE,
      oneToken: 'token1',
      enableNotifications: false
    }
  },
  [PoolName.ONEUNI_USDC]: {
    [ChainId.Mainnet]: {
      poolName: PoolName.ONEUNI_USDC,
      displayName: 'oneUNI-USDC',
      address: '0x613944734e29e73d084673d1532bff8683ed9a5b',
      oneTokenName: TokenName.ONE_UNI,
      oneToken: 'token0',
      enableNotifications: false
    }
  },
  [PoolName.ONEWING_USDC]: {
    [ChainId.Mainnet]: {
      poolName: PoolName.ONEWING_USDC,
      displayName: 'oneWING-USDC',
      address: '0xD63005e1d0bD8029B656dd43AD8eB66f27B15E07',
      oneTokenName: TokenName.ONE_WING,
      oneToken: 'token0',
      enableNotifications: false
    }
  },
  [PoolName.ONEFOX_USDC]: {
    [ChainId.Mainnet]: {
      poolName: PoolName.ONEFOX_USDC,
      displayName: 'oneFOX-USDC',
      address: '0x4c008261215087bd22d6a983399ae659d816bb50',
      oneTokenName: TokenName.ONE_FOX,
      oneToken: 'token0',
      enableNotifications: false
    }
  },
  [PoolName.ONEPERL_USDC]: {
    [ChainId.Mainnet]: {
      poolName: PoolName.ONEPERL_USDC,
      displayName: 'onePERL-USDC',
      address: '0x1F52846051b4dB60ba70bA76C188e6a67699fdB0',
      oneTokenName: TokenName.ONE_PERL,
      oneToken: 'token1',
      enableNotifications: false
    }
  },
  /*onefil_usdc: { 
    displayName: 'oneFIL-USDC',
    address: '0x6486548df147764da6eb09b822915EfBF3343522',
    oneTokenName: 'onefil',
    oneToken: 'token0',
    enableNotifications: false,
  },*/
  [PoolName.ONEMPH_USDC]: {
    [ChainId.Mainnet]: {
      poolName: PoolName.ONEMPH_USDC,
      displayName: 'oneMPH-USDC',
      address: '0x42F1B1a352B4e700172F316eC5f721765a71EfF4',
      oneTokenName: TokenName.ONE_MPH,
      oneToken: 'token1',
      enableNotifications: false
    }
  },
  [PoolName.ONE1INCH_USDC]: {
    [ChainId.Mainnet]: {
      poolName: PoolName.ONE1INCH_USDC,
      displayName: 'one1INCH-USDC',
      address: '0x7233A14685201F548d8a7AC5f5Ca3DEdb7bb6d42',
      oneTokenName: TokenName.ONE_1INCH,
      oneToken: 'token0',
      enableNotifications: false
    }
  },
  // onefil_oneuni: {
  //   displayName: 'oneFIL-oneUNI',
  //   address: '0x9bDE1bC608fdAfA59176C6fbC0779efb8437246F',
  //   oneTokenName: 'onefil',
  //   otherToken: 'oneuni',
  //   oneToken: 'token0',
  //   enableNotifications: false,
  // },
  [PoolName.ONEOJA_USDC]: {
    [ChainId.Mainnet]: {
      poolName: PoolName.ONEOJA_USDC,
      displayName: 'oneOJA-USDC',
      address: '0x6195fe3c13746862deac6139c4e8be5e80b96c6c',
      oneTokenName: TokenName.ONE_OJA,
      oneToken: 'token1',
      enableNotifications: false
    }
  }
  // onebtc_usdc: {
  //   displayName: 'oneBTC-USDC',
  //   address: '0x8324be628543be4a8ee4448c1a269cad3da487f6',
  //   oneTokenName: 'onebtc',
  //   oneToken: 'token1',
  //   enableNotifications: false,
  // },

  // Polygon
  // onebtc_ichi: {
  //   displayName: 'oneBTC-USDC',
  //   address: '0x8324be628543be4a8ee4448c1a269cad3da487f6',
  //   oneTokenName: 'onebtc',
  //   oneToken: 'token1',
  //   enableNotifications: false,
  // },
};

export function getPool(
  poolName: PoolName,
  opts: { chainId: ChainId; throwIfNotFound?: boolean } = { chainId: ChainId.Mainnet, throwIfNotFound: true }
): Pool {
  const pool = POOLS[poolName][opts.chainId] as Pool;
  if (!pool) {
    if (opts.throwIfNotFound) {
      throw new Error(`Could not find ${poolName} on ${opts.chainId}`);
    } else {
      console.warn(`Could not find ${poolName} on ${opts.chainId}`);
    }
  }
  return pool;
}

export function getPools(chainId: ChainId): Pool[] {
  const names = Object.keys(POOLS);
  const vaults: Pool[] = [];
  for (let name of names) {
    if (chainId in POOLS[name]) {
      vaults.push(POOLS[name][chainId]);
    }
  }
  return vaults;
}
