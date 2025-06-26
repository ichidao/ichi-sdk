import { EnvUtils } from '../utils/env';

export enum ChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  Polygon = 137,
  Mumbai = 80001,
  Arbitrum = 42161,
  Arthera = 10242,
  Avalanche = 43114,
  Base = 8453,
  Berachain = 80094,
  Berachain_bArtio = 80084,
  Blast = 81457,
  Bsc = 56,
  Celo = 42220,
  Eon = 7332,
  Evmos = 9001,
  Fantom = 250,
  Flare = 14,
  Fuse = 122,
  Haven1 = 8811,
  Hedera = 295,
  Hemi = 43111,
  HyperEVM = 999,
  Ink = 57073,
  Ink_Sepolia = 763373,
  Kava = 2222,
  Linea = 59144,
  Manta_Pacific = 169,
  Mantle = 5000,
  Mode = 34443,
  Monad_Testnet = 10143,
  Nibiru = 6900,
  opBNB = 204,
  Real = 111188,
  Rootstock = 30,
  Scroll = 534352,
  Skale_Europa = 2046399126,
  Sonic = 146,
  Taiko = 167000,
  Unichain = 130,
  Zircuit = 48900,
  zkEVM = 1101,
  zkSync = 324,
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
    icon: generateIconUrl(ChainId.Arbitrum, 'svg'),
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
  [ChainId.Arthera]: {
    chainId: ChainId.Arthera,
    name: 'Arthera',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Arthera, 'svg'),
    env: 'mainnet',
    scanLink: 'explorer.arthera.net',
    scanName: 'Arthera explorer',
    coingecko: '',
    rpc: {
      rpcUrl: `https://rpc.arthera.net`,
      nativeCurrency: {
        symbol: 'AA',
        name: 'AA'
      }
    }
  },
  [ChainId.Avalanche]: {
    chainId: ChainId.Avalanche,
    name: 'Avalanche',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Avalanche, 'svg'),
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
  [ChainId.Base]: {
    chainId: ChainId.Base,
    name: 'Base',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Base, 'svg'),
    env: 'mainnet',
    scanLink: 'basescan.org',
    scanName: 'BaseScan',
    coingecko: 'base',
    rpc: {
      rpcUrl: 'https://base.llamarpc.com',
      nativeCurrency: {
        symbol: 'ETH',
        name: 'ETH'
      }
    }
  },
  [ChainId.Berachain]: {
    chainId: ChainId.Berachain,
    name: 'Berachain',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Berachain, 'svg'),
    env: 'mainnet',
    scanLink: 'https://beratrail.io',
    scanName: 'Berachain Explorer',
    coingecko: 'berachain',
    rpc: {
      rpcUrl: 'https://rpc.berachain.com',
      nativeCurrency: {
        symbol: 'BERA',
        name: 'BERA'
      }
    }
  },
  [ChainId.Berachain_bArtio]: {
    chainId: ChainId.Berachain_bArtio,
    name: 'Berachain bArtio',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Berachain_bArtio, 'svg'),
    env: 'mainnet',
    scanLink: 'https://bartio.beratrail.io',
    scanName: 'Bartio Testnet Explorer',
    coingecko: '',
    rpc: {
      rpcUrl: 'https://bartio.rpc.berachain.com',
      nativeCurrency: {
        symbol: 'BERA',
        name: 'BERA'
      }
    }
  },
  [ChainId.Blast]: {
    chainId: ChainId.Blast,
    name: 'Blast',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Blast, 'svg'),
    env: 'mainnet',
    scanLink: 'blastscan.io',
    scanName: 'BlastScan',
    coingecko: 'blast',
    rpc: {
      rpcUrl: 'https://rpc.blast.io',
      nativeCurrency: {
        symbol: 'ETH',
        name: 'ETH'
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
  [ChainId.Celo]: {
    chainId: ChainId.Celo,
    name: 'Celo',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Celo, 'svg'),
    env: 'mainnet',
    scanLink: 'celoscan.io',
    scanName: 'CeloScan',
    coingecko: 'celo',
    rpc: {
      rpcUrl: 'https://1rpc.io/celo',
      nativeCurrency: {
        symbol: 'CELO',
        name: 'CELO'
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
  [ChainId.Evmos]: {
    chainId: ChainId.Evmos,
    name: 'Evmos',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Evmos, 'svg'),
    env: 'mainnet',
    scanLink: 'https://escan.live/',
    scanName: 'Escan',
    coingecko: '',
    rpc: {
      rpcUrl: 'https://evmos-evm.publicnode.com',
      nativeCurrency: {
        symbol: 'EVMOS',
        name: 'EVMOS'
      }
    }
  },
  [ChainId.Fantom]: {
    chainId: ChainId.Fantom,
    name: 'Fantom',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Fantom, 'svg'),
    env: 'mainnet',
    scanLink: 'https://ftmscan.com',
    scanName: 'ftmscan',
    coingecko: 'fantom',
    rpc: {
      rpcUrl: 'https://rpc3.fantom.network',
      nativeCurrency: {
        symbol: 'FTM',
        name: 'FTM'
      }
    }
  },
  [ChainId.Flare]: {
    chainId: ChainId.Flare,
    name: 'Flare',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Flare, 'svg'),
    env: 'mainnet',
    scanLink: 'https://flarescan.com',
    scanName: 'flarescan',
    coingecko: 'flare-network',
    rpc: {
      rpcUrl: 'https://rpc.ftso.au/flare',
      nativeCurrency: {
        symbol: 'FLR',
        name: 'FLR'
      }
    }
  },
  [ChainId.Fuse]: {
    chainId: ChainId.Fuse,
    name: 'Fuse',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Fuse, 'svg'),
    env: 'mainnet',
    scanLink: 'https://explorer.fuse.io/',
    scanName: 'Fuse Explorer',
    coingecko: 'fuse',
    rpc: {
      rpcUrl: 'https://fuse-pokt.nodies.app',
      nativeCurrency: {
        symbol: 'FUSE',
        name: 'FUSE'
      }
    }
  },
  [ChainId.Haven1]: {
    chainId: ChainId.Haven1,
    name: 'Haven1',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Haven1, 'svg'),
    env: 'mainnet',
    scanLink: 'https://explorer.haven1.org/',
    scanName: 'Haven1 explorer',
    coingecko: '',
    rpc: {
      rpcUrl: 'https://rpc.haven1.org',
      nativeCurrency: {
        symbol: 'H1',
        name: 'H1'
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
    coingecko: 'hedera-hashgraph',
    rpc: {
      rpcUrl: 'https://mainnet.hashio.io/api',
      nativeCurrency: {
        symbol: 'HBAR',
        name: 'HBAR'
      }
    }
  },
  [ChainId.Hemi]: {
    chainId: ChainId.Hemi,
    name: 'Hemi',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Hemi, 'svg'),
    env: 'mainnet',
    scanLink: 'https://explorer.hemi.xyz/',
    scanName: 'Hemi explorer',
    coingecko: '',
    rpc: {
      rpcUrl: 'https://rpc.hemi.network/rpc',
      nativeCurrency: {
        symbol: 'ETH',
        name: 'ETH'
      }
    }
  },
  [ChainId.HyperEVM]: {
    chainId: ChainId.HyperEVM,
    name: 'HyperEVM',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.HyperEVM, 'svg'),
    env: 'mainnet',
    scanLink: 'https://www.hyperscan.com/',
    scanName: 'HyperEVM explorer',
    coingecko: 'hyperevm',
    rpc: {
      rpcUrl: 'https://rpc.hypurrscan.io',
      nativeCurrency: {
        symbol: 'HYPE',
        name: 'HYPE'
      }
    }
  },
  [ChainId.Ink]: {
    chainId: ChainId.Ink,
    name: 'Ink',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Ink, 'svg'),
    env: 'mainnet',
    scanLink: 'https://inkchain-temp.cloud.blockscout.com/',
    scanName: 'Ink explorer',
    coingecko: 'ink',
    rpc: {
      rpcUrl: 'https://rpc-qnd.inkonchain.com',
      nativeCurrency: {
        symbol: 'ETH',
        name: 'ETH'
      }
    }
  },
  [ChainId.Ink_Sepolia]: {
    chainId: ChainId.Ink_Sepolia,
    name: 'Ink Sepolia',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Ink_Sepolia, 'svg'),
    env: 'testnet',
    scanLink: 'https://explorer-sepolia.inkonchain.com/',
    scanName: 'Ink Sepolia explorer',
    coingecko: '',
    rpc: {
      rpcUrl: 'https://rpc-gel-sepolia.inkonchain.com',
      nativeCurrency: {
        symbol: 'ETH',
        name: 'ETH'
      }
    }
  },
  [ChainId.Kava]: {
    chainId: ChainId.Kava,
    name: 'Kava',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Kava, 'svg'),
    env: 'mainnet',
    scanLink: 'https://kavascan.com/',
    scanName: 'KavaScan',
    coingecko: 'kava',
    rpc: {
      rpcUrl: 'https://evm.kava.io',
      nativeCurrency: {
        symbol: 'KAVA',
        name: 'KAVA'
      }
    }
  },
  [ChainId.Linea]: {
    chainId: ChainId.Linea,
    name: 'Linea',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Linea, 'svg'),
    env: 'mainnet',
    scanLink: 'https://lineascan.build/',
    scanName: 'Lineascan',
    coingecko: 'linea',
    rpc: {
      rpcUrl: 'https://rpc.linea.build',
      nativeCurrency: {
        symbol: 'ETH',
        name: 'ETH'
      }
    }
  },
  [ChainId.Manta_Pacific]: {
    chainId: ChainId.Manta_Pacific,
    name: 'Manta Pacific',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Manta_Pacific, 'svg'),
    env: 'mainnet',
    scanLink: 'https://pacific-explorer.manta.network/',
    scanName: 'Manta Pacific explorer',
    coingecko: 'manta-pacific',
    rpc: {
      rpcUrl: 'https://1rpc.io/manta',
      nativeCurrency: {
        symbol: 'ETH',
        name: 'ETH'
      }
    }
  },
  [ChainId.Mantle]: {
    chainId: ChainId.Mantle,
    name: 'Mantle',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Mantle, 'svg'),
    env: 'mainnet',
    scanLink: 'https://explorer.mantle.xyz/',
    scanName: 'Mantle',
    coingecko: 'mantle',
    rpc: {
      rpcUrl: 'https://rpc.mantle.xyz',
      nativeCurrency: {
        symbol: 'MNT',
        name: 'MNT'
      }
    }
  },
  [ChainId.Mode]: {
    chainId: ChainId.Mode,
    name: 'Mode',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Mode, 'svg'),
    env: 'mainnet',
    scanLink: 'https://modescan.io/',
    scanName: 'Modescan',
    coingecko: 'mode',
    rpc: {
      rpcUrl: 'https://mode.drpc.org',
      nativeCurrency: {
        symbol: 'ETH',
        name: 'ETH'
      }
    }
  },
  [ChainId.Monad_Testnet]: {
    chainId: ChainId.Monad_Testnet,
    name: 'Monad Testnet',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Monad_Testnet, 'svg'),
    env: 'testnet',
    scanLink: 'https://testnet.monadexplorer.com/',
    scanName: 'Monad explorer',
    coingecko: '',
    rpc: {
      rpcUrl: 'https://testnet-rpc.monad.xyz',
      nativeCurrency: {
        symbol: 'MON',
        name: 'MON'
      }
    }
  },
  [ChainId.Nibiru]: {
    chainId: ChainId.Nibiru,
    name: 'Nibiru',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Nibiru, 'svg'),
    env: 'mainnet',
    scanLink: 'https://nibiscan.io/',
    scanName: 'Nibiru Explorer',
    coingecko: 'nibiru',
    rpc: {
      rpcUrl: 'https://evm-rpc.nibiru.fi',
      nativeCurrency: {
        symbol: 'NIBI',
        name: 'NIBI'
      }
    }
  },
  [ChainId.opBNB]: {
    chainId: ChainId.opBNB,
    name: 'op_BNB',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.opBNB, 'svg'),
    env: 'mainnet',
    scanLink: 'https://opbnb.bscscan.com/',
    scanName: 'opBNB',
    coingecko: 'opbnb',
    rpc: {
      rpcUrl: 'https://opbnb-mainnet-rpc.bnbchain.org',
      nativeCurrency: {
        symbol: 'BNB',
        name: 'BNB'
      }
    }
  },
  [ChainId.Real]: {
    chainId: ChainId.Real,
    name: 're.al',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Real, 'svg'),
    env: 'mainnet',
    scanLink: 'https://explorer.re.al/',
    scanName: 're.al explorer',
    coingecko: 're-al',
    rpc: {
      rpcUrl: 'https://real.drpc.org',
      nativeCurrency: {
        symbol: 'reETH',
        name: 'reETH'
      }
    }
  },
  [ChainId.Rootstock]: {
    chainId: ChainId.Rootstock,
    name: 'Rootstock',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Rootstock, 'svg'),
    env: 'mainnet',
    scanLink: 'https://rootstock.blockscout.com/',
    scanName: 'Rootstock explorer',
    coingecko: 'rootstock',
    rpc: {
      rpcUrl: 'https://mycrypto.rsk.co',
      nativeCurrency: {
        symbol: 'RBTC',
        name: 'RBTC'
      }
    }
  },
  [ChainId.Scroll]: {
    chainId: ChainId.Scroll,
    name: 'Scroll',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Scroll, 'svg'),
    env: 'mainnet',
    scanLink: 'https://scrollscan.com/',
    scanName: 'ScrollScan',
    coingecko: 'scroll',
    rpc: {
      rpcUrl: 'https://1rpc.io/scroll',
      nativeCurrency: {
        symbol: 'ETH',
        name: 'ETH'
      }
    }
  },
  [ChainId.Skale_Europa]: {
    chainId: ChainId.Skale_Europa,
    name: 'Skale_Europa',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Skale_Europa, 'svg'),
    env: 'mainnet',
    scanLink: 'https://elated-tan-skat.explorer.mainnet.skalenodes.com/',
    scanName: 'EuropaLiquidityHubExplorer',
    coingecko: 'skale',
    rpc: {
      rpcUrl: 'https://mainnet.skalenodes.com/v1/elated-tan-skat',
      nativeCurrency: {
        symbol: 'sFUEL',
        name: 'sFUEL'
      }
    }
  },
  [ChainId.Sonic]: {
    chainId: ChainId.Sonic,
    name: 'Sonic',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Sonic, 'svg'),
    env: 'mainnet',
    scanLink: 'https://sonicscan.org/',
    scanName: 'Sonic Explorer',
    coingecko: 'sonic',
    rpc: {
      rpcUrl: 'https://rpc.soniclabs.com',
      nativeCurrency: {
        symbol: 'S',
        name: 'S'
      }
    }
  },
  [ChainId.Taiko]: {
    chainId: ChainId.Taiko,
    name: 'Taiko',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Taiko, 'svg'),
    env: 'mainnet',
    scanLink: 'https://taikoscan.io/',
    scanName: 'taikoscan',
    coingecko: 'taiko',
    rpc: {
      rpcUrl: 'https://rpc.mainnet.taiko.xyz',
      nativeCurrency: {
        symbol: 'ETH',
        name: 'ETH'
      }
    }
  },
  [ChainId.Unichain]: {
    chainId: ChainId.Unichain,
    name: 'Unichain',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Unichain, 'svg'),
    env: 'mainnet',
    scanLink: 'https://unichain.blockscout.com/',
    scanName: 'Unichain explorer',
    coingecko: 'unichain',
    rpc: {
      rpcUrl: 'https://unichain-rpc.publicnode.com',
      nativeCurrency: {
        symbol: 'ETH',
        name: 'ETH'
      }
    }
  },
  [ChainId.Zircuit]: {
    chainId: ChainId.Zircuit,
    name: 'Zircuit',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.Zircuit, 'svg'),
    env: 'mainnet',
    scanLink: 'https://explorer.zircuit.com/',
    scanName: 'Zircuit Explorer',
    coingecko: 'zircuit',
    rpc: {
      rpcUrl: 'https://zircuit-mainnet.drpc.org',
      nativeCurrency: {
        symbol: 'ETH',
        name: 'ETH'
      }
    }
  },
  [ChainId.zkEVM]: {
    chainId: ChainId.zkEVM,
    name: 'Polygon_zkEVM',
    color: 'linear-gradient(90deg, rgba(161,128,217,1) 0%, rgba(130,71,229,1) 100%)',
    icon: generateIconUrl(ChainId.zkEVM, 'svg'),
    env: 'mainnet',
    scanLink: 'https://zkevm.polygonscan.com/',
    scanName: 'Polygonscan',
    coingecko: 'polygon-zkevm',
    rpc: {
      rpcUrl: 'https://zkevm-rpc.com',
      nativeCurrency: {
        symbol: 'ETH',
        name: 'ETH'
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
    coingecko: 'zksync',
    rpc: {
      rpcUrl: 'https://1rpc.io/zksync2-era',
      nativeCurrency: {
        symbol: 'ETH',
        name: 'ETH'
      }
    }
  },
};
