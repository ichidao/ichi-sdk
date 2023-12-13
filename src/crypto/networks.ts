import { EnvUtils } from '../utils/env';

export enum ChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  Polygon = 137,
  Arbitrum = 42161,
  Avalanche = 43114,
  Mumbai = 80001,
  Bsc = 56,
  Eon = 7332,
  zkSync = 324,
  Hedera = 295,
}

export interface IAssetData {
  symbol: string;
  name: string;
}

export type NetworkEnv = 'testnet' | 'mainnet';

export type SupportedNetwork = {
  chainId: ChainId;
  name: string;
  color: string;
  icon?: string;
  env: NetworkEnv;
  scanLink: string;
  scanName: string;
  coingecko: string;
  rpc: IChainData;
};

export interface IChainData {
  rpcUrl: string;
  nativeCurrency: IAssetData;
}

export type SupportedNetworkList = {
  [key in ChainId]?: SupportedNetwork;
};

export const generateIconUrl = (chainId: ChainId, ext: 'png' | 'svg') => {
  return EnvUtils.getValue(EnvUtils.EnvName.CHAIN_SRC)?.replace('[chainid]', chainId.toString()).replace('[ext]', ext);
};

export const SUPPORTED_NETWORKS: SupportedNetworkList = {
  [ChainId.Mainnet]: {
    chainId: ChainId.Mainnet,
    name: 'Ethereum',
    color: 'linear-gradient(90deg, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 100%)',
    icon: generateIconUrl(ChainId.Mainnet, 'png'),
    env: 'mainnet',
    scanLink: 'etherscan.io',
    scanName: 'Etherscan',
    coingecko: 'ethereum',
    rpc: {
      rpcUrl: `https://mainnet.infura.io/v3/`,
      nativeCurrency: {
        symbol: 'ETH',
        name: 'Ethereum'
      }
    }
  },
  [ChainId.Goerli]: {
    chainId: ChainId.Goerli,
    name: 'Goerli',
    color: 'linear-gradient(90deg, rgba(0,226,216,1) 0%, rgba(0,181,173,1) 100%)',
    icon: generateIconUrl(ChainId.Goerli, 'png'),
    env: 'testnet',
    scanLink: 'goerli.etherscan.io',
    scanName: 'Etherscan',
    coingecko: '',
    rpc: {
      rpcUrl: `https://goerli.infura.io/v3/`,
      nativeCurrency: {
        symbol: 'ETH',
        name: 'Ethereum'
      }
    }
  },
  [ChainId.Polygon]: {
    chainId: ChainId.Polygon,
    name: 'Polygon',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Polygon, 'svg'),
    env: 'mainnet',
    scanLink: 'polygonscan.com',
    scanName: 'Polygonscan',
    coingecko: 'polygon-pos',
    rpc: {
      rpcUrl: `https://polygon-mainnet.infura.io/v3/`,
      nativeCurrency: {
        symbol: 'MATIC',
        name: 'Matic'
      }
    }
  },
  [ChainId.Arbitrum]: {
    chainId: ChainId.Arbitrum,
    name: 'Arbitrum',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Polygon, 'svg'),
    env: 'mainnet',
    scanLink: 'arbiscan.io',
    scanName: 'Arbiscan',
    coingecko: 'arbitrum-one',
    rpc: {
      rpcUrl: `https://arbitrum-mainnet.infura.io/v3/`,
      nativeCurrency: {
        symbol: 'ETH',
        name: 'Ethereum'
      }
    }
  },
  [ChainId.Avalanche]: {
    chainId: ChainId.Avalanche,
    name: 'Avalanche',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Polygon, 'svg'),
    env: 'mainnet',
    scanLink: 'snowtrace.io',
    scanName: 'Snowtrace',
    coingecko: 'avalanche',
    rpc: {
      rpcUrl: `https://avalanche-mainnet.infura.io/v3/`,
      nativeCurrency: {
        symbol: 'AVAX',
        name: 'Avalanche'
      }
    }
  },
  [ChainId.Mumbai]: {
    chainId: ChainId.Mumbai,
    name: 'Mumbai',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Polygon, 'svg'),
    env: 'testnet',
    scanLink: 'mumbai.polygonscan.com',
    scanName: 'Polygonscan',
    coingecko: '',
    rpc: {
      rpcUrl: `https://polygon-mumbai.infura.io/v3/`,
      nativeCurrency: {
        symbol: 'MATIC',
        name: 'Matic'
      }
    }
  },
  [ChainId.Bsc]: {
    chainId: ChainId.Bsc,
    name: 'BSC',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Bsc, 'svg'),
    env: 'mainnet',
    scanLink: 'bscscan.com',
    scanName: 'BscScan',
    coingecko: 'binance-smart-chain',
    rpc: {
      //rpcUrl: 'https://bsc-dataseed1.binance.org:443',
      rpcUrl: 'https://cosmopolitan-multi-meadow.bsc.discover.quiknode.pro/',
      nativeCurrency: {
        symbol: 'BNB',
        name: 'BNB'
      }
    }
  },
  [ChainId.Eon]: {
    chainId: ChainId.Eon,
    name: 'EON',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Eon, 'svg'),
    env: 'mainnet',
    scanLink: 'https://eon-explorer.horizenlabs.io',
    scanName: 'ZenSystem',
    coingecko: '',
    rpc: {
      rpcUrl: 'https://rpc.ankr.com/horizen_eon/',
      nativeCurrency: {
        symbol: 'ZEN',
        name: 'ZEN'
      }
    }
  },
  [ChainId.Hedera]: {
    chainId: ChainId.Hedera,
    name: 'Hedera',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Hedera, 'svg'),
    env: 'mainnet',
    scanLink: 'https://hashscan.io/mainnet/dashboard',
    scanName: 'HashScan',
    coingecko: '',
    rpc: {
      rpcUrl: 'https://mainnet.hashio.io/api',
      nativeCurrency: {
        symbol: 'HBAR',
        name: 'HBAR'
      }
    }
  },
  [ChainId.zkSync]: {
    chainId: ChainId.zkSync,
    name: 'Era',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.zkSync, 'svg'),
    env: 'mainnet',
    scanLink: 'https://explorer.zksync.io/',
    scanName: 'ZkSynk',
    coingecko: '',
    rpc: {
      rpcUrl: 'https://1rpc.io/zksync2-era',
      nativeCurrency: {
        symbol: 'ETH',
        name: 'ETH'
      }
    }
  },
};
