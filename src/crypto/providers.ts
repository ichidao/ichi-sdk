import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { EnvUtils } from '../utils/env';
import { ChainId, SUPPORTED_NETWORKS } from './networks';
import { Optional } from '../types/optional';
import dns from 'dns';
import { ProviderCache } from '../models/providerCache';

let RPC_CACHE_UPDATE_INTERVAL = 30 * 1000; // 30s

export const setRpcCacheUpdateInterval = (ms: number) => {
  RPC_CACHE_UPDATE_INTERVAL = ms;
};

export const providerCacheReference: Record<ChainId, ProviderCache> = {
  [ChainId.Mainnet]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Ropsten]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Rinkeby]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Goerli]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Arthera]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Base]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Berachain]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Berachain_bArtio]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Blast]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Bsc]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Celo]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Eon]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Evmos]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Fantom]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Flare]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Fuse]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Haven1]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Hedera]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Hemi]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Ink]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Ink_Sepolia]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Kava]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Linea]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Manta_Pacific]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Mantle]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Mode]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.opBNB]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Polygon]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Real]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Rootstock]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Scroll]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Skale_Europa]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Taiko]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Sonic]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Zircuit]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.zkEVM]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.zkSync]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Arbitrum]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Avalanche]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Mumbai]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  }
};

export let providerCache = {
  ...providerCacheReference
};

export const resetProviderCache = () => {
  providerCache = {
    ...providerCacheReference
  };
};

const setCachedProvider = (chainId: ChainId, provider?: StaticJsonRpcProvider) => {
  providerCache[chainId] = {
    provider,
    lastUdated: Date.now(),
    cacheHit: providerCache[chainId].cacheHit,
    cacheMiss: providerCache[chainId].cacheMiss
  };
};

const getCachedProvider = (chainId: ChainId): Optional<StaticJsonRpcProvider> => {
  if (providerCache[chainId]?.provider) {
    providerCache[chainId].cacheHit++;
  } else {
    providerCache[chainId].cacheMiss++;
  }
  return providerCache[chainId]?.provider;
};

const resolve = async (hostname: string, rrtype: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    // (err, records)
    dns.resolve(hostname, rrtype, (err) => {
      if (err) {
        console.warn(`Could not resolve: ${hostname}`, err);
        reject(err);
        return;
      }
      resolve(true);
    });
  });
};

export const connectToProvider = async (
  chainId: ChainId,
  rpcHosts?: string[],
  providerId?: string
): Promise<Optional<StaticJsonRpcProvider>> => {
  if (rpcHosts) {
    for (let i = 0; i < rpcHosts.length; i++) {
      const url = rpcHosts[i];
      console.debug(`Attempting to connect to rpc host from env vars: ${url}`);
      try {
        // First attempt to resolve the url, if we don't do this attempting to StaticJsonRpcProvider to an unreachable host will just hang
        const { hostname } = new URL(url);
        try {
          console.debug(`Resolve hostname ${hostname}...`);
          await resolve(hostname, 'A');
          console.debug(`\tDone!`);

          // For now let's assume that a DNS resolution on the RPC host is sufficient, I've seen where getBlockNumber fails
          // Here even though the RPC endpoint is accessible
          const provider = new StaticJsonRpcProvider({ url });
          console.debug(`Successfully connected to: ${url}`);
          return provider;
        } catch (subError) {
          console.warn(`Could not resolve ${hostname}.`);
          throw subError;
        }
      } catch (e) {
        console.warn(`Could not connect to ${url}, attempting the next`);
      }
    }
  }

  if (!SUPPORTED_NETWORKS[chainId] || !SUPPORTED_NETWORKS[chainId]?.rpc.rpcUrl || !providerId) {
    console.warn(`Could not derive the rpcUrl or providerId, could not construct the provider`);
    return;
  }

  // If the RPC_HOSTS fail or there are none, let's try to construct the rpc url if the providerId exists
  const url = `${SUPPORTED_NETWORKS[chainId]?.rpc.rpcUrl}${providerId}`;
  console.debug(`Attempting to connect to: ${url}`);
  const provider = new StaticJsonRpcProvider({ url });

  try {
    const { hostname } = new URL(url);
    await resolve(hostname, 'A');
    await provider.getBlockNumber();
    console.debug(`Successfully connected to: ${url}`);
    return provider;
  } catch (e) {
    console.warn(`Could not connect to ${url}`);
  }
};

