import { expect } from '@jest/globals';
import { ChainId } from '../crypto/networks';
import { getProvider, providerCache, resetProviderCache, setRpcCacheUpdateInterval } from './providers';

// npx jest providers.spec.ts
// npm test -- providers.spec.ts
describe('providers', () => {
  describe('getProvider', () => {
    const env = process.env;

    beforeEach(() => {
      jest.resetModules(); // this is important - it clears the cache
      process.env = { ...env };
      setRpcCacheUpdateInterval(1 * 1000);
    });

    afterEach(() => {
      process.env = env;
      resetProviderCache();
      setRpcCacheUpdateInterval(30 * 1000);
    });

    type TestArgs = {
      chainId: ChainId;
      rpcUrls: string;
      expectedRpcUrl?: string;
    };

    const testParams: TestArgs[] = [
      {
        chainId: ChainId.Mainnet,
        rpcUrls: `https://internal.does.not.exit,http://foo.internal:8545,https://cloudflare-eth.com`,
        expectedRpcUrl: 'https://cloudflare-eth.com'
      },
      {
        chainId: ChainId.Mainnet,
        rpcUrls: `https://cloudflare-eth.com,http://foo.internal:8545`,
        expectedRpcUrl: 'https://cloudflare-eth.com'
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        process.env.MAINNET_RPC_HOSTS = testParam.rpcUrls;
        // Get the initial provider which will set that provider in the cache
        const actualResult = await getProvider(testParam.chainId);
        // Verify the rpc url matches the one that was able to resolve on the network
        expect(actualResult?.connection.url).toEqual(testParam.expectedRpcUrl);
        // At this point we have no cache hit as we've only set the cache
        expect(providerCache[ChainId.Mainnet].cacheHit).toEqual(0);
        // Accessing the provider again should result in a cache hit
        await getProvider(testParam.chainId);
        // Now expect a cache hit
        expect(providerCache[ChainId.Mainnet].cacheHit).toEqual(1);
        // Store the last updated so we can verify it's been updated below
        const prevCacheDate = providerCache[ChainId.Mainnet].lastUdated;
        // Wait 1 seconds to give time for a cache invalidation
        await new Promise((r) => setTimeout(r, 1000));
        // Get the provider again which will force a cache update
        await getProvider(testParam.chainId);
        // Excect the cache to be updated by checking the lastUpdated date
        expect(providerCache[ChainId.Mainnet].lastUdated).toBeGreaterThan(prevCacheDate);
      });
    });
  });
});
