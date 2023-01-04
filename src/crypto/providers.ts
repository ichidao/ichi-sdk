import { JsonRpcProvider } from '@ethersproject/providers';
import { EnvUtils } from '../utils/env';
import { ChainId, SUPPORTED_NETWORKS } from './networks';
import { Optional } from '../types/optional';
import dns from 'dns';
import { ProviderCache } from 'src/models/providerCache';

// const BSC_ADDRESSES = {
//   gnosis: '0xdbB0DfcB3601e15541c072B2a866C0D53D6c6627',
//   usdc: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
//   oneDodo: '0x2c30b4cb4b3001afa5b8c43c5a7ca548067562a0',
//   dlp: '0x018e41228b1ebc2f81897150877edbb682272c64'
// };

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
  [ChainId.Kovan]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Goerli]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Bsc]: {
    lastUdated: 0,
    cacheHit: 0,
    cacheMiss: 0
  },
  [ChainId.Polygon]: {
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

const setCachedProvider = (chainId: ChainId, provider?: JsonRpcProvider) => {
  providerCache[chainId] = {
    provider,
    lastUdated: Date.now(),
    cacheHit: providerCache[chainId].cacheHit,
    cacheMiss: providerCache[chainId].cacheMiss
  };
};

const getCachedProvider = (chainId: ChainId): Optional<JsonRpcProvider> => {
  if (providerCache[chainId]?.provider) {
    providerCache[chainId].cacheHit++;
  } else {
    console.log(`Cache miss for chainId: ${chainId}`);
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
): Promise<Optional<JsonRpcProvider>> => {
  if (rpcHosts) {
    for (let i = 0; i < rpcHosts.length; i++) {
      const url = rpcHosts[i];
      console.debug(`Attempting to connect to rpc host from env vars: ${url}`);
      try {
        // First attempt to resolve the url, if we don't do this attempting to JsonRpcProvider to an unreachable host will just hang
        const { hostname } = new URL(url);
        try {
          console.debug(`Resolve hostname ${hostname}...`);
          await resolve(hostname, 'A');
          console.debug(`\tDone!`);

          // For now let's assume that a DNS resolution on the RPC host is sufficient, I've seen where getBlockNumber fails
          // Here even though the RPC endpoint is accessible
          const provider = new JsonRpcProvider({ url });
          console.debug(`Successfully connected to: ${url}`);
          return provider;
        } catch (subError) {
          console.warn(`Could not resolve ${hostname}.`);
          throw subError;
        }
        // try {
        //   console.debug(`Fetching block number from ${url}...`);
        //   const provider = new JsonRpcProvider({ url, timeout: 5 });
        //   await provider.getBlockNumber();
        //   console.debug(`\tDone!`);
        //   console.debug(`Successfully connected to rpc host from env vars: ${url}`);
        //   return provider;
        // } catch (subError) {
        //   console.warn(`Could not get blockNumber from ${url}.`);
        //   throw subError;
        // }
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
  const provider = new JsonRpcProvider({ url });

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
    case ChainId.Kovan:
      return EnvUtils.EnvName.KOVAN_RPC_HOSTS;
    case ChainId.Goerli:
      return EnvUtils.EnvName.GOERLI_RPC_HOSTS;
    case ChainId.Bsc:
      return EnvUtils.EnvName.BSC_RPC_HOSTS;
    case ChainId.Polygon:
      return EnvUtils.EnvName.POLYGON_RPC_HOSTS;
    case ChainId.Mumbai:
      return EnvUtils.EnvName.MUMBAI_RPC_HOSTS;
    default:
      throw new Error(`Could not connect to primary or backup providers, please check network`);
  }
};

export const getProvider = async (chainId: ChainId): Promise<Optional<JsonRpcProvider>> => {
  const cachedProvider = getCachedProvider(chainId);
  if (cachedProvider) {
    // If the provider is cached, let's check if it's been more than the cache interval minutes since the last update
    const lastUpdated = providerCache[chainId]?.lastUdated;
    // If it has been, clear the cache for this chain the re-establish the provider
    if (lastUpdated && Date.now() - lastUpdated > RPC_CACHE_UPDATE_INTERVAL) {
      setCachedProvider(chainId, undefined);
      return getProvider(chainId);
    }

    return cachedProvider;
  }

  // Establish the first RPC provider we can
  const provider = await connectToProvider(
    chainId,
    EnvUtils.getValues(getRpcEnvName(chainId)),
    EnvUtils.getValue(EnvUtils.EnvName.INFURA_ID)
  );

  if (provider) {
    setCachedProvider(chainId, provider);
    return provider;
  }
  throw new Error(`Could not connect to any given mainnet providers, please check network`);
};
