import { PartialRecord } from '../types/common';
import { Token, TokenTableName } from '../models/token';
import { ChainId } from '../crypto/networks';
import { TokenName } from '../enums/tokenName';
import { Token as UniswapToken } from '@uniswap/sdk';

type TokenMapping = PartialRecord<TokenName, PartialRecord<ChainId, Token>>;

export const tokenNameWithChainPrefix = (tokenName: TokenName | string, chainId: ChainId) => {
  switch (chainId) {
    case ChainId.Arbitrum:
      return `arbitrum_${tokenName}` as TokenTableName
    case ChainId.Arthera:
      return `arthera_${tokenName}` as TokenTableName
    case ChainId.Avalanche:
      return `avalanche_${tokenName}` as TokenTableName
    case ChainId.Base:
      return `base_${tokenName}` as TokenTableName
    case ChainId.Berachain:
      return `berachain_${tokenName}` as TokenTableName
    case ChainId.Berachain_bArtio:
      return `berachain_bartio_${tokenName}` as TokenTableName
    case ChainId.Blast:
      return `blast_${tokenName}` as TokenTableName
    case ChainId.Bsc:
      return `bsc_${tokenName}` as TokenTableName
    case ChainId.Celo:
      return `celo_${tokenName}` as TokenTableName
    case ChainId.Eon:
      return `eon_${tokenName}` as TokenTableName
    case ChainId.Evmos:
      return `evmos_${tokenName}` as TokenTableName
    case ChainId.Fantom:
      return `fantom_${tokenName}` as TokenTableName
    case ChainId.Flare:
      return `flare_${tokenName}` as TokenTableName
    case ChainId.Fuse:
      return `fuse_${tokenName}` as TokenTableName
    case ChainId.Haven1:
      return `haven1_${tokenName}` as TokenTableName
    case ChainId.Hedera:
      return `hedera_${tokenName}` as TokenTableName
    case ChainId.Hemi:
      return `hemi_${tokenName}` as TokenTableName
    case ChainId.HyperEVM:
      return `hyperevm_${tokenName}` as TokenTableName
    case ChainId.Ink:
      return `ink_${tokenName}` as TokenTableName
    case ChainId.Ink_Sepolia:
      return `ink_sepolia_${tokenName}` as TokenTableName
    case ChainId.Kava:
      return `kava_${tokenName}` as TokenTableName
    case ChainId.Linea:
      return `linea_${tokenName}` as TokenTableName
    case ChainId.Manta_Pacific:
      return `manta_pacific_${tokenName}` as TokenTableName
    case ChainId.Mantle:
      return `mantle_${tokenName}` as TokenTableName
    case ChainId.Mode:
      return `mode_${tokenName}` as TokenTableName
    case ChainId.Mumbai:
      return `mum_${tokenName}` as TokenTableName
    case ChainId.Nibiru:
      return `nibiru_${tokenName}` as TokenTableName
    case ChainId.Polygon:
      return `pol_${tokenName}` as TokenTableName
    case ChainId.opBNB:
      return `opbnb_${tokenName}` as TokenTableName
    case ChainId.Real:
      return `real_${tokenName}` as TokenTableName
    case ChainId.Rootstock:
      return `rootstock_${tokenName}` as TokenTableName
    case ChainId.Scroll:
      return `scroll_${tokenName}` as TokenTableName
    case ChainId.Skale_Europa:
      return `skale_europa_${tokenName}` as TokenTableName
    case ChainId.Sonic:
      return `sonic_${tokenName}` as TokenTableName
    case ChainId.Taiko:
      return `taiko_${tokenName}` as TokenTableName
    case ChainId.Unichain:
      return `unichain_${tokenName}` as TokenTableName
    case ChainId.Zircuit:
      return `zircuit_${tokenName}` as TokenTableName
    case ChainId.zkEVM:
      return `zkevm_${tokenName}` as TokenTableName
    case ChainId.zkSync:
      return `zksync_${tokenName}` as TokenTableName
    default:
      return tokenName as TokenTableName
    }
}