const getRpcEnvName = (chainId: ChainId): EnvUtils.EnvName => {
  switch (chainId) {
    case ChainId.Mainnet:
      return EnvUtils.EnvName.MAINNET_RPC_HOSTS;
    case ChainId.Goerli:
      return EnvUtils.EnvName.GOERLI_RPC_HOSTS;
    case ChainId.Arthera:
      return EnvUtils.EnvName.ARTHERA_RPC_HOSTS;
    case ChainId.Base:
      return EnvUtils.EnvName.BASE_RPC_HOSTS;
    case ChainId.Berachain:
      return EnvUtils.EnvName.BERACHAIN_RPC_HOSTS;
    case ChainId.Berachain_bArtio:
      return EnvUtils.EnvName.BERACHAIN_BARTIO_RPC_HOSTS;
    case ChainId.Blast:
      return EnvUtils.EnvName.BLAST_RPC_HOSTS;
    case ChainId.Bsc:
      return EnvUtils.EnvName.BSC_RPC_HOSTS;
    case ChainId.Celo:
      return EnvUtils.EnvName.CELO_RPC_HOSTS;
    case ChainId.Eon:
      return EnvUtils.EnvName.EON_RPC_HOSTS;
    case ChainId.Evmos:
      return EnvUtils.EnvName.EVMOS_RPC_HOSTS;
    case ChainId.Fantom:
      return EnvUtils.EnvName.FANTOM_RPC_HOSTS;
    case ChainId.Flare:
      return EnvUtils.EnvName.FLARE_RPC_HOSTS;
    case ChainId.Fuse:
      return EnvUtils.EnvName.FUSE_RPC_HOSTS;
    case ChainId.Haven1:
      return EnvUtils.EnvName.HAVEN1_RPC_HOSTS;
    case ChainId.Hedera:
      return EnvUtils.EnvName.HEDERA_RPC_HOSTS;
    case ChainId.Hemi:
      return EnvUtils.EnvName.HEMI_RPC_HOSTS;
    case ChainId.Ink:
      return EnvUtils.EnvName.INK_RPC_HOSTS;
    case ChainId.Ink_Sepolia:
      return EnvUtils.EnvName.INK_SEPOLIA_RPC_HOSTS;
    case ChainId.Kava:
      return EnvUtils.EnvName.KAVA_RPC_HOSTS;
    case ChainId.Linea:
      return EnvUtils.EnvName.LINEA_RPC_HOSTS;
    case ChainId.Manta_Pacific:
      return EnvUtils.EnvName.MANTA_PACIFIC_RPC_HOSTS;
    case ChainId.Mantle:
      return EnvUtils.EnvName.MANTLE_RPC_HOSTS;
    case ChainId.Mode:
      return EnvUtils.EnvName.MODE_RPC_HOSTS;
    case ChainId.opBNB:
      return EnvUtils.EnvName.OPBNB_RPC_HOSTS;
    case ChainId.Polygon:
      return EnvUtils.EnvName.POLYGON_RPC_HOSTS;
    case ChainId.Real:
      return EnvUtils.EnvName.REAL_RPC_HOSTS;
    case ChainId.Rootstock:
      return EnvUtils.EnvName.ROOTSTOCK_RPC_HOSTS;
    case ChainId.Scroll:
      return EnvUtils.EnvName.SCROLL_RPC_HOSTS;
    case ChainId.Skale_Europa:
      return EnvUtils.EnvName.SKALE_EUROPA_RPC_HOSTS;
    case ChainId.Sonic:
      return EnvUtils.EnvName.SONIC_RPC_HOSTS;
    case ChainId.Taiko:
      return EnvUtils.EnvName.TAIKO_RPC_HOSTS;
    case ChainId.Zircuit:
      return EnvUtils.EnvName.ZIRCUIT_RPC_HOSTS;
    case ChainId.zkEVM:
      return EnvUtils.EnvName.ZKEVM_RPC_HOSTS;
    case ChainId.zkSync:
      return EnvUtils.EnvName.ZKSYNC_RPC_HOSTS;
    case ChainId.Arbitrum:
      return EnvUtils.EnvName.ARBITRUM_RPC_HOSTS;
    case ChainId.Avalanche:
      return EnvUtils.EnvName.AVALANCHE_RPC_HOSTS;
    case ChainId.Mumbai:
      return EnvUtils.EnvName.MUMBAI_RPC_HOSTS;
    default:
      throw new Error(`Could not connect to primary or backup providers, please check network`);
  }
};

export const getProvider = async (chainId: ChainId, depth: number = 0): Promise<Optional<StaticJsonRpcProvider>> => {
  if (depth > 2) {
    throw new Error(`Could not connect to primary or backup providers, please check network`);
  }

  const cachedProvider = getCachedProvider(chainId);
  if (cachedProvider) {
    // If the provider is cached, let's check if it's been more than the cache interval minutes since the last update
    const lastUpdated = providerCache[chainId]?.lastUdated;
    // If it has been, clear the cache for this chain the re-establish the provider
    if (lastUpdated && Date.now() - lastUpdated > RPC_CACHE_UPDATE_INTERVAL) {
      setCachedProvider(chainId, undefined);
      return getProvider(chainId, depth + 1);
    }

    return cachedProvider;
  }

  let providerId = EnvUtils.EnvName.INFURA_ID;
  if (chainId === ChainId.Bsc) {
    providerId = EnvUtils.EnvName.QUICKNODE_ID;
  }

  // Establish the first RPC provider we can
  const provider = await connectToProvider(
    chainId,
    EnvUtils.getValues(getRpcEnvName(chainId)),
    EnvUtils.getValue(providerId)
  );

  if (provider) {
    setCachedProvider(chainId, provider);
    return provider;
  }
  throw new Error(`Could not connect to any given providers, please check network`);
};
