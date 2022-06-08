import { JsonRpcProvider } from '@ethersproject/providers';
import { EnvUtils } from '../utils/env';
import { ChainId, SUPPORTED_NETWORKS } from './networks';
import { Optional } from './types/optional';

// const BSC_ADDRESSES = {
//   gnosis: '0xdbB0DfcB3601e15541c072B2a866C0D53D6c6627',
//   usdc: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
//   oneDodo: '0x2c30b4cb4b3001afa5b8c43c5a7ca548067562a0',
//   dlp: '0x018e41228b1ebc2f81897150877edbb682272c64'
// };

let mainnetProvider: Optional<JsonRpcProvider>;
let kovanProvider: Optional<JsonRpcProvider>;
let goerliProvider: Optional<JsonRpcProvider>;

let bscProvider: Optional<JsonRpcProvider>;
let polygonProvider: Optional<JsonRpcProvider>;
let mumbaiProvider: Optional<JsonRpcProvider>;

// This uses Quorum and not applicable to our current scenario but it may make sense in the future to target multiple
// backup provides like infura and another provider as 2 backups in Quorum.
// export let mainnetProvider = new ethers.providers.FallbackProvider([
//   {provider: primaryMainnetProvider, priority: 1, weight: 1, stallTimeout: 0},
//   {provider: backupMainnetProvider, priority: 2, weight: 1, stallTimeout: 0},
// ]);

const connectToProvider = async (
  chainId: ChainId,
  rpcHosts?: string[],
  providerId?: string
): Promise<Optional<JsonRpcProvider>> => {
  if (rpcHosts) {
    for (let i = 0; i < rpcHosts.length; i++) {
      const url = rpcHosts[i];
      const provider = new JsonRpcProvider({ url });

      try {
        await provider.getBlockNumber();
        return provider;
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
  console.log(`url: ${url}`);
  const provider = new JsonRpcProvider({ url });

  try {
    await provider.getBlockNumber();
    return provider;
  } catch (e) {
    console.warn(`Could not connect to ${url}`);
  }
};

export const getProvider = async (chainId: number): Promise<Optional<JsonRpcProvider>> => {
  switch (chainId) {
    case ChainId.Mainnet:
      // If the mainnet provider has already been configured and set, return it.
      if (mainnetProvider) {
        console.log(`Returning cached mainnetProvider`);
        return mainnetProvider;
      }

      // Establish the first RPC provider we can
      mainnetProvider = await connectToProvider(
        ChainId.Mainnet,
        EnvUtils.EnvValues.MAINNET_RPC_HOSTS,
        EnvUtils.EnvValue.INFURA_ID
      );
      if (!mainnetProvider) {
        throw new Error(`Could not connect to any given mainnet providers, please check network`);
      }

      return mainnetProvider;
    case ChainId.Kovan:
      // If the mainnet provider has already been configured and set, return it.
      if (kovanProvider) {
        return kovanProvider;
      }

      // Establish the first RPC provider we can
      kovanProvider = await connectToProvider(
        ChainId.Kovan,
        EnvUtils.EnvValues.KOVAN_RPC_HOSTS,
        EnvUtils.EnvValue.INFURA_ID
      );
      if (!kovanProvider) {
        throw new Error(`Could not connect to a kovan provider, please check network`);
      }

      return kovanProvider;
    case ChainId.Goerli:
      if (goerliProvider) {
        return goerliProvider;
      }

      // Establish the first RPC provider we can
      goerliProvider = await connectToProvider(
        ChainId.Goerli,
        EnvUtils.EnvValues.GOERLI_RPC_HOSTS,
        EnvUtils.EnvValue.INFURA_ID
      );
      if (!goerliProvider) {
        throw new Error(`Could not connect to a goerli provider, please check your network`);
      }

      return goerliProvider;
    case ChainId.Bsc:
      if (bscProvider) {
        return bscProvider;
      }

      // Establish the first RPC provider we can
      bscProvider = await connectToProvider(ChainId.Bsc, EnvUtils.EnvValues.BSC_RPC_HOSTS, EnvUtils.EnvValue.INFURA_ID);
      if (!bscProvider) {
        throw new Error(`Could not connect to a BSC provider, please check your network`);
      }

      return bscProvider;
    case ChainId.Polygon:
      if (polygonProvider) {
        return polygonProvider;
      }

      // Establish the first RPC provider we can
      polygonProvider = await connectToProvider(
        ChainId.Polygon,
        EnvUtils.EnvValues.POLYGON_RPC_HOSTS,
        EnvUtils.EnvValue.INFURA_ID
      );
      if (!polygonProvider) {
        throw new Error(`Could not connect to a polygon provider, please check your network`);
      }

      return polygonProvider;
    case ChainId.Mumbai:
      if (mumbaiProvider) {
        return mumbaiProvider;
      }

      // Establish the first RPC provider we can
      mumbaiProvider = await connectToProvider(
        ChainId.Mumbai,
        EnvUtils.EnvValues.MUMBAI_RPC_HOSTS,
        EnvUtils.EnvValue.ALCHEMY_ID
      );
      if (!mumbaiProvider) {
        throw new Error(`Could not connect to a mumbai provider, please check your network`);
      }

      return mumbaiProvider;
    default:
      throw new Error(`Could not connect to primary or backup providers, please check network`);
  }
};