export const TOKENS: TokenMapping = {
  [TokenName.ICHI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ICHI,
      tableName: TokenName.ICHI,
      address: '0x903bEF1736CDdf2A537176cf3C64579C3867A881',
      decimals: 9,
      displayName: 'ICHI',
      symbol: 'ICHI',
      fullName: 'ICHI',
      isOneToken: false,
      atCoingecko: false,
      targetVaultStrength: 0.1
    },
    // NOTE: This is the same ICHI as ICHI_V2, but since Polygon my reference TokenName.ICHI, then we need to duplicate it here for that reference
    [ChainId.Polygon]: {
      tokenName: TokenName.ICHI,
      tableName: `pol_${TokenName.ICHI}`,
      address: '0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6',
      decimals: 18,
      displayName: 'ICHI',
      symbol: 'ICHI',
      fullName: 'ICHI',
      atCoingecko: false,
      isOneToken: false,
      targetVaultStrength: 0.1
    },
    [ChainId.Arbitrum]: {
      tokenName: TokenName.ICHI,
      tableName: `arbitrum_${TokenName.ICHI}`,
      address: '0xadf5DD3E51bF28aB4F07e684eCF5d00691818790',
      decimals: 18,
      displayName: 'ICHI',
      symbol: 'ICHI',
      fullName: 'ICHI',
      atCoingecko: false,
      isOneToken: false,
      targetVaultStrength: 0.1
    },
    [ChainId.Bsc]: {
      tokenName: TokenName.ICHI,
      tableName: tokenNameWithChainPrefix(TokenName.ICHI, ChainId.Bsc),
      address: '0x0EF4A107b48163ab4b57FCa36e1352151a587Be4',
      decimals: 18,
      displayName: 'ICHI',
      symbol: 'ICHI',
      fullName: 'ICHI',
      atCoingecko: false,
      isOneToken: false,
      targetVaultStrength: 0.1
    },
    // Unclear if this should be here or below, in the ichi-api-updater it uses ichi not ichi_v2, but that's ambiguous regardless
    [ChainId.Mumbai]: {
      tokenName: TokenName.ICHI,
      tableName: `mum_${TokenName.ICHI}`,
      symbol: 'ICHI',
      atCoingecko: false,
      address: '0x36D7A88Df8B44D966DaC25c0DB0C000AE4d2306a',
      decimals: 18,
      displayName: 'ICHI',
      fullName: 'ICHI',
      isOneToken: false,
      targetVaultStrength: 0.1
    }
  },
  [TokenName.ICHI_V2]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ICHI_V2,
      tableName: TokenName.ICHI_V2,
      address: '0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6',
      decimals: 18,
      displayName: 'ICHI',
      symbol: 'ICHI',
      fullName: 'ICHI',
      isOneToken: false,
      atCoingecko: true,
      targetVaultStrength: 0.12
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.ICHI_V2,
      tableName: `pol_${TokenName.ICHI_V2}`,
      address: '0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6',
      decimals: 18,
      displayName: 'ICHI',
      symbol: 'ICHI',
      fullName: 'ICHI',
      atCoingecko: false,
      isOneToken: false,
      targetVaultStrength: 0.12
    },
    [ChainId.Arbitrum]: {
      tokenName: TokenName.ICHI,
      tableName: `arbitrum_${TokenName.ICHI}`,
      address: '0xadf5DD3E51bF28aB4F07e684eCF5d00691818790',
      decimals: 18,
      displayName: 'ICHI',
      symbol: 'ICHI',
      fullName: 'ICHI',
      atCoingecko: false,
      isOneToken: false,
      targetVaultStrength: 0.1
    },
    [ChainId.Bsc]: {
      tokenName: TokenName.ICHI,
      tableName: tokenNameWithChainPrefix(TokenName.ICHI, ChainId.Bsc),
      address: '0x0EF4A107b48163ab4b57FCa36e1352151a587Be4',
      decimals: 18,
      displayName: 'ICHI',
      symbol: 'ICHI',
      fullName: 'ICHI',
      atCoingecko: false,
      isOneToken: false,
      targetVaultStrength: 0.1
    },
    // [ChainId.Mumbai]: {
    //   tokenName: TokenName.ICHI_V2,
    //   tableName: `mum_${TokenName.ICHI_V2}`,
    //   symbol: 'ICHI',
    //   atCoingecko: false,
    //   address: '0x36D7A88Df8B44D966DaC25c0DB0C000AE4d2306a',
    //   decimals: 18,
    //   displayName: 'ICHI',
    //   isOneToken: false
    // }
  },
  [TokenName.XICHI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.XICHI,
      tableName: TokenName.XICHI,
      address: '0x70605a6457B0A8fBf1EEE896911895296eAB467E',
      decimals: 9,
      displayName: 'xICHI',
      symbol: 'xICHI',
      fullName: 'IchiStake',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName['1INCH']]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName['1INCH'],
      tableName: TokenName['1INCH'],
      address: '0x111111111117dC0aa78b770fA6A738034120C302',
      decimals: 18,
      displayName: '1INCH',
      symbol: '1INCH',
      fullName: '1INCH Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.A3A]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.A3A,
      tableName: `pol_${TokenName.A3A}`,
      address: '0x58c7B2828e7F2B2CaA0cC7fEef242fA3196d03df',
      decimals: 18,
      displayName: 'A3A',
      symbol: 'A3A',
      fullName: '3A Utility Token (FXERC20) (fxA3A)',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.AAVE]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.AAVE,
      tableName: TokenName.AAVE,
      address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
      decimals: 18,
      displayName: 'AAVE',
      symbol: 'AAVE',
      fullName: 'Aave Token',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.AAVE,
      tableName: `pol_${TokenName.AAVE}`,
      address: '0xD6DF932A45C0f255f85145f286eA0b292B21C90B',
      decimals: 18,
      displayName: 'AAVE',
      symbol: 'AAVE',
      fullName: 'Aave Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.ABOND]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ABOND,
      tableName: TokenName.ABOND,
      address: '0xe6828D65bf5023AE1851D90D8783Cc821ba7eeE1',
      decimals: 18,
      displayName: 'ABOND',
      symbol: 'ABOND',
      fullName: 'ApeBond',
      isOneToken: false,
      atCoingecko: false
    },
    [ChainId.Bsc]: {
      tokenName: TokenName.ABOND,
      tableName: `bsc_${TokenName.ABOND}`,
      address: '0x34294AfABCbaFfc616ac6614F6d2e17260b78BEd',
      decimals: 18,
      displayName: 'ABOND',
      symbol: 'ABOND',
      fullName: 'ApeBond',
      isOneToken: false,
      atCoingecko: false
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.ABOND,
      tableName: `pol_${TokenName.ABOND}`,
      address: '0xe6828D65bf5023AE1851D90D8783Cc821ba7eeE1',
      decimals: 18,
      displayName: 'ABOND',
      symbol: 'ABOND',
      fullName: 'ApeBond',
      isOneToken: false,
      atCoingecko: false
    },
  },
  [TokenName.AGEUR]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.AGEUR,
      tableName: TokenName.AGEUR,
      address: '0x1a7e4e63778b4f12a199c062f3efdd288afcbce8',
      decimals: 18,
      displayName: 'agEUR',
      symbol: 'agEUR',
      fullName: 'agEUR',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.AGEUR,
      tableName: `pol_${TokenName.AGEUR}`,
      address: '0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4',
      decimals: 18,
      displayName: 'agEUR',
      symbol: 'agEUR',
      fullName: 'agEUR',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.AIOZ]: {
    [ChainId.Bsc]: {
      tokenName: TokenName.AIOZ,
      tableName: tokenNameWithChainPrefix(TokenName.AIOZ, ChainId.Bsc),
      address: '0x33d08D8C7a168333a85285a68C0042b39fC3741D',
      decimals: 18,
      displayName: 'AIOZ',
      symbol: 'AIOZ',
      fullName: 'AIOZ Network',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.ALLY]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ALLY,
      tableName: TokenName.ALLY,
      address: '0x1aa1e61369874bae3444A8Ef6528d6b13D6952EF',
      decimals: 18,
      displayName: 'ALLY',
      symbol: 'ALLY',
      fullName: 'ICHI Ally',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.ARB]: {
    [ChainId.Arbitrum]: {
      tokenName: TokenName.ARB,
      tableName: `arbitrum_${TokenName.ARB}`,
      address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
      decimals: 18,
      displayName: 'ARB',
      symbol: 'ARB',
      fullName: 'ARB Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.ASTO]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ASTO,
      tableName: TokenName.ASTO,
      address: '0x823556202e86763853b40e9cde725f412e294689',
      decimals: 18,
      displayName: 'ASTO',
      symbol: 'ASTO',
      fullName: 'Altered State Machine Utility Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.AXLLQDR]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.AXLLQDR,
      tableName: tokenNameWithChainPrefix(TokenName.AXLLQDR, ChainId.Polygon),
      address: '0x0294D8eB7857D43FEb1210Db72456d41481f9Ede',
      decimals: 18,
      displayName: 'axlLQDR',
      symbol: 'axlLQDR',
      fullName: 'Axelar Wrapped Lqdr',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.AXLUSDC]: {
    [ChainId.Fantom]: {
      tokenName: TokenName.AXLUSDC,
      tableName: tokenNameWithChainPrefix(TokenName.AXLUSDC, ChainId.Fantom),
      address: '0x1B6382DBDEa11d97f24495C9A90b7c88469134a4',
      decimals: 6,
      displayName: 'axlUSDC',
      symbol: 'axlUSDC',
      fullName: 'Axelar Wrapped USDC',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.BAL]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.BAL,
      tableName: TokenName.BAL,
      address: '0xba100000625a3754423978a60c9317c58a424e3D',
      decimals: 18,
      displayName: 'BAL',
      symbol: 'BAL',
      fullName: 'Balancer',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.BAL,
      tableName: `pol_${TokenName.BAL}`,
      address: '0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3',
      decimals: 18,
      displayName: 'BAL',
      symbol: 'BAL',
      fullName: 'Balancer',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.BANK]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.BANK,
      tableName: TokenName.BANK,
      address: '0x2d94AA3e47d9D5024503Ca8491fcE9A2fB4DA198',
      decimals: 18,
      displayName: 'BANK',
      symbol: 'BANK',
      fullName: 'Bankless Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.BAT]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.BAT,
      tableName: TokenName.BAT,
      address: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
      decimals: 18,
      displayName: 'BAT',
      symbol: 'BAT',
      fullName: 'Basic Attention Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.BIT]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.BIT,
      tableName: TokenName.BIT,
      address: '0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5',
      decimals: 18,
      displayName: 'BIT',
      symbol: 'BIT',
      fullName: 'BitDAO',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.BLUE]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.BLUE,
      tableName: TokenName.BLUE,
      address: '0x95D8Bf2F57cf973251972b496dC6B1d9C6b5bCe3',
      decimals: 18,
      displayName: 'BLUE',
      symbol: 'BLUE',
      fullName: 'BLUE',
      isOneToken: false,
      atCoingecko: false,
    }
  },
  [TokenName.BNT]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.BNT,
      tableName: TokenName.BNT,
      address: '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C',
      decimals: 18,
      displayName: 'BNT',
      symbol: 'BNT',
      fullName: 'Bancor',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.BOBA]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.BOBA,
      tableName: TokenName.BOBA,
      address: '0x42bbfa2e77757c645eeaad1655e0911a7553efbc',
      decimals: 18,
      displayName: 'BOBA',
      symbol: 'BOBA',
      fullName: 'Boba Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.BOOT]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.BOOT,
      tableName: TokenName.BOOT,
      address: '0x0337fe811809A0aaf9B5D07945b39E473dE4c46E',
      decimals: 18,
      displayName: 'BOOT',
      symbol: 'BOOT',
      fullName: 'Boot Finance',
      parentOneToken: TokenName.BOOT_USD,
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.BTCB]: {
    [ChainId.Bsc]: {
      tokenName: TokenName.BTCB,
      tableName: `bsc_${TokenName.BTCB}`,
      address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
      decimals: 18,
      displayName: 'BTCB',
      symbol: 'BTCB',
      fullName: 'Binance-Peg BTCB Token',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.opBNB]: {
      tokenName: TokenName.BTCB,
      tableName: tokenNameWithChainPrefix(TokenName.BTCB, ChainId.opBNB),
      address: '0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2',
      decimals: 18,
      displayName: 'BTCB',
      symbol: 'BTCB',
      fullName: 'BTCB Token',
      isOneToken: false,
      atCoingecko: false
    },
  },
  [TokenName.CAKE]: {
    [ChainId.Bsc]: {
      tokenName: TokenName.CAKE,
      tableName: `bsc_${TokenName.CAKE}`,
      address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      decimals: 18,
      displayName: 'CAKE',
      symbol: 'CAKE',
      fullName: 'PancakeSwap Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.CASH]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.CASH,
      tableName: `pol_${TokenName.CASH}`,
      address: '0x5D066D022EDE10eFa2717eD3D79f22F949F8C175',
      decimals: 18,
      displayName: 'CASH',
      symbol: 'CASH',
      fullName: 'CASH',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.CEL]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.CEL,
      tableName: TokenName.CEL,
      address: '0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d',
      decimals: 4,
      displayName: 'CEL',
      symbol: 'CEL',
      fullName: 'Celsius',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.CEUR]: {
    [ChainId.Celo]: {
      tokenName: TokenName.CEUR,
      tableName: tokenNameWithChainPrefix(TokenName.CEUR, ChainId.Celo),
      address: '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73',
      decimals: 18,
      displayName: 'cEUR',
      symbol: 'cEUR',
      fullName: 'Celo Euro',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.CHO]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.CHO,
      tableName: TokenName.CHO,
      address: '0xBBa39Fd2935d5769116ce38d46a71bde9cf03099',
      decimals: 18,
      displayName: 'CHO',
      symbol: 'CHO',
      fullName: 'choise.com',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.CLEO]: {
    [ChainId.Mantle]: {
      tokenName: TokenName.CLEO,
      tableName: tokenNameWithChainPrefix(TokenName.CLEO, ChainId.Mantle),
      address: '0xC1E0C8C30F251A07a894609616580ad2CEb547F2',
      decimals: 18,
      displayName: 'CLEO',
      symbol: 'CLEO',
      fullName: 'Cleopatra',
      isOneToken: false,
      atCoingecko: false,
    },
  },
  [TokenName.CLXY]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.CLXY,
      tableName: tokenNameWithChainPrefix(TokenName.CLXY, ChainId.Hedera),
      address: '0x00000000000000000000000000000000000d1ea6',
      decimals: 6,
      displayName: 'CLXY',
      symbol: 'CLXY',
      fullName: 'Calaxy Tokens',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.COC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.COC,
      tableName: TokenName.COC,
      address: '0xC8D9871a79551Ab4439C9E08f12962E3785f0437',
      decimals: 18,
      displayName: 'COC',
      symbol: 'COC',
      fullName: 'CryptoOracle Collective',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.COMP]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.COMP,
      tableName: TokenName.COMP,
      address: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
      decimals: 18,
      displayName: 'COMP',
      symbol: 'COMP',
      fullName: 'Compound',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.CONE]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.CONE,
      tableName: tokenNameWithChainPrefix(TokenName.CONE, ChainId.Polygon),
      address: '0xbA777aE3a3C91fCD83EF85bfe65410592Bdd0f7c',
      decimals: 18,
      displayName: 'CONE',
      symbol: 'CONE',
      fullName: 'BitCone',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.COW]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.COW,
      tableName: TokenName.COW,
      address: '0xDEf1CA1fb7FBcDC777520aa7f396b4E015F497aB',
      decimals: 18,
      displayName: 'COW',
      symbol: 'COW',
      fullName: 'CoW Protocol Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.CRS]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.CRS,
      tableName: tokenNameWithChainPrefix(TokenName.CRS, ChainId.Polygon),
      address: '0x731C79f054DF3A567584Ee21A95399d343103143',
      decimals: 18,
      displayName: 'CRS',
      symbol: 'CRS',
      fullName: 'Corgi Studio',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.CRV]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.CRV,
      tableName: TokenName.CRV,
      address: '0xD533a949740bb3306d119CC777fa900bA034cd52',
      decimals: 18,
      displayName: 'CRV',
      symbol: 'CRV',
      fullName: 'Curve DAO',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.CRV,
      tableName: `pol_${TokenName.CRV}`,
      address: '0x172370d5Cd63279eFa6d502DAB29171933a610AF',
      decimals: 18,
      displayName: 'CRV',
      symbol: 'CRV',
      fullName: 'Curve DAO',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.CUSD]: {
    [ChainId.Celo]: {
      tokenName: TokenName.CUSD,
      tableName: tokenNameWithChainPrefix(TokenName.CUSD, ChainId.Celo),
      address: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
      decimals: 18,
      displayName: 'cUSD',
      symbol: 'cUSD',
      fullName: 'Celo Dollar',
      isOneToken: false,
      atCoingecko: false,
    }
  },
  [TokenName.DAI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.DAI,
      tableName: TokenName.DAI,
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      decimals: 18,
      displayName: 'DAI',
      symbol: 'DAI',
      fullName: 'Dai Stablecoin',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.DAIHTS]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.DAIHTS,
      tableName: tokenNameWithChainPrefix(TokenName.DAIHTS, ChainId.Hedera),
      address: '0x0000000000000000000000000000000000101af5',
      decimals: 8,
      displayName: 'DAI[hts]',
      symbol: 'DAI[hts]',
      fullName: 'Dai Stablecoin',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.DEUS]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.DEUS,
      tableName: TokenName.DEUS,
      address: '0xDE5ed76E7c05eC5e4572CfC88d1ACEA165109E44',
      decimals: 18,
      displayName: 'DEUS',
      symbol: 'DEUS',
      fullName: 'DEUS',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.DODO]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.DODO,
      tableName: TokenName.DODO,
      address: '0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd',
      decimals: 18,
      displayName: 'DODO',
      symbol: 'DODO',
      fullName: 'DODO bird',
      parentOneToken: TokenName.ONE_DODO,
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.DPI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.DPI,
      tableName: TokenName.DPI,
      address: '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b',
      decimals: 18,
      displayName: 'DPI',
      symbol: 'DPI',
      fullName: 'DefiPulse Index',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.DPI,
      tableName: `pol_${TokenName.DPI}`,
      address: '0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369',
      decimals: 18,
      displayName: 'DPI',
      symbol: 'DPI',
      fullName: 'DefiPulse Index',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.ERN]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.ERN,
      tableName: tokenNameWithChainPrefix(TokenName.ERN, ChainId.Polygon),
      address: '0xC3a9a54c043f348027fffAac0F2F996123A19bF4',
      decimals: 18,
      displayName: 'ERN',
      symbol: 'ERN',
      fullName: 'Ethos Reserve Note',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Arbitrum]: {
      tokenName: TokenName.ERN,
      tableName: tokenNameWithChainPrefix(TokenName.ERN, ChainId.Arbitrum),
      address: '0xa334884bF6b0A066d553D19e507315E839409e62',
      decimals: 18,
      displayName: 'ERN',
      symbol: 'ERN',
      fullName: 'Ethos Reserve Note',
      isOneToken: false,
      atCoingecko: true
    },
  },
  [TokenName.ETH]: {
    [ChainId.Bsc]: {
      tokenName: TokenName.ETH,
      tableName: `bsc_${TokenName.ETH}`,
      address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      decimals: 18,
      displayName: 'ETH',
      symbol: 'ETH',
      fullName: 'Binance-Peg Ethereum Token',
      isOneToken: false,
      atCoingecko: true,
    },
    [ChainId.opBNB]: {
      tokenName: TokenName.ETH,
      tableName: tokenNameWithChainPrefix(TokenName.ETH, ChainId.opBNB),
      address: '0xE7798f023fC62146e8Aa1b36Da45fb70855a77Ea',
      decimals: 18,
      displayName: 'ETH',
      symbol: 'ETH',
      fullName: 'Ethereum Token',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.ETHENA]: {
    [ChainId.Bsc]: {
      tokenName: TokenName.ETHENA,
      tableName: tokenNameWithChainPrefix(TokenName.ETHENA, ChainId.Bsc),
      address: '0xafbe3b8b0939a5538DE32f7752A78e08C8492295',
      decimals: 18,
      displayName: 'eTHENA',
      symbol: 'eTHENA',
      fullName: 'eTHENA',
      isOneToken: false,
      atCoingecko: false
    },
  },
  [TokenName.EURO3]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.EURO3,
      tableName: `pol_${TokenName.EURO3}`,
      address: '0xA0e4c84693266a9d3BBef2f394B33712c76599Ab',
      decimals: 18,
      displayName: 'EURO3',
      symbol: 'EURO3',
      fullName: 'EURO3',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.FBX]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.FBX,
      tableName: `pol_${TokenName.FBX}`,
      address: '0xD125443F38A69d776177c2B9c041f462936F8218',
      decimals: 18,
      displayName: 'FBX',
      symbol: 'FBX',
      fullName: 'FireBotToken',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.FIDU]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.FIDU,
      tableName: TokenName.FIDU,
      address: '0x6a445E9F40e0b97c92d0b8a3366cEF1d67F700BF',
      decimals: 18,
      displayName: 'FIDU',
      symbol: 'FIDU',
      fullName: 'Fidu',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.FIL]: {
    [ChainId.Bsc]: {
      tokenName: TokenName.FIL,
      tableName: tokenNameWithChainPrefix(TokenName.FIL, ChainId.Bsc),
      address: '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
      decimals: 18,
      displayName: 'FIL',
      symbol: 'FIL',
      fullName: 'Filecoin',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.FOX]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.FOX,
      tableName: TokenName.FOX,
      address: '0xc770EEfAd204B5180dF6a14Ee197D99d808ee52d',
      decimals: 18,
      displayName: 'FOX',
      symbol: 'FOX',
      fullName: 'ShapeShift FOX',
      parentOneToken: TokenName.ONE_FOX,
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.FRAX]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.FRAX,
      tableName: TokenName.FRAX,
      address: '0x853d955acef822db058eb8505911ed77f175b99e',
      decimals: 18,
      displayName: 'FRAX',
      symbol: 'FRAX',
      fullName: 'Frax',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.FRAX,
      tableName: `pol_${TokenName.FRAX}`,
      address: '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89',
      decimals: 18,
      displayName: 'FRAX',
      symbol: 'FRAX',
      fullName: 'Frax',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Arbitrum]: {
      tokenName: TokenName.FRAX,
      tableName: tokenNameWithChainPrefix(TokenName.FRAX, ChainId.Arbitrum),
      address: '0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F',
      decimals: 18,
      displayName: 'FRAX',
      symbol: 'FRAX',
      fullName: 'Frax',
      isOneToken: false,
      atCoingecko: true,
    },
    [ChainId.Bsc]: {
      tokenName: TokenName.FRAX,
      tableName: tokenNameWithChainPrefix(TokenName.FRAX, ChainId.Bsc),
      address: '0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40',
      decimals: 18,
      displayName: 'FRAX',
      symbol: 'FRAX',
      fullName: 'Frax',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.FRXETH]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.FRXETH,
      tableName: TokenName.FRXETH,
      address: '0x5e8422345238f34275888049021821e8e08caa1f',
      decimals: 18,
      displayName: 'frxETH',
      symbol: 'frxETH',
      fullName: 'Frax Ether',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.FRXETH,
      tableName: `pol_${TokenName.FRXETH}`,
      address: '0xEe327F889d5947c1dc1934Bb208a1E792F953E96',
      decimals: 18,
      displayName: 'frxETH',
      symbol: 'frxETH',
      fullName: 'Frax Ether',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Arbitrum]: {
      tokenName: TokenName.FRXETH,
      tableName: tokenNameWithChainPrefix(TokenName.FRXETH, ChainId.Arbitrum),
      address: '0x178412e79c25968a32e89b11f63B33F733770c2A',
      decimals: 18,
      displayName: 'frxETH',
      symbol: 'frxETH',
      fullName: 'Frax Ether',
      isOneToken: false,
      atCoingecko: true,
    },
    [ChainId.Bsc]: {
      tokenName: TokenName.FRXETH,
      tableName: tokenNameWithChainPrefix(TokenName.FRXETH, ChainId.Bsc),
      address: '0x64048A7eEcF3a2F1BA9e144aAc3D7dB6e58F555e',
      decimals: 18,
      displayName: 'frxETH',
      symbol: 'frxETH',
      fullName: 'Frax Ether',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.FUSE]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.FUSE,
      tableName: TokenName.FUSE,
      address: '0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d',
      decimals: 18,
      displayName: 'FUSE',
      symbol: 'FUSE',
      fullName: 'Fuse Token',
      parentOneToken: TokenName.ONE_FUSE,
      isOneToken: false,
      atCoingecko: true,
      targetVaultStrength: 0.1
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.FUSE,
      tableName: tokenNameWithChainPrefix(TokenName.FUSE, ChainId.Polygon),
      address: '0x6b021b3f68491974bE6D4009fEe61a4e3C708fD6',
      decimals: 18,
      displayName: 'FUSE',
      symbol: 'FUSE',
      fullName: 'Fuse Token',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.FXS]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.FXS,
      tableName: TokenName.FXS,
      address: '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0',
      decimals: 18,
      displayName: 'FXS',
      symbol: 'FXS',
      fullName: 'Frax Share',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.GARBAGE]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.GARBAGE,
      tableName: TokenName.GARBAGE,
      address: '0x619e398858a3110dF4d89056a15A40338a01e65F',
      decimals: 18,
      displayName: '$GARBAGE',
      symbol: '$GARBAGE',
      fullName: '$GARBAGE',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.GHST]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.GHST,
      tableName: TokenName.GHST,
      address: '0x3f382dbd960e3a9bbceae22651e88158d2791550',
      decimals: 18,
      displayName: 'GHST',
      symbol: 'GHST',
      fullName: 'Aavegotchi GHST Token',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.GHST,
      tableName: `pol_${TokenName.GHST}`,
      address: '0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7',
      decimals: 18,
      displayName: 'GHST',
      symbol: 'GHST',
      fullName: 'Aavegotchi GHST Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.GIV]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.GIV,
      tableName: TokenName.GIV,
      address: '0x900dB999074d9277c5DA2A43F252D74366230DA0',
      decimals: 18,
      displayName: 'GIV',
      symbol: 'GIV',
      fullName: 'Giveth',
      parentOneToken: TokenName.ONE_GIV,
      isOneToken: false,
      atCoingecko: true,
      targetVaultStrength: 0.1
    }
  },
  [TokenName.GNO]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.GNO,
      tableName: TokenName.GNO,
      address: '0x6810e776880C02933D47DB1b9fc05908e5386b96',
      decimals: 18,
      displayName: 'GNO',
      symbol: 'GNO',
      fullName: 'Gnosis',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.GOVI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.GOVI,
      tableName: TokenName.GOVI,
      address: '0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107',
      decimals: 18,
      displayName: 'GOVI',
      symbol: 'GOVI',
      fullName: 'GOVI',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.GOVI,
      tableName: `pol_${TokenName.GOVI}`,
      address: '0x43Df9c0a1156c96cEa98737b511ac89D0e2A1F46',
      decimals: 18,
      displayName: 'GOVI',
      symbol: 'GOVI',
      fullName: 'GOVI',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.GRELF]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.GRELF,
      tableName: tokenNameWithChainPrefix(TokenName.GRELF, ChainId.Hedera),
      address: '0x000000000000000000000000000000000011afa2',
      decimals: 8,
      displayName: 'GRELF',
      symbol: 'GRELF',
      fullName: 'GRELF',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.HOME]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.HOME,
      tableName: TokenName.HOME,
      address: '0xb8919522331c59f5c16bdfaa6a121a6e03a91f62',
      decimals: 6,
      displayName: 'HOME',
      symbol: 'HOME',
      fullName: 'Home',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.HBARX]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.HBARX,
      tableName: tokenNameWithChainPrefix(TokenName.HBARX, ChainId.Hedera),
      address: '0x00000000000000000000000000000000000cba44',
      decimals: 8,
      displayName: 'HBARX',
      symbol: 'HBARX',
      fullName: 'HBARX',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.HBR]: {
    [ChainId.Bsc]: {
      tokenName: TokenName.HBR,
      tableName: tokenNameWithChainPrefix(TokenName.HBR, ChainId.Bsc),
      address: '0x42c95788F791a2be3584446854c8d9BB01BE88A9',
      decimals: 18,
      displayName: 'HBR',
      symbol: 'HBR',
      fullName: 'Harbor Token',
      isOneToken: false,
      atCoingecko: false
    },
  },
  [TokenName.HST]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.HST,
      tableName: tokenNameWithChainPrefix(TokenName.HST, ChainId.Hedera),
      address: '0x00000000000000000000000000000000000ec585',
      decimals: 8,
      displayName: 'HST',
      symbol: 'HST',
      fullName: 'HeadStarter',
      isOneToken: false,
      atCoingecko: false,
    },
  },
  [TokenName.GRAI]: {
    [ChainId.Arbitrum]: {
      tokenName: TokenName.GRAI,
      tableName: tokenNameWithChainPrefix(TokenName.GRAI, ChainId.Arbitrum),
      address: '0x894134a25a5faC1c2C26F1d8fBf05111a3CB9487',
      decimals: 18,
      displayName: 'GRAI',
      symbol: 'GRAI',
      fullName: 'Gravita Debt Token',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Mantle]: {
      tokenName: TokenName.GRAI,
      tableName: tokenNameWithChainPrefix(TokenName.GRAI, ChainId.Mantle),
      address: '0x894134a25a5faC1c2C26F1d8fBf05111a3CB9487',
      decimals: 18,
      displayName: 'GRAI',
      symbol: 'GRAI',
      fullName: 'Gravita Debt Token',
      isOneToken: false,
      atCoingecko: false,
    },
    [ChainId.zkEVM]: {
      tokenName: TokenName.GRAI,
      tableName: tokenNameWithChainPrefix(TokenName.GRAI, ChainId.zkEVM),
      address: '0xCA68ad4EE5c96871EC6C6dac2F714a8437A3Fe66',
      decimals: 18,
      displayName: 'GRAI',
      symbol: 'GRAI',
      fullName: 'Gravita Debt Token',
      isOneToken: false,
      atCoingecko: false,
    },
  },
  [TokenName.IMX]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.IMX,
      tableName: TokenName.IMX,
      address: '0xf57e7e7c23978c3caec3c3548e3d615c346e79ff',
      decimals: 18,
      displayName: 'IMX',
      symbol: 'IMX',
      fullName: 'ImmutableX',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.JAM]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.JAM,
      tableName: tokenNameWithChainPrefix(TokenName.JAM, ChainId.Hedera),
      address: '0x000000000000000000000000000000000001f385',
      decimals: 8,
      displayName: 'JAM',
      symbol: 'JAM',
      fullName: 'Tune.FM',
      isOneToken: false,
      atCoingecko: true
    },
  },
  [TokenName.JRT]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.JRT,
      tableName: TokenName.JRT,
      address: '0x8a9c67fee641579deba04928c4bc45f66e26343a',
      decimals: 18,
      displayName: 'JRT',
      symbol: 'JRT',
      fullName: 'Jarvis Reward Token',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.JRT,
      tableName: `pol_${TokenName.JRT}`,
      address: '0x596eBE76e2DB4470966ea395B0d063aC6197A8C5',
      decimals: 18,
      displayName: 'JRT',
      symbol: 'JRT',
      fullName: 'Jarvis Reward Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.L2DAO]: {
    [ChainId.Arbitrum]: {
      tokenName: TokenName.L2DAO,
      tableName: `arbitrum_${TokenName.L2DAO}`,
      address: '0x2CaB3abfC1670D1a452dF502e216a66883cDf079',
      decimals: 18,
      displayName: 'L2DAO',
      symbol: 'L2DAO',
      fullName: 'Layer2DAO',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.LDO]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.LDO,
      tableName: TokenName.LDO,
      address: '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32',
      decimals: 18,
      displayName: 'LDO',
      symbol: 'LDO',
      fullName: 'Lido DAO Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.LINK]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.LINK,
      tableName: TokenName.LINK,
      address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
      decimals: 18,
      displayName: 'LINK',
      symbol: 'LINK',
      fullName: 'ChainLink Token',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.LINK,
      tableName: `pol_${TokenName.LINK}`,
      address: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
      decimals: 18,
      displayName: 'LINK',
      symbol: 'LINK',
      fullName: 'ChainLink Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.LINKHTS]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.LINKHTS,
      tableName: tokenNameWithChainPrefix(TokenName.LINKHTS, ChainId.Hedera),
      address: '0x0000000000000000000000000000000000101b07',
      decimals: 8,
      displayName: 'LINK[hts]',
      symbol: 'LINK[hts]',
      fullName: 'ChainLink Token',
      isOneToken: false,
      atCoingecko: false,
    }
  },
  [TokenName.LISUSD]: {
    [ChainId.Bsc]: {
      tokenName: TokenName.LISUSD,
      tableName: tokenNameWithChainPrefix(TokenName.LISUSD, ChainId.Bsc),
      address: '0x0782b6d8c4551B9760e74c0545a9bCD90bdc41E5',
      decimals: 18,
      displayName: 'lisUSD',
      symbol: 'lisUSD',
      fullName: 'Lista USD',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.LIVERETRO]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.LIVERETRO,
      tableName: `pol_${TokenName.LIVERETRO}`,
      address: '0xCaAF554900E33ae5DBc66ae9f8ADc3049B7D31dB',
      decimals: 18,
      displayName: 'liveRETRO',
      symbol: 'liveRETRO',
      fullName: 'liveRETRO',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.LMR]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.LMR,
      tableName: TokenName.LMR,
      address: '0x4b1D0b9F081468D780Ca1d5d79132b64301085d1',
      decimals: 8,
      displayName: 'LMR',
      symbol: 'LMR',
      fullName: 'Lumerin',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Arbitrum]: {
      tokenName: TokenName.LMR,
      tableName: `arbitrum_${TokenName.LMR}`,
      address: '0x0FC0c323Cf76E188654D63D62e668caBeC7a525b',
      decimals: 8,
      displayName: 'LMR',
      symbol: 'LMR',
      fullName: 'Lumerin',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.LYNX]: {
    [ChainId.Linea]: {
      tokenName: TokenName.LYNX,
      tableName: tokenNameWithChainPrefix(TokenName.LYNX, ChainId.Linea),
      address: '0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af',
      decimals: 18,
      displayName: 'LYNX',
      symbol: 'LYNX',
      fullName: 'Lynex',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.MATIC]: {
    [ChainId.zkEVM]: {
      tokenName: TokenName.MATIC,
      tableName: tokenNameWithChainPrefix(TokenName.MATIC, ChainId.zkEVM),
      address: '0xa2036f0538221a77A3937F1379699f44945018d0',
      decimals: 18,
      displayName: 'MATIC',
      symbol: 'MATIC',
      fullName: 'Matic Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.MATICX]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.MATICX,
      tableName: `pol_${TokenName.MATICX}`,
      address: '0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6',
      decimals: 18,
      displayName: 'MATICX',
      symbol: 'MATICX',
      fullName: 'Liquid Staking Matic',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.MET]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.MET,
      tableName: TokenName.MET,
      address: '0x2Ebd53d035150f328bd754D6DC66B99B0eDB89aa',
      decimals: 18,
      displayName: 'MET',
      symbol: 'MET',
      fullName: 'Metronome2',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.METH]: {
    [ChainId.Mantle]: {
      tokenName: TokenName.METH,
      tableName: tokenNameWithChainPrefix(TokenName.METH, ChainId.Mantle),
      address: '0xcDA86A272531e8640cD7F1a92c01839911B90bb0',
      decimals: 18,
      displayName: 'mETH',
      symbol: 'mETH',
      fullName: 'mETH',
      isOneToken: false,
      atCoingecko: false,
    }
  },
  [TokenName.METIS]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.METIS,
      tableName: TokenName.METIS,
      address: '0x9E32b13ce7f2E80A01932B42553652E053D6ed8e',
      decimals: 18,
      displayName: 'METIS',
      symbol: 'METIS',
      fullName: 'Metis Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.MIDAS]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.MIDAS,
      tableName: TokenName.MIDAS,
      address: '0x97e6e31aFb2d93d437301e006D9DA714616766A5',
      decimals: 18,
      displayName: 'MIDAS',
      symbol: 'MIDAS',
      fullName: 'Midas',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.MIMATIC]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.MIMATIC,
      tableName: `pol_${TokenName.MIMATIC}`,
      address: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1',
      decimals: 18,
      displayName: 'miMATIC',
      symbol: 'miMATIC',
      fullName: 'miMATIC',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.MKR]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.MKR,
      tableName: TokenName.MKR,
      address: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
      decimals: 18,
      displayName: 'MKR',
      symbol: 'MKR',
      fullName: 'Maker',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.MPDAO]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.MPDAO,
      tableName: TokenName.MPDAO,
      address: '0x798bcB35D2d48C8cE7eF8171860B8d53A98b361d',
      decimals: 6,
      displayName: 'mpDAO',
      symbol: 'mpDAO',
      fullName: 'Meta Pool DAO Token',
      isOneToken: false,
      atCoingecko: false,
    }
  },
  [TokenName.MPH]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.MPH,
      tableName: TokenName.MPH,
      address: '0x8888801aF4d980682e47f1A9036e589479e835C5',
      decimals: 18,
      displayName: 'MPH',
      symbol: 'MPH',
      fullName: '88mph.app',
      parentOneToken: TokenName.ONE_MPH,
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.MUBI]: {
    [ChainId.Bsc]: {
      tokenName: TokenName.MUBI,
      tableName: tokenNameWithChainPrefix(TokenName.MUBI, ChainId.Bsc),
      address: '0x38e382F74dfb84608F3C1F10187f6bEf5951DE93',
      decimals: 18,
      displayName: 'MUBI',
      symbol: 'MUBI',
      fullName: 'MUBI',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.OATH]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.OATH,
      tableName: tokenNameWithChainPrefix(TokenName.OATH, ChainId.Polygon),
      address: '0x7c603C3C0C97a565cf202c94AB5298bF8510f7dc',
      decimals: 18,
      displayName: 'OATH',
      symbol: 'OATH',
      fullName: 'Oath Token',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Arbitrum]: {
      tokenName: TokenName.OATH,
      tableName: tokenNameWithChainPrefix(TokenName.OATH, ChainId.Arbitrum),
      address: '0x00e1724885473B63bCE08a9f0a52F35b0979e35A',
      decimals: 18,
      displayName: 'OATH',
      symbol: 'OATH',
      fullName: 'Oath Token',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Bsc]: {
      tokenName: TokenName.OATH,
      tableName: tokenNameWithChainPrefix(TokenName.OATH, ChainId.Bsc),
      address: '0x73f4C95AF5C2892253c068850B8C9a753636f58d',
      decimals: 18,
      displayName: 'OATH',
      symbol: 'OATH',
      fullName: 'Oath Token',
      isOneToken: false,
      atCoingecko: true
    },
  },
  [TokenName.OGN]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.OGN,
      tableName: TokenName.OGN,
      address: '0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26',
      decimals: 18,
      displayName: 'OGN',
      symbol: 'OGN',
      fullName: 'Origin Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.OJA]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.OJA,
      tableName: TokenName.OJA,
      address: '0x0aA7eFE4945Db24d95cA6E117BBa65Ed326e291A',
      decimals: 18,
      displayName: 'OJA',
      symbol: 'OJA',
      fullName: 'Ojamu Token',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.ORDI]: {
    [ChainId.Bsc]: {
      tokenName: TokenName.ORDI,
      tableName: tokenNameWithChainPrefix(TokenName.ORDI, ChainId.Bsc),
      address: '0xe2aE1a99bBd2eFab0a5C38f2146B7aCE61aBC5cE',
      decimals: 18,
      displayName: 'ordi',
      symbol: 'ORDI',
      fullName: 'ordi',
      isOneToken: false,
      atCoingecko: false
    },
  },
  [TokenName.ORETRO]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.ORETRO,
      tableName: `pol_${TokenName.ORETRO}`,
      address: '0x3A29CAb2E124919d14a6F735b6033a3AaD2B260F',
      decimals: 18,
      displayName: 'oRETRO',
      symbol: 'oRETRO',
      fullName: 'Option to buy RETRO',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.OUSD]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.OUSD,
      tableName: TokenName.OUSD,
      address: '0x2A8e1E676Ec238d8A992307B495b45B3fEAa5e86',
      decimals: 18,
      displayName: 'OUSD',
      symbol: 'OUSD',
      fullName: 'Origin Dollar',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.OXT]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.OXT,
      tableName: TokenName.OXT,
      address: '0x4575f41308ec1483f3d399aa9a2826d74da13deb',
      decimals: 18,
      displayName: 'OXT',
      symbol: 'OXT',
      fullName: 'Orchid Protocol',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.OXT,
      tableName: `pol_${TokenName.OXT}`,
      address: '0x9880e3dDA13c8e7D4804691A45160102d31F6060',
      decimals: 18,
      displayName: 'OXT',
      symbol: 'OXT',
      fullName: 'Orchid Protocol',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.PERL]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.PERL,
      tableName: TokenName.PERL,
      address: '0xeca82185adCE47f39c684352B0439f030f860318',
      decimals: 18,
      displayName: 'PERL',
      symbol: 'PERL',
      fullName: 'Perlin',
      parentOneToken: TokenName.ONE_PERL,
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.POP]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.POP,
      tableName: TokenName.POP,
      address: '0xD0Cd466b34A24fcB2f87676278AF2005Ca8A78c4',
      decimals: 18,
      displayName: 'POP',
      symbol: 'POP',
      fullName: 'Popcorn',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.POP,
      tableName: `pol_${TokenName.POP}`,
      address: '0xC5B57e9a1E7914FDA753A88f24E5703e617Ee50c',
      decimals: 18,
      displayName: 'POP',
      symbol: 'POP',
      fullName: 'Popcorn',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.PWING]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.PWING,
      tableName: TokenName.PWING,
      address: '0xDb0f18081b505A7DE20B18ac41856BCB4Ba86A1a',
      decimals: 9,
      displayName: 'pWING',
      symbol: 'pWING',
      fullName: 'Poly Ontology Wing Token',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.QNTHTS]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.QNTHTS,
      tableName: tokenNameWithChainPrefix(TokenName.QNTHTS, ChainId.Hedera),
      address: '0x000000000000000000000000000000000013e8b5',
      decimals: 8,
      displayName: 'QNT[hts]',
      symbol: 'QNT[hts]',
      fullName: 'Quant',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.QRDO]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.QRDO,
      tableName: TokenName.QRDO,
      address: '0x4123a133ae3c521FD134D7b13A2dEC35b56c2463',
      decimals: 8,
      displayName: 'QRDO',
      symbol: 'QRDO',
      fullName: 'Qredo Token',
      isOneToken: false,
      atCoingecko: true,
      targetVaultStrength: 0.1
    }
  },
  [TokenName.QUICK]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.QUICK,
      tableName: TokenName.QUICK,
      address: '0xd2bA23dE8a19316A638dc1e7a9ADdA1d74233368',
      decimals: 18,
      displayName: 'QUICK',
      symbol: 'QUICK',
      fullName: 'QuickSwap',
      isOneToken: false,
      atCoingecko: true,
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.QUICK,
      tableName: `pol_${TokenName.QUICK}`,
      address: '0xB5C064F955D8e7F38fE0460C556a72987494eE17',
      decimals: 18,
      displayName: 'QUICK',
      symbol: 'QUICK',
      fullName: 'QuickSwap',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.RAM]: {
    [ChainId.Arbitrum]: {
      tokenName: TokenName.RAM,
      tableName: `arbitrum_${TokenName.RAM}`,
      address: '0xAAA6C1E32C55A7Bfa8066A6FAE9b42650F262418',
      decimals: 18,
      displayName: 'RAM',
      symbol: 'RAM',
      fullName: 'Ramses',
      parentOneToken: TokenName.RAM,
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.RBNB]: {
    [ChainId.Bsc]: {
      tokenName: TokenName.RBNB,
      tableName: tokenNameWithChainPrefix(TokenName.RBNB, ChainId.Bsc),
      address: '0xF027E525D491ef6ffCC478555FBb3CFabB3406a6',
      decimals: 18,
      displayName: 'rBNB',
      symbol: 'rBNB',
      fullName: 'StaFi rBNB',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.RENFIL]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.RENFIL,
      tableName: TokenName.RENFIL,
      address: '0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5',
      decimals: 18,
      displayName: 'renFIL',
      symbol: 'renFIL',
      fullName: 'renFIL',
      parentOneToken: TokenName.ONE_FIL,
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.RETH]: {
    [ChainId.zkEVM]: {
      tokenName: TokenName.RETH,
      tableName: tokenNameWithChainPrefix(TokenName.RETH, ChainId.zkEVM),
      address: '0xb23C20EFcE6e24Acca0Cef9B7B7aA196b84EC942',
      decimals: 18,
      displayName: 'rETH',
      symbol: 'rETH',
      fullName: 'Rocket Pool ETH',
      isOneToken: false,
      atCoingecko: false,
    }
  },
  [TokenName.RETRO]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.RETRO,
      tableName: `pol_${TokenName.RETRO}`,
      address: '0xbfa35599c7aebb0dace9b5aa3ca5f2a79624d8eb',
      decimals: 18,
      displayName: 'RETRO',
      symbol: 'RETRO',
      fullName: 'RETRO',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.RSETH]: {
    [ChainId.zkEVM]: {
      tokenName: TokenName.RSETH,
      tableName: tokenNameWithChainPrefix(TokenName.RSETH, ChainId.zkEVM),
      address: '0x8C7D118B5c47a5BCBD47cc51789558B98dAD17c5',
      decimals: 18,
      displayName: 'rsETH',
      symbol: 'rsETH',
      fullName: 'rsETH',
      isOneToken: false,
      atCoingecko: false,
    }
  },
  [TokenName.SATS]: {
    [ChainId.Bsc]: {
      tokenName: TokenName.SATS,
      tableName: tokenNameWithChainPrefix(TokenName.SATS, ChainId.Bsc),
      address: '0x143D7A700a533B4baF6D693449b278A8A2F5927d',
      decimals: 18,
      displayName: 'sats',
      symbol: 'SATS',
      fullName: 'sats',
      isOneToken: false,
      atCoingecko: false,
    },
  },
  [TokenName.SAUCE]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.SAUCE,
      tableName: tokenNameWithChainPrefix(TokenName.SAUCE, ChainId.Hedera),
      address: '0x00000000000000000000000000000000000b2ad5',
      decimals: 6,
      displayName: 'SAUCE',
      symbol: 'SAUCE',
      fullName: 'SAUCE',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.SFRAX]: {
    [ChainId.Arbitrum]: {
      tokenName: TokenName.SFRAX,
      tableName: tokenNameWithChainPrefix(TokenName.SFRAX, ChainId.Arbitrum),
      address: '0xe3b3FE7bcA19cA77Ad877A5Bebab186bEcfAD906',
      decimals: 18,
      displayName: 'sFRAX',
      symbol: 'SFRAX',
      fullName: 'Staked FRAX',
      isOneToken: false,
      atCoingecko: false,
    },
  },
  [TokenName.SFRXETH]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.SFRXETH,
      tableName: TokenName.SFRXETH,
      address: '0xac3E018457B222d93114458476f3E3416Abbe38F',
      decimals: 18,
      displayName: 'sfrxETH',
      symbol: 'SFRXETH',
      fullName: 'Staked Frax Ether',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.SHIB]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.SHIB,
      tableName: TokenName.SHIB,
      address: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
      decimals: 18,
      displayName: 'SHIB',
      symbol: 'SHIB',
      fullName: 'Shiba Inu',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.STMATIC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.STMATIC,
      tableName: TokenName.STMATIC,
      address: '0x9ee91f9f426fa633d227f7a9b000e28b9dfd8599',
      decimals: 18,
      displayName: 'stMATIC',
      symbol: 'stMATIC',
      fullName: 'Staked MATIC',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.STMATIC,
      tableName: `pol_${TokenName.STMATIC}`,
      address: '0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4',
      decimals: 18,
      displayName: 'stMATIC',
      symbol: 'stMATIC',
      fullName: 'Staked MATIC',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.SUSHI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.SUSHI,
      tableName: TokenName.SUSHI,
      address: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
      decimals: 18,
      displayName: 'SUSHI',
      symbol: 'SUSHI',
      fullName: 'SushiToken',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.SUSHI,
      tableName: `pol_${TokenName.SUSHI}`,
      address: '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a',
      decimals: 18,
      displayName: 'SUSHI',
      symbol: 'SUSHI',
      fullName: 'SushiToken',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.SWETH]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.SWETH,
      tableName: TokenName.SWETH,
      address: '0xf951E335afb289353dc249e82926178EaC7DEd78',
      decimals: 18,
      displayName: 'swETH',
      symbol: 'SWETH',
      fullName: 'Swell Ethereum',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.SWISE]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.SWISE,
      tableName: TokenName.SWISE,
      address: '0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2',
      decimals: 18,
      displayName: 'SWISE',
      symbol: 'SWISE',
      fullName: 'StakeWise',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.TAOUSD]: {
    [ChainId.Arbitrum]: {
      tokenName: TokenName.TAOUSD,
      tableName: tokenNameWithChainPrefix(TokenName.TAOUSD, ChainId.Arbitrum),
      address: '0x966570A84709D693463CDD69dCadb0121b2C9d26',
      decimals: 18,
      displayName: 'taoUSD',
      symbol: 'taoUSD',
      fullName: 'taoUSD',
      isOneToken: false,
      atCoingecko: false,
    }
  },
  [TokenName.TASHI]: {
    [ChainId.Evmos]: {
      tokenName: TokenName.TASHI,
      tableName: tokenNameWithChainPrefix(TokenName.TASHI, ChainId.Evmos),
      address: '0x98fAFD9F714CE0B4bB2870527076F2F314aAed82',
      decimals: 18,
      displayName: 'TASHI',
      symbol: 'TASHI',
      fullName: 'Tashi',
      isOneToken: false,
      atCoingecko: false,
    }
  },
  [TokenName.TBTC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.TBTC,
      tableName: TokenName.TBTC,
      address: '0x18084fbA666a33d37592fA2633fD49a74DD93a88',
      decimals: 18,
      displayName: 'tBTC',
      symbol: 'tBTC',
      fullName: 'tBTC v2',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.THE]: {
    [ChainId.Bsc]: {
      tokenName: TokenName.THE,
      tableName: `bsc_${TokenName.THE}`,
      address: '0xF4C8E32EaDEC4BFe97E0F595AdD0f4450a863a11',
      decimals: 18,
      displayName: 'THE',
      symbol: 'THE',
      fullName: 'Thena',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.TONCOIN]: {
    [ChainId.Bsc]: {
      tokenName: TokenName.TONCOIN,
      tableName: tokenNameWithChainPrefix(TokenName.TONCOIN, ChainId.Bsc),
      address: '0x76A797A59Ba2C17726896976B7B3747BfD1d220f',
      decimals: 9,
      displayName: 'TONCOIN',
      symbol: 'TONCOIN',
      fullName: 'Wrapped TON Coin',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.TRADE]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.TRADE,
      tableName: TokenName.TRADE,
      address: '0x6e5970DBd6fc7eb1f29C6D2eDF2bC4c36124C0C1',
      decimals: 18,
      displayName: 'TRADE',
      symbol: 'TRADE',
      fullName: 'Polytrade',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.TRADE,
      tableName: `pol_${TokenName.TRADE}`,
      address: '0x692AC1e363ae34b6B489148152b12e2785a3d8d6',
      decimals: 18,
      displayName: 'TRADE',
      symbol: 'TRADE',
      fullName: 'Polytrade',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.UMA]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.UMA,
      tableName: TokenName.UMA,
      address: '0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828',
      decimals: 18,
      displayName: 'UMA',
      symbol: 'UMA',
      fullName: 'UMA Voting Token v1',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.UNI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.UNI,
      tableName: TokenName.UNI,
      address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      decimals: 18,
      displayName: 'UNI',
      symbol: 'UNI',
      fullName: 'Uniswap',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.USDB]: {
    [ChainId.Blast]: {
      tokenName: TokenName.USDB,
      tableName: tokenNameWithChainPrefix(TokenName.USDB, ChainId.Blast),
      address: '0x4300000000000000000000000000000000000003',
      decimals: 18,
      displayName: 'USDB',
      symbol: 'USDB',
      fullName: 'USDB',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.USDBC]: {
    [ChainId.Base]: {
      tokenName: TokenName.USDBC,
      tableName: tokenNameWithChainPrefix(TokenName.USDBC, ChainId.Base),
      address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
      decimals: 6,
      displayName: 'USDbC',
      symbol: 'USDbC',
      fullName: 'USD Base Coin',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.USDC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.USDC,
      tableName: TokenName.USDC,
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      decimals: 6,
      displayName: 'USDC',
      symbol: 'USDC',
      fullName: 'USD Coin',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.USDC,
      tableName: `pol_${TokenName.USDC}`,
      address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      decimals: 6,
      displayName: 'USDC.e',
      symbol: 'USDC',
      fullName: 'USD Coin (PoS)',
      atCoingecko: true,
      isOneToken: false
    },
    [ChainId.Arbitrum]: {
      tokenName: TokenName.USDC,
      tableName: `arbitrum_${TokenName.USDC}`,
      address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      decimals: 6,
      displayName: 'USDC',
      symbol: 'USDC',
      fullName: 'USD Coin',
      atCoingecko: true,
      isOneToken: false
    },
    [ChainId.Bsc]: {
      tokenName: TokenName.USDC,
      tableName: `bsc_${TokenName.USDC}`,
      address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      decimals: 18,
      displayName: 'USDC',
      symbol: 'USDC',
      fullName: 'USD Coin',
      atCoingecko: true,
      isOneToken: false
    },
    [ChainId.Celo]: {
      tokenName: TokenName.USDC,
      tableName: tokenNameWithChainPrefix(TokenName.USDC, ChainId.Celo),
      address: '0xcebA9300f2b948710d2653dD7B07f33A8B32118C',
      decimals: 6,
      displayName: 'USDC',
      symbol: 'USDC',
      fullName: 'USDC',
      atCoingecko: false,
      isOneToken: false,
    },
    [ChainId.Eon]: {
      tokenName: TokenName.USDC,
      tableName: `eon_${TokenName.USDC}`,
      address: '0xCc44eB064CD32AAfEEb2ebb2a47bE0B882383b53',
      decimals: 6,
      displayName: 'USDC',
      symbol: 'USDC',
      fullName: 'USD Coin',
      atCoingecko: false,
      isOneToken: false
    },
    [ChainId.Fantom]: {
      tokenName: TokenName.USDC,
      tableName: tokenNameWithChainPrefix(TokenName.USDC, ChainId.Fantom),
      address: '0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf',
      decimals: 6,
      displayName: 'USDC',
      symbol: 'USDC',
      fullName: 'USD Coin',
      atCoingecko: true,
      isOneToken: false
    },
    [ChainId.Hedera]: {
      tokenName: TokenName.USDC,
      tableName: tokenNameWithChainPrefix(TokenName.USDC, ChainId.Hedera),
      address: '0x000000000000000000000000000000000006f89a',
      decimals: 6,
      displayName: 'USDC',
      symbol: 'USDC',
      fullName: 'USD Coin',
      atCoingecko: true,
      isOneToken: true,
    },
    [ChainId.Linea]: {
      tokenName: TokenName.USDC,
      tableName: tokenNameWithChainPrefix(TokenName.USDC, ChainId.Linea),
      address: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
      decimals: 6,
      displayName: 'USDC',
      symbol: 'USDC',
      fullName: 'USDC.e',
      atCoingecko: true,
      isOneToken: false
    },
    [ChainId.zkEVM]: {
      tokenName: TokenName.USDC,
      tableName: tokenNameWithChainPrefix(TokenName.USDC, ChainId.zkEVM),
      address: '0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035',
      decimals: 6,
      displayName: 'USDC',
      symbol: 'USDC',
      fullName: 'USD Coin',
      atCoingecko: true,
      isOneToken: false
    },
    [ChainId.zkSync]: {
      tokenName: TokenName.USDC,
      tableName: `zksync_${TokenName.USDC}`,
      address: '0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4',
      decimals: 6,
      displayName: 'USDC',
      symbol: 'USDC',
      fullName: 'USD Coin',
      atCoingecko: true,
      isOneToken: false
    },
    [ChainId.Mumbai]: {
      tokenName: TokenName.USDC,
      tableName: `mum_${TokenName.USDC}`,
      symbol: 'USDC',
      fullName: 'USD Coin',
      atCoingecko: false,
      address: '0x0FA8781a83E46826621b3BC094Ea2A0212e71B23',
      decimals: 6,
      displayName: 'USDC',
      isOneToken: false
    }
  },
  [TokenName.USDC2]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.USDC2,
      tableName: `pol_${TokenName.USDC2}`,
      address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
      decimals: 6,
      displayName: 'USDC',
      symbol: 'USDC',
      fullName: 'USD Coin',
      atCoingecko: false,
      isOneToken: false
    },
    [ChainId.zkEVM]: {
      tokenName: TokenName.USDC2,
      tableName: tokenNameWithChainPrefix(TokenName.USDC2, ChainId.zkEVM),
      address: '0x37eAA0eF3549a5Bb7D431be78a3D99BD360d19e5',
      decimals: 6,
      displayName: 'USDC.e',
      symbol: 'USDC',
      fullName: 'USD Coin',
      atCoingecko: false,
      isOneToken: false
    },
  },
  [TokenName.USDCHTS]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.USDCHTS,
      tableName: tokenNameWithChainPrefix(TokenName.USDCHTS, ChainId.Hedera),
      address: '0x0000000000000000000000000000000000101ae3',
      decimals: 6,
      displayName: 'USDC[hts]',
      symbol: 'USDC[hts]',
      fullName: 'USD Coin',
      atCoingecko: false,
      isOneToken: true,
    },
  },
  [TokenName.USDT]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.USDT,
      tableName: TokenName.USDT,
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      decimals: 6,
      displayName: 'USDT',
      symbol: 'USDT',
      fullName: 'Tether USD',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.USDT,
      tableName: `pol_${TokenName.USDT}`,
      address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
      decimals: 6,
      displayName: 'USDT',
      symbol: 'USDT',
      fullName: 'Tether USD',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Arbitrum]: {
      tokenName: TokenName.USDT,
      tableName: `arbitrum_${TokenName.USDT}`,
      address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      decimals: 6,
      displayName: 'USDT',
      symbol: 'USDT',
      fullName: 'Tether USD',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Bsc]: {
      tokenName: TokenName.USDT,
      tableName: `bsc_${TokenName.USDT}`,
      address: '0x55d398326f99059fF775485246999027B3197955',
      decimals: 18,
      displayName: 'USDT',
      symbol: 'USDT',
      fullName: 'Tether USD',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Celo]: {
      tokenName: TokenName.USDT,
      tableName: tokenNameWithChainPrefix(TokenName.USDT, ChainId.Celo),
      address: '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e',
      decimals: 6,
      displayName: 'USDT',
      symbol: 'USDT',
      fullName: 'Tether USD',
      isOneToken: false,
      atCoingecko: false,
    },
    [ChainId.Eon]: {
      tokenName: TokenName.USDT,
      tableName: `eon_${TokenName.USDT}`,
      address: '0xA167bcAb6791304EDa9B636C8beEC75b3D2829E6',
      decimals: 6,
      displayName: 'USDT',
      symbol: 'USDT',
      fullName: 'Tether USD',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Evmos]: {
      tokenName: TokenName.USDT,
      tableName: tokenNameWithChainPrefix(TokenName.USDT, ChainId.Evmos),
      address: '0xb8f812b5943ab3bf941d5d4f1de90a4b326c5d8f ',
      decimals: 6,
      displayName: 'USDT',
      symbol: 'USDT',
      fullName: 'USDT on Kava',
      isOneToken: false,
      atCoingecko: false,
    },
    [ChainId.opBNB]: {
      tokenName: TokenName.USDT,
      tableName: tokenNameWithChainPrefix(TokenName.USDT, ChainId.opBNB),
      address: '0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3',
      decimals: 18,
      displayName: 'USDT',
      symbol: 'USDT',
      fullName: 'Tether USD',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.zkEVM]: {
      tokenName: TokenName.USDT,
      tableName: tokenNameWithChainPrefix(TokenName.USDT, ChainId.zkEVM),
      address: '0x1E4a5963aBFD975d8c9021ce480b42188849D41d',
      decimals: 6,
      displayName: 'USDT',
      symbol: 'USDT',
      fullName: 'Tether USD',
      isOneToken: false,
      atCoingecko: true,
    },
    [ChainId.zkSync]: {
      tokenName: TokenName.USDT,
      tableName: `zksync_${TokenName.USDT}`,
      address: '0x493257fD37EDB34451f62EDf8D2a0C418852bA4C',
      decimals: 6,
      displayName: 'USDT',
      symbol: 'USDT',
      fullName: 'Tether USD',
      isOneToken: false,
      atCoingecko: true
    },
  },
  [TokenName.USDTHTS]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.USDTHTS,
      tableName: tokenNameWithChainPrefix(TokenName.USDTHTS, ChainId.Hedera),
      address: '0x0000000000000000000000000000000000101af0',
      decimals: 6,
      displayName: 'USDT[hts]',
      symbol: 'USDT[hts]',
      fullName: 'Tether USD',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.VBTC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.VBTC,
      tableName: TokenName.VBTC,
      address: '0xe1406825186D63980fd6e2eC61888f7B91C4bAe4',
      decimals: 18,
      displayName: 'VBTC',
      symbol: 'VBTC',
      fullName: 'Strudel BTC',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.WAVAX]: {
    [ChainId.Avalanche]: {
      tokenName: TokenName.WAVAX,
      tableName: `avalanche_${TokenName.WAVAX}`,
      address: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
      decimals: 18,
      displayName: 'WAVAX',
      symbol: 'WAVAX',
      fullName: 'Wrapped AVAX',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Eon]: {
      tokenName: TokenName.WAVAX,
      tableName: `eon_${TokenName.WAVAX}`,
      address: '0x6318374DFb468113E06d3463ec5Ed0B6Ae0F0982',
      decimals: 18,
      displayName: 'WAVAX',
      symbol: 'WAVAX',
      fullName: 'Wrapped AVAX',
      isOneToken: false,
      atCoingecko: false
    },
  },
  [TokenName.WAVAXHTS]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.WAVAXHTS,
      tableName: tokenNameWithChainPrefix(TokenName.WAVAXHTS, ChainId.Hedera),
      address: '0x000000000000000000000000000000000011a79c',
      decimals: 8,
      displayName: 'WAVAX[hts]',
      symbol: 'WAVAX[hts]',
      fullName: 'Wrapped AVAX[hts]',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.WBNB]: {
    [ChainId.Bsc]: {
      tokenName: TokenName.WBNB,
      tableName: `bsc_${TokenName.WBNB}`,
      address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      decimals: 18,
      displayName: 'WBNB',
      symbol: 'WBNB',
      fullName: 'WBNB Token',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.opBNB]: {
      tokenName: TokenName.WBNB,
      tableName: tokenNameWithChainPrefix(TokenName.WBNB, ChainId.opBNB),
      address: '0x4200000000000000000000000000000000000006',
      decimals: 18,
      displayName: 'WBNB',
      symbol: 'WBNB',
      fullName: 'Wrapped BNB',
      isOneToken: false,
      atCoingecko: true
    },
  },
  [TokenName.WBTC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.WBTC,
      tableName: TokenName.WBTC,
      address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      decimals: 8,
      displayName: 'wBTC',
      symbol: 'wBTC',
      fullName: 'Wrapped Bitcoin',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.WBTC,
      tableName: `pol_${TokenName.WBTC}`,
      address: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
      decimals: 8,
      displayName: 'wBTC',
      symbol: 'wBTC',
      fullName: 'Wrapped Bitcoin',
      atCoingecko: true,
      isOneToken: false
    },
    [ChainId.Arbitrum]: {
      tokenName: TokenName.WBTC,
      tableName: `arbitrum_${TokenName.WBTC}`,
      address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
      decimals: 8,
      displayName: 'wBTC',
      symbol: 'wBTC',
      fullName: 'Wrapped Bitcoin',
      atCoingecko: true,
      isOneToken: false
    },
    [ChainId.Blast]: {
      tokenName: TokenName.WBTC,
      tableName: tokenNameWithChainPrefix(TokenName.WBTC, ChainId.Blast),
      address: '0xF7bc58b8D8f97ADC129cfC4c9f45Ce3C0E1D2692',
      decimals: 8,
      displayName: 'wBTC',
      symbol: 'wBTC',
      fullName: 'Wrapped BTC',
      atCoingecko: false,
      isOneToken: false,
    },
    [ChainId.Eon]: {
      tokenName: TokenName.WBTC,
      tableName: `eon_${TokenName.WBTC}`,
      address: '0x1d7fb99AED3C365B4DEf061B7978CE5055Dfc1e7',
      decimals: 8,
      displayName: 'wBTC',
      symbol: 'wBTC',
      fullName: 'Wrapped Bitcoin',
      atCoingecko: false,
      isOneToken: false
    },
    [ChainId.Evmos]: {
      tokenName: TokenName.WBTC,
      tableName: tokenNameWithChainPrefix(TokenName.WBTC, ChainId.Evmos),
      address: '0x1d7fb99AED3C365B4DEf061B7978CE5055Dfc1e7',
      decimals: 8,
      displayName: 'wBTC',
      symbol: 'wBTC',
      fullName: 'Wormhole Bitcoin',
      atCoingecko: false,
      isOneToken: false,
    },
    [ChainId.Linea]: {
      tokenName: TokenName.WBTC,
      tableName: tokenNameWithChainPrefix(TokenName.WBTC, ChainId.Linea),
      address: '0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4',
      decimals: 8,
      displayName: 'wBTC',
      symbol: 'wBTC',
      fullName: 'Wrapped BTC',
      atCoingecko: true,
      isOneToken: false
    },
    [ChainId.zkEVM]: {
      tokenName: TokenName.WBTC,
      tableName: tokenNameWithChainPrefix(TokenName.WBTC, ChainId.zkEVM),
      address: '0xEA034fb02eB1808C2cc3adbC15f447B93CbE08e1',
      decimals: 8,
      displayName: 'WBTC',
      symbol: 'WBTC',
      fullName: 'Wrapped BTC',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.WBTCHTS]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.WBTCHTS,
      tableName: tokenNameWithChainPrefix(TokenName.WBTCHTS, ChainId.Hedera),
      address: '0x0000000000000000000000000000000000101afb',
      decimals: 8,
      displayName: 'WBTC[hts]',
      symbol: 'WBTC[hts]',
      fullName: 'Wrapped BTC',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.WEETH]: {
    [ChainId.Arbitrum]: {
      tokenName: TokenName.WEETH,
      tableName: tokenNameWithChainPrefix(TokenName.WEETH, ChainId.Arbitrum),
      address: '0x35751007a407ca6FEFfE80b3cB397736D2cf4dbe',
      decimals: 18,
      displayName: 'weETH',
      symbol: 'weETH',
      fullName: 'Wrapped eETH',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.WEFI]: {
    [ChainId.Polygon]: {
      tokenName: TokenName.WEFI,
      tableName: `pol_${TokenName.WEFI}`,
      address: '0xfFA188493C15DfAf2C206c97D8633377847b6a52',
      decimals: 18,
      displayName: 'WEFI',
      symbol: 'WEFI',
      fullName: 'WeFi',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.WEN]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.WEN,
      tableName: TokenName.WEN,
      address: '0x830a8512db4F6fCA51968593E2667156C2c483A8',
      decimals: 18,
      displayName: 'WEN',
      symbol: 'WEN',
      fullName: 'WEN',
      isOneToken: false,
      atCoingecko: false
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.WEN,
      tableName: `pol_${TokenName.WEN}`,
      address: '0x11A88F949C0592238959142653bB6847c6523D81',
      decimals: 18,
      displayName: 'WEN',
      symbol: 'WEN',
      fullName: 'WEN',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.WETH]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.WETH,
      tableName: TokenName.WETH,
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      decimals: 18,
      displayName: 'wETH',
      symbol: 'wETH',
      fullName: 'Wrapped Ether',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Arbitrum]: {
      tokenName: TokenName.WETH,
      tableName: `arbitrum_${TokenName.WETH}`,
      address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      decimals: 18,
      displayName: 'wETH',
      symbol: 'wETH',
      fullName: 'Wrapped Ether',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Base]: {
      tokenName: TokenName.WETH,
      tableName: tokenNameWithChainPrefix(TokenName.WETH, ChainId.Base),
      address: '0x4200000000000000000000000000000000000006',
      decimals: 18,
      displayName: 'wETH',
      symbol: 'wETH',
      fullName: 'Wrapped Ether',
      isOneToken: false,
      atCoingecko: true,
    },
    [ChainId.Blast]: {
      tokenName: TokenName.WETH,
      tableName: tokenNameWithChainPrefix(TokenName.WETH, ChainId.Blast),
      address: '0x4300000000000000000000000000000000000004',
      decimals: 18,
      displayName: 'WETH',
      symbol: 'WETH',
      fullName: 'Wrapped Ether',
      isOneToken: false,
      atCoingecko: true,
    },
    [ChainId.Eon]: {
      tokenName: TokenName.WETH,
      tableName: `eon_${TokenName.WETH}`,
      address: '0x2c2E0B0c643aB9ad03adBe9140627A645E99E054',
      decimals: 18,
      displayName: 'wETH',
      symbol: 'wETH',
      fullName: 'Wrapped Ether',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Evmos]: {
      tokenName: TokenName.WETH,
      tableName: tokenNameWithChainPrefix(TokenName.WETH, ChainId.Evmos),
      address: '0x4D036A97e9ad9e805f0E7B163Ea681B3dE83B7BF',
      decimals: 8,
      displayName: 'wETH',
      symbol: 'wETH',
      fullName: 'Wormhole ETH',
      isOneToken: false,
      atCoingecko: false,
    },
    [ChainId.Linea]: {
      tokenName: TokenName.WETH,
      tableName: tokenNameWithChainPrefix(TokenName.WETH, ChainId.Linea),
      address: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
      decimals: 18,
      displayName: 'wETH',
      symbol: 'wETH',
      fullName: 'Wrapped Ether',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Mantle]: {
      tokenName: TokenName.WETH,
      tableName: tokenNameWithChainPrefix(TokenName.WETH, ChainId.Mantle),
      address: '0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111',
      decimals: 18,
      displayName: 'wETH',
      symbol: 'wETH',
      fullName: 'Wrapped Ether',
      isOneToken: false,
      atCoingecko: true,
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.WETH,
      tableName: `pol_${TokenName.WETH}`,
      address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      decimals: 18,
      displayName: 'wETH',
      symbol: 'wETH',
      fullName: 'Wrapped Ether',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.zkEVM]: {
      tokenName: TokenName.WETH,
      tableName: tokenNameWithChainPrefix(TokenName.WETH, ChainId.zkEVM),
      address: '0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9',
      decimals: 18,
      displayName: 'wETH',
      symbol: 'wETH',
      fullName: 'Wrapped Ether',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.zkSync]: {
      tokenName: TokenName.WETH,
      tableName: `zksync_${TokenName.WETH}`,
      address: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91',
      decimals: 18,
      displayName: 'wETH',
      symbol: 'wETH',
      fullName: 'Wrapped Ether',
      isOneToken: false,
      atCoingecko: true
    },
  },
  [TokenName.WETHHTS]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.WETHHTS,
      tableName: tokenNameWithChainPrefix(TokenName.WETHHTS, ChainId.Hedera),
      address: '0x000000000000000000000000000000000008437c',
      decimals: 8,
      displayName: 'WETH[hts]',
      symbol: 'WETH[hts]',
      fullName: 'Wrapped Ether[hts]',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.WEVMOS]: {
    [ChainId.Evmos]: {
      tokenName: TokenName.WEVMOS,
      tableName: tokenNameWithChainPrefix(TokenName.WEVMOS, ChainId.Evmos),
      address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      decimals: 18,
      displayName: 'WEVMOS',
      symbol: 'WEVMOS',
      fullName: 'Wrapped Evmos',
      isOneToken: false,
      atCoingecko: false,
    },
  },
  [TokenName.WFTM]: {
    [ChainId.Fantom]: {
      tokenName: TokenName.WFTM,
      tableName: tokenNameWithChainPrefix(TokenName.WFTM, ChainId.Fantom),
      address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      decimals: 18,
      displayName: 'WFTM',
      symbol: 'WFTM',
      fullName: 'Wrapped Fantom',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.WHBAR]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.WHBAR,
      tableName: tokenNameWithChainPrefix(TokenName.WHBAR, ChainId.Hedera),
      address: '0x0000000000000000000000000000000000163b5a',
      decimals: 8,
      displayName: 'WHBAR',
      symbol: 'WHBAR',
      fullName: 'Wrapped Hbar',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.WMNT]: {
    [ChainId.Mantle]: {
      tokenName: TokenName.WMNT,
      tableName: tokenNameWithChainPrefix(TokenName.WMNT, ChainId.Mantle),
      address: '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8',
      decimals: 18,
      displayName: 'WMNT',
      symbol: 'WMNT',
      fullName: 'Wrapped Mantle',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.WMATIC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.WMATIC,
      tableName: TokenName.WMATIC,
      address: '0x7c9f4C87d911613Fe9ca58b579f737911AAD2D43',
      decimals: 18,
      displayName: 'WMATIC',
      symbol: 'WMATIC',
      fullName: 'Wrapped Matic',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.WMATIC,
      tableName: `pol_${TokenName.WMATIC}`,
      address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      decimals: 18,
      displayName: 'WMATIC',
      symbol: 'WMATIC',
      fullName: 'Wrapped Matic',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.WNXM]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.WNXM,
      tableName: TokenName.WNXM,
      address: '0x0d438F3b5175Bebc262bF23753C1E53d03432bDE',
      decimals: 18,
      displayName: 'wNXM',
      symbol: 'wNXM',
      fullName: 'Wrapped NXM',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.WSTETH]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.WSTETH,
      tableName: TokenName.WSTETH,
      address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
      decimals: 18,
      displayName: 'WSTETH',
      symbol: 'WSTETH',
      fullName: 'Wrapped liquid staked Ether',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.WSTETH,
      tableName: `pol_${TokenName.WSTETH}`,
      address: '0x03b54A6e9a984069379fae1a4fC4dBAE93B3bCCD',
      decimals: 18,
      displayName: 'WSTETH',
      symbol: 'WSTETH',
      fullName: 'Wrapped liquid staked Ether',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.zkEVM]: {
      tokenName: TokenName.WSTETH,
      tableName: tokenNameWithChainPrefix(TokenName.WSTETH, ChainId.zkEVM),
      address: '0x5D8cfF95D7A57c0BF50B30b43c7CC0D52825D4a9',
      decimals: 18,
      displayName: 'wstETH',
      symbol: 'wstETH',
      fullName: 'Wrapped liquid staked Ether',
      isOneToken: false,
      atCoingecko: false,
    },
  },
  [TokenName.WZEN]: {
    [ChainId.Eon]: {
      tokenName: TokenName.WZEN,
      tableName: `eon_${TokenName.WZEN}`,
      address: '0xF5cB8652a84329A2016A386206761f455bCEDab6',
      decimals: 18,
      displayName: 'WZEN',
      symbol: 'WZEN',
      fullName: 'Wrapped ZEN',
      isOneToken: false,
      atCoingecko: false
    },
  },
  [TokenName.XCAD]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.XCAD,
      tableName: TokenName.XCAD,
      address: '0x7659ce147d0e714454073a5dd7003544234b6aa0',
      decimals: 18,
      displayName: 'XCAD',
      symbol: 'XCAD',
      fullName: 'XCAD Token',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Bsc]: {
      tokenName: TokenName.XCAD,
      tableName: `bsc_${TokenName.XCAD}`,
      address: '0xa026Ad2ceDa16Ca5FC28fd3C72f99e2C332c8a26',
      decimals: 18,
      displayName: 'XCAD',
      symbol: 'XCAD',
      fullName: 'XCAD Token',
      isOneToken: false,
      atCoingecko: true
    },
  },
  [TokenName.XSAUCE]: {
    [ChainId.Hedera]: {
      tokenName: TokenName.XSAUCE,
      tableName: tokenNameWithChainPrefix(TokenName.XSAUCE, ChainId.Hedera),
      address: '0x00000000000000000000000000000000001647e8',
      decimals: 6,
      displayName: 'XSAUCE',
      symbol: 'XSAUCE',
      fullName: 'xSAUCE',
      isOneToken: false,
      atCoingecko: true,
    },
  },
  [TokenName.YFI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.YFI,
      tableName: TokenName.YFI,
      address: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
      decimals: 18,
      displayName: 'YFI',
      symbol: 'YFI',
      fullName: 'yearn.finance',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.ZUSD]: {
    [ChainId.Eon]: {
      tokenName: TokenName.ZUSD,
      tableName: tokenNameWithChainPrefix(TokenName.ZUSD, ChainId.Eon),
      address: '0xCEad8ee30e03aE87E5E709617f7FdF180Eef9973',
      decimals: 6,
      displayName: 'ZUSD',
      symbol: 'ZUSD',
      fullName: 'ZEN USD',
      isOneToken: false,
      atCoingecko: true,
    }
  },
  [TokenName.ZRX]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ZRX,
      tableName: TokenName.ZRX,
      address: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
      decimals: 18,
      displayName: 'ZRX',
      symbol: 'ZRX',
      fullName: '0x',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.ONE_ETH]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_ETH,
      tableName: TokenName.ONE_ETH,
      address: '0xEc0d77a58528a218cBf41Fa6E1585c8D7A085868',
      strategy: '',
      auxStrategy: [],
      decimals: 9,
      displayName: 'oneETH',
      symbol: 'oneETH',
      fullName: 'oneETH',
      isOneToken: true,
      stimulusName: TokenName.WETH,
      stimulusDisplayName: 'ETH',
      isV2: false,
      atCoingecko: false
    }
  },
  [TokenName.ONE_VBTC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_VBTC,
      tableName: TokenName.ONE_VBTC,
      address: '0x7BD198b9107496fD5cC3d7655AF52f43a8eDBc4C',
      strategy: '',
      auxStrategy: [],
      decimals: 9,
      displayName: 'oneVBTC',
      symbol: 'oneVBTC',
      fullName: 'oneVBTC',
      isOneToken: true,
      stimulusName: TokenName.VBTC,
      stimulusDisplayName: 'VBTC',
      isV2: false,
      atCoingecko: false
    }
  },
  [TokenName.ONE_LINK]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_LINK,
      tableName: TokenName.ONE_LINK,
      address: '0x18Cc17a1EeD37C02A77B0B96b7890C7730E2a2CF',
      strategy: '',
      auxStrategy: [],
      decimals: 9,
      displayName: 'oneLINK',
      symbol: 'oneLINK',
      fullName: 'oneLINK',
      isOneToken: true,
      stimulusName: TokenName.LINK,
      stimulusDisplayName: 'LINK',
      isV2: false,
      atCoingecko: false
    }
  },
  [TokenName.ONE_FIL]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_FIL,
      tableName: TokenName.ONE_FIL,
      address: '0x6d82017e55b1D24C53c7B33BbB770A86f2ca229D',
      strategy: '0xc9682298cd1C39145EB34614a0B4356c7F29c92e',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneFIL',
      symbol: 'oneFIL',
      fullName: 'oneFIL',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: TokenName.RENFIL,
      stimulusDisplayName: 'renFIL',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xd5147bc8e386d91cc5dbe72099dac6c9b99276f5'
    }
  },
  [TokenName.ONE_1INCH]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_1INCH,
      tableName: TokenName.ONE_1INCH,
      address: '0x853bb55c1f469902f088a629db8c8803a9be3857',
      strategy: '0x97B380Ae50160E400d68c92ABeAf24402C9CaA62',
      auxStrategy: [],
      decimals: 18,
      displayName: 'one1INCH',
      symbol: 'one1INCH',
      fullName: 'one1INCH',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: TokenName['1INCH'],
      stimulusDisplayName: '1INCH',
      tradeUrl: 'https://app.1inch.io/#/1/swap/ETH/1inch'
    }
  },
  [TokenName.ONE_BTC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_BTC,
      tableName: TokenName.ONE_BTC,
      address: '0xEc4325F0518584F0774b483c215F65474EAbD27F',
      strategy: '0x435B65196f302b04bAabcc1E5f07CA1192736771',
      auxStrategy: [],
      allySwap: '0xB973C8BE7d9A5a6dB9B227555C70C8f4De3FB82D',
      decimals: 18,
      displayName: 'oneBTC',
      symbol: 'oneBTC',
      fullName: 'oneBTC',
      isOneToken: true,
      atCoingecko: false,
      isV2: true,
      ichiVault: {
        address: '0x5318c21c96256ce4b73c27D405147df97d28E0Be',
        farm: 0,
        externalFarm: '',
        scarceToken: 'token0',
        scarceTokenName: TokenName.ICHI,
        scarceTokenDecimals: 9
      },
      stimulusName: TokenName.WBTC,
      stimulusDisplayName: 'wBTC',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599&chain=mainnet'
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.ONE_BTC,
      tableName: `pol_${TokenName.ONE_BTC}`,
      address: '0x1f194578e7510A350fb517a9ce63C40Fa1899427',
      strategy: '0x51803f621c5e90011DE58b57fD5b7A92e0e39B08',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneBTC',
      symbol: 'oneBTC',
      fullName: 'oneBTC',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      ichiVault: {
        address: '0xE5bf5D33C617556B91558aAfb7BeadB68E9Cea81',
        farm: 0,
        externalFarm: '',
        scarceToken: 'token0',
        scarceTokenName: TokenName.ICHI,
        scarceTokenDecimals: 18
      },
      stimulusName: TokenName.WBTC,
      stimulusDisplayName: 'wBTC',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6&chain=polygon'
    },
    [ChainId.Mumbai]: {
      tokenName: TokenName.ONE_BTC,
      tableName: `mum_${TokenName.ONE_BTC}`,
      symbol: 'oneBTC',
      fullName: 'oneBTC',
      atCoingecko: false,
      address: '0xeE0de02B5aFb77aD8718bA6C24A93fF3ea4e5637',
      strategy: '',
      decimals: 18,
      displayName: 'oneBTC',
      isOneToken: true,
      isV2: true,
      ichiVault: {
        address: '0xA3a17a728534Dc72A9865469C292C0b7D055D97d',
        farm: 0,
        externalFarm: '',
        scarceToken: 'token0',
        scarceTokenName: TokenName.ICHI,
        scarceTokenDecimals: 18
        //graphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/wing-vault'
      },
      stimulusName: TokenName.TOKEN_6,
      stimulusDisplayName: 'Token6',
      tradeUrl: ''
    }
  },
  [TokenName.ONE_FUSE]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_FUSE,
      tableName: TokenName.ONE_FUSE,
      address: '0xBbcE03B2E7f53caDCA93251CA4c928aF01Db6404',
      strategy: '0x8740C9f316241F905323920F4f4FA8A4d6aB100b',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneFUSE',
      symbol: 'oneFUSE',
      fullName: 'oneFUSE',
      isOneToken: true,
      atCoingecko: false,
      isV2: true,
      ichiVault: {
        address: '0x3A4411a33CfeF8BC01f23ED7518208aA38cca824',
        farm: 0,
        externalFarm: '0xBDf32c838e1b5d927B9ecb099b1f01F81d677A30',
        scarceToken: 'token0',
        scarceTokenName: TokenName.FUSE,
        scarceTokenDecimals: 18
      },
      stimulusName: TokenName.FUSE,
      stimulusDisplayName: 'FUSE',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d'
    }
  },
  [TokenName.ONE_GIV]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_GIV,
      tableName: TokenName.ONE_GIV,
      address: '0x17e6BA2519B4d15199B6529dB340910Ae031b1B0',
      strategy: '0x8A17A9ACF32811b0d2a10Bd97839643e8AD14B1B',
      auxStrategy: ['0x2B0ee142dCFE7C2dD150cDbd7B6832F6e9977f51'],
      decimals: 18,
      displayName: 'oneGIV',
      symbol: 'oneGIV',
      fullName: 'oneGIV',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: TokenName.GIV,
      stimulusDisplayName: 'GIV',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x900dB999074d9277c5DA2A43F252D74366230DA0'
    }
  },
  [TokenName.ONE_MPH]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_MPH,
      tableName: TokenName.ONE_MPH,
      address: '0xBE3F88E18BE3944FdDa830695228ADBB82fA125F',
      strategy: '0xF1587Cb51349CDf5bb408845249De36466C35F41',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneMPH',
      symbol: 'oneMPH',
      fullName: 'oneMPH',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: TokenName.MPH,
      stimulusDisplayName: 'MPH',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x8888801aF4d980682e47f1A9036e589479e835C5'
    }
  },
  [TokenName.ONE_PERL]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_PERL,
      tableName: TokenName.ONE_PERL,
      address: '0xD9A24485e71B9148e0Fd51F0162072099DF0dB67',
      strategy: '0x2Dfb5348CC20218426e566C1bD7B8b3789CBa9d5',
      auxStrategy: [],
      decimals: 18,
      displayName: 'onePERL',
      symbol: 'onePERL',
      fullName: 'onePERL',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: TokenName.PERL,
      stimulusDisplayName: 'PERL',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xeca82185adCE47f39c684352B0439f030f860318&use=V2'
    }
  },
  [TokenName.ONE_OJA]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_OJA,
      tableName: TokenName.ONE_OJA,
      address: '0xbB9E5DB6F357BB4dF35E8B90B37b8A3F33031D86',
      strategy: '0x2E76A8D053f839A04235341dF1f25235437fEDd6',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneOJA',
      symbol: 'oneOJA',
      fullName: 'oneOJA',
      isOneToken: true,
      atCoingecko: false,
      isV2: true,
      ichiVault: {
        address: '0x98bAd5Ce592DcfE706CC95a1B9dB7008B6D418F8',
        farm: 0,
        externalFarm: '0x4C8E041157f3DC06D6Cc5670EdE41aBA881D66e8',
        scarceToken: 'token0',
        scarceTokenName: TokenName.OJA,
        scarceTokenDecimals: 18
      },
      stimulusName: TokenName.OJA,
      stimulusDisplayName: 'OJA',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x0aA7eFE4945Db24d95cA6E117BBa65Ed326e291A&use=V2'
    }
  },
  [TokenName.ONE_UNI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_UNI,
      tableName: TokenName.ONE_UNI,
      address: '0x8290d7a64f25e6b5002d98367e8367c1b532b534',
      strategy: '0x6287d56e246EEE33beAd2D7DD3a99Db693f4554C',
      auxStrategy: ['0x55922Fa5084f9367B73FC0df9163B089D8Ac4CB7', '0x0b10e483aac4340256772754d23131b6e0dc31ea'],
      allySwap: '0x9Fd678389480590511302922ccA092482816D564',
      decimals: 18,
      displayName: 'oneUNI',
      symbol: 'oneUNI',
      fullName: 'oneUNI',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      ichiVault: {
        address: '0xfaeCcee632912c42a7c88c3544885A8D455408FA',
        farm: 16,
        externalFarm: '',
        scarceToken: 'token1',
        scarceTokenName: TokenName.ICHI,
        scarceTokenDecimals: 9
      },
      stimulusName: TokenName.UNI,
      stimulusDisplayName: 'UNI',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
    }
  },
  [TokenName.ONE_DODO]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_DODO,
      tableName: TokenName.ONE_DODO,
      address: '0xcA37530E7c5968627BE470081d1C993eb1dEaf90',
      strategy: '0x1faac4842054F2dB2DdDFC8152D7C259d5102c13',
      auxStrategy: [],
      allySwap: '0x3f57443040cC438d5d6108Fd024DfBFd048d9503',
      decimals: 18,
      displayName: 'oneDODO',
      symbol: 'oneDODO',
      fullName: 'oneDODO',
      isOneToken: true,
      isV2: true,
      stimulusName: TokenName.DODO,
      stimulusDisplayName: 'DODO',
      tradeUrl: 'https://app.dodoex.io/exchange/USDC-DODO?network=mainnet',
      atCoingecko: false
    }
  },
  [TokenName.ONE_FOX]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_FOX,
      tableName: TokenName.ONE_FOX,
      address: '0x03352D267951E96c6F7235037C5DFD2AB1466232',
      strategy: '0xeB370EE6927e4655a463F898fFF30479b34708f6',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneFOX',
      symbol: 'oneFOX',
      fullName: 'oneFOX',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      ichiVault: {
        address: '0x779F9BAd1f4B1Ef5198AD9361DBf3791F9e0D596',
        farm: 0,
        externalFarm: '0x81A19b061d6a726b3268FF13cB0f9eb1b6f2DDA5',
        scarceToken: 'token1',
        scarceTokenName: TokenName.FOX,
        scarceTokenDecimals: 18
      },
      stimulusName: TokenName.FOX,
      stimulusDisplayName: 'FOX',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xc770EEfAd204B5180dF6a14Ee197D99d808ee52d'
    }
  },
  [TokenName.ONE_WING]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_WING,
      tableName: TokenName.ONE_WING,
      address: '0x5047fc5C9D7c49Ab22e390d13646a6A3a2476eff',
      strategy: '0xac20007A5CBDA40d8E16df26bAD89E8738404691',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneWING',
      symbol: 'oneWING',
      fullName: 'oneWING',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      ichiVault: {
        address: '0x2a8E09552782563f7A076ccec0Ff39473B91Cd8F',
        farm: 0,
        externalFarm: '0xa87c231A2311B9484bfC9BF90C51C3181161eCB0',
        scarceToken: 'token1',
        scarceTokenName: TokenName.PWING,
        scarceTokenDecimals: 9
      },
      stimulusName: TokenName.PWING,
      stimulusDisplayName: 'pWING',
      tradeUrl: 'https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xDb0f18081b505A7DE20B18ac41856BCB4Ba86A1a'
    }
  },
  [TokenName.BOOT_USD]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.BOOT_USD,
      tableName: TokenName.BOOT_USD,
      address: '0x78a3b2f1e7eec1073088ea4a193618743f81cef8',
      strategy: '0x4ed128f3087DB2D9F6Ea0f1dca3b7FC716EC256C',
      auxStrategy: [],
      decimals: 18,
      displayName: 'BOOTusd',
      symbol: 'BOOTusd',
      fullName: 'BOOTusd',
      isOneToken: true,
      atCoingecko: false,
      isV2: true,
      stimulusName: TokenName.BOOT,
      stimulusDisplayName: 'BOOT',
      tradeUrl: 'https://www.boot.finance'
    }
  },
  [TokenName.ONE_ICHI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_ICHI,
      tableName: TokenName.ONE_ICHI,
      address: '0x4db2c02831c9ac305FF9311Eb661f80f1dF61e07',
      strategy: '0xAC225b5Be5b2EBe53b75798366287626b9881BC8',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneICHI',
      symbol: 'oneICHI',
      fullName: 'oneICHI',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: TokenName.ICHI_V2,
      stimulusDisplayName: 'ICHI',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6&chain=mainnet'
    }
  },
  [TokenName.TOKEN_6]: {
    [ChainId.Mumbai]: {
      tokenName: TokenName.TOKEN_6,
      tableName: `mum_${TokenName.TOKEN_6}`,
      symbol: 'Token6',
      fullName: 'Token6',
      atCoingecko: false,
      address: '0x13EDD87281803AF4178E7b30631ab7Cbb6819441',
      decimals: 6,
      displayName: 'Token6',
      isOneToken: false
    }
  }
};

export function getToken(tokenName: TokenName, chainId: ChainId): Token {
  const token = TOKENS[tokenName] != null ? TOKENS[tokenName]![chainId] : undefined;
  if (!token) {
    throw new Error(`Could not find ${tokenName} on ${chainId}`);
  }
  return token;
}

export function getUniswapToken(tokenName: TokenName, chainId: ChainId): UniswapToken {
  const token = TOKENS[tokenName] != null ? TOKENS[tokenName]![chainId] : undefined;

  if (!token) {
    throw new Error(`Could not find ${tokenName} on ${chainId}`);
  }

  const uniswapToken = new UniswapToken(chainId as number, token.address, token.decimals);
  return uniswapToken;
}

export function getTokens(chainId: ChainId): Token[] {
  const vaults: Token[] = Object.values(TOKENS)
    .map((t) => t[chainId])
    .filter((t) => t) as Token[];
  return vaults;
}

export function getOneTokens(chainId: ChainId): Token[] {
  const vaults: Token[] = Object.values(TOKENS)
    .map((t) => t[chainId])
    .filter((t) => t?.isOneToken)
    .filter((t) => t) as Token[];
  return vaults;
}
