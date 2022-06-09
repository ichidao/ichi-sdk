import { EnvUtils } from '../../utils/env';

export enum ChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  Kovan = 42,
  Polygon = 137,
  Mumbai = 80001,
  Bsc = 56
}

export interface IAssetData {
  symbol: string;
  name: string;
  decimals: number;
  contractAddress?: string;
  balance?: string;
}

export type BridgeAction = 'deposit' | 'withdraw';

export type NetworkEnv = 'testnet' | 'mainnet';

export type SupportedNetwork = {
  chainId: ChainId;
  name: string;
  color: string;
  icon?: string;
  env: NetworkEnv;
  scanLink: string;
  scanName: string;
  rpc: IChainData;
  infuraProviderName: string;
  bridge?: ChainId[];
  bridgeAction?: BridgeAction;
};

export interface IChainData {
  name: string;
  shortName: string;
  chain: string;
  network: string;
  wsRpcUrl?: string;
  rpcUrl: string;
  publicRpcUrl: string;
  nativeCurrency: IAssetData;
}

export type SupportedNetworkList = {
  [key in ChainId]?: SupportedNetwork;
};

export const generateIconUrl = (chainId: ChainId, ext: 'png' | 'svg') => {
  return EnvUtils.EnvValue.CHAIN_SRC?.replace('[chainid]', chainId.toString()).replace('[ext]', ext);
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
    infuraProviderName: 'homestead', // https://docs.ethers.io/v5/api/providers/api-providers/#InfuraProvider
    bridge: [ChainId.Polygon, ChainId.Mainnet],
    bridgeAction: 'deposit',
    rpc: {
      name: 'Ethereum Mainnet',
      shortName: 'eth',
      chain: 'ETH',
      network: 'mainnet',
      rpcUrl: `https://mainnet.infura.io/v3/`,
      publicRpcUrl: `https://mainnet.infura.io/v3/`,
      nativeCurrency: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18
      }
    }
  },
  [ChainId.Kovan]: {
    chainId: ChainId.Kovan,
    name: 'Kovan',
    color: 'linear-gradient(90deg, rgba(0,226,216,1) 0%, rgba(0,181,173,1) 100%)',
    icon: generateIconUrl(ChainId.Kovan, 'png'),
    env: 'testnet',
    scanLink: 'kovan.etherscan.io',
    scanName: 'Etherscan',
    infuraProviderName: 'kovan', // https://docs.ethers.io/v5/api/providers/api-providers/#InfuraProvider
    rpc: {
      name: 'Ethereum Kovan',
      shortName: 'kov',
      chain: 'ETH',
      network: 'kovan',
      rpcUrl: `https://kovan.infura.io/v3/`,
      publicRpcUrl: `https://kovan.infura.io/v3/`,
      nativeCurrency: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18
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
    infuraProviderName: 'goerli', // https://docs.ethers.io/v5/api/providers/api-providers/#InfuraProvider
    bridge: [ChainId.Mumbai, ChainId.Goerli],
    bridgeAction: 'deposit',
    rpc: {
      name: 'Ethereum Goerli',
      shortName: 'kov',
      chain: 'ETH',
      network: 'goerli',
      rpcUrl: `https://goerli.infura.io/v3/`,
      publicRpcUrl: `https://goerli.infura.io/v3/`,
      nativeCurrency: {
        symbol: 'ETH',
        name: 'Ethereum',
        decimals: 18
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
    infuraProviderName: 'matic', // https://docs.ethers.io/v5/api/providers/api-providers/#InfuraProvider
    bridge: [ChainId.Mainnet],
    bridgeAction: 'withdraw',
    rpc: {
      name: 'Polygon Mainnet',
      shortName: 'pol',
      chain: 'MATIC',
      network: 'polygon',
      rpcUrl: `https://polygon-mainnet.infura.io/v3/`,
      publicRpcUrl: 'https://polygon-rpc.com',
      nativeCurrency: {
        symbol: 'MATIC',
        name: 'Matic',
        decimals: 18,
        contractAddress: '',
        balance: ''
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
    infuraProviderName: 'maticmum', // https://docs.ethers.io/v5/api/providers/api-providers/#InfuraProvider
    bridge: [ChainId.Goerli],
    bridgeAction: 'withdraw',
    rpc: {
      name: 'Matic Mumbai',
      shortName: 'mum',
      chain: 'MATIC',
      network: 'mumbai',
      rpcUrl: `https://polygon-mumbai.infura.io/v3/`,
      publicRpcUrl: 'https://rpc-mumbai.maticvigil.com',
      nativeCurrency: {
        symbol: 'MATIC',
        name: 'Matic',
        decimals: 18
      }
    }
  },
  [ChainId.Bsc]: {
    chainId: ChainId.Bsc,
    name: 'BSC',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Bsc, 'svg'),
    env: 'testnet',
    scanLink: '',
    scanName: '',
    infuraProviderName: '', // https://docs.ethers.io/v5/api/providers/api-providers/#InfuraProvider
    rpc: {
      name: '',
      shortName: 'bsc',
      chain: '',
      network: '',
      rpcUrl: 'https://bsc-dataseed1.binance.org:443',
      publicRpcUrl: 'https://bsc-dataseed1.binance.org:443',
      nativeCurrency: {
        symbol: 'BNB',
        name: 'BNB',
        decimals: 18
      }
    }
  }
};
