import { TokenName } from '../models/tokenNames';
import { Vault } from '../models/vault';
import { VaultName } from '../models/vaultNames';
import { ChainId } from '../crypto/networks';
import { PartialRecord } from '../types/common';

type VaultMapping = {
  [vaultName in VaultName]: PartialRecord<ChainId, Vault>;
};

// ichi: { baseToken: 18, scarceToken: 9 },
// fuse: { baseToken: 18, scarceToken: 18 },
// wing: { baseToken: 18, scarceToken: 9 },
// oja: { baseToken: 18, scarceToken: 18 },
// gno: { baseToken: 18, scarceToken: 9 },
// cel: { baseToken: 4, scarceToken: 9 },
// wbtc: { baseToken: 8, scarceToken: 9 },
// onebtc: { baseToken: 18, scarceToken: 9 },
// wnxm: { baseToken: 18, scarceToken: 9 },
// fox: { baseToken: 18, scarceToken: 18 },
// gno_v2: { baseToken: 18, scarceToken: 18 },
// cel_v2: { baseToken: 4, scarceToken: 18 },
// wbtc_v2: { baseToken: 8, scarceToken: 18 },
// wnxm_v2: { baseToken: 18, scarceToken: 18 },
// qrdo: { baseToken: 6, scarceToken: 8 },
// oneichi_ichi: { baseToken: 18, scarceToken: 18 },
// usdc_ichi: { baseToken: 6, scarceToken: 18 },

// polygon_onebtc: { baseToken: 18, scarceToken: 18 },
// polygon_wbtc: { baseToken: 8, scarceToken: 18 },
// polygon_usdc: { baseToken: 6, scarceToken: 18 }

export const VAULTS: VaultMapping = {
  [VaultName.ONEFUSE_FUSE]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.ONEFUSE_FUSE, // old: 'fuse',
      tableName: VaultName.ONEFUSE_FUSE, // old: 'fuse',
      displayName: 'oneFUSE-FUSE',
      address: '0x3A4411a33CfeF8BC01f23ED7518208aA38cca824',
      farm: 0,
      externalFarm: '0xBDf32c838e1b5d927B9ecb099b1f01F81d677A30',
      scarceToken: 'token0',
      scarceTokenName: TokenName.FUSE,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'fuse-network-token',
      baseTokenName: TokenName.ONE_FUSE,
      baseTokenDecimals: 18,
      enableNotifications: false,
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/fuse-vault',
      irrStartDate: new Date(0),
      isInverted: true,
      isHodlVault: false,
      isLegacy: false,
      irrStartTxAmount: 0
    }
  },
  [VaultName.ONEUNI_ICHI]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.ONEUNI_ICHI, // old 'ichi',
      tableName: VaultName.ONEUNI_ICHI, // old 'ichi',
      displayName: 'oneUNI-ICHI (legacy)',
      address: '0xfaeCcee632912c42a7c88c3544885A8D455408FA',
      farm: 16,
      externalFarm: '',
      scarceToken: 'token1',
      scarceTokenName: TokenName.ICHI,
      scarceTokenDecimals: 9,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.ONE_UNI,
      baseTokenDecimals: 18,
      enableNotifications: true,
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/ichi-vault',
      irrStartDate: new Date(0),
      isInverted: false,
      isHodlVault: false,
      isLegacy: true,
      irrStartTxAmount: 0
    }
  },
  [VaultName.ONEWING_PWING]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.ONEWING_PWING, // old: 'wing',
      tableName: VaultName.ONEWING_PWING, // old: 'wing',
      displayName: 'oneWING-pWING',
      address: '0x2a8E09552782563f7A076ccec0Ff39473B91Cd8F',
      farm: 0,
      externalFarm: '0xa87c231A2311B9484bfC9BF90C51C3181161eCB0',
      scarceToken: 'token1',
      scarceTokenName: TokenName.PWING,
      scarceTokenDecimals: 9,
      scarceTokenCoingeckoId: '',
      baseTokenName: TokenName.ONE_WING,
      baseTokenDecimals: 18,
      enableNotifications: false,
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/wing-vault',
      irrStartDate: new Date(0),
      isInverted: false,
      isHodlVault: false,
      isLegacy: true,
      irrStartTxAmount: 0
    }
  },
  [VaultName.ONEFOX_FOX]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.ONEFOX_FOX, // old: 'fox',
      tableName: VaultName.ONEFOX_FOX, // old: 'fox',
      displayName: 'oneFOX-FOX',
      address: '0x779F9BAd1f4B1Ef5198AD9361DBf3791F9e0D596',
      farm: 0,
      externalFarm: '0x81A19b061d6a726b3268FF13cB0f9eb1b6f2DDA5',
      scarceToken: 'token1',
      scarceTokenName: TokenName.FOX,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'shapeshift-fox-token',
      baseTokenName: TokenName.ONE_FOX,
      baseTokenDecimals: 18,
      enableNotifications: false,
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/fox-vault',
      irrStartDate: new Date('2022-03-09T02:00:00'),
      isInverted: false,
      isHodlVault: false,
      isLegacy: true,
      irrStartTxAmount: 0
    }
  },
  [VaultName.ONEOJA_OJA]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.ONEOJA_OJA, // old: 'oja',
      tableName: VaultName.ONEOJA_OJA, // old: 'oja',
      displayName: 'oneOJA-OJA',
      address: '0x98bAd5Ce592DcfE706CC95a1B9dB7008B6D418F8',
      farm: 0,
      externalFarm: '0x4C8E041157f3DC06D6Cc5670EdE41aBA881D66e8',
      scarceToken: 'token0',
      scarceTokenName: TokenName.OJA,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'ojamu',
      baseTokenName: TokenName.ONE_OJA,
      baseTokenDecimals: 18,
      enableNotifications: false,
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/oja-vault',
      irrStartDate: new Date(0),
      isInverted: true,
      isHodlVault: false,
      isLegacy: true,
      irrStartTxAmount: 0
    }
  },
  [VaultName.GNO_ICHI]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.GNO_ICHI, // old: 'gno',
      tableName: VaultName.GNO_ICHI, // old: 'gno',
      displayName: 'GNO-ICHI (legacy)',
      address: '0xA380EA6BE1C084851aE7846a8F39def17eCf6ED8',
      farm: 19,
      externalFarm: '',
      scarceToken: 'token1',
      scarceTokenName: TokenName.ICHI,
      scarceTokenDecimals: 9,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.GNO,
      baseTokenDecimals: 18,
      enableNotifications: true,
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/gno-vault',
      irrStartDate: new Date('2022-03-10T14:25:23'),
      isInverted: false,
      isHodlVault: true,
      isLegacy: true,
      irrStartTxAmount: 17916
    }
  },
  [VaultName.FUSE_ICHI]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.FUSE_ICHI, 
      tableName: VaultName.FUSE_ICHI, 
      displayName: 'FUSE-ICHI',
      address: '0xF6d4cdF6A9a82Aa56d2F2E1825B9f8E6052d8C46',
      farm: 30,
      externalFarm: '',
      scarceToken: 'token0',
      scarceTokenName: TokenName.ICHI_V2,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.FUSE,
      baseTokenDecimals: 18,
      enableNotifications: true,
      subgraphEndpoint: '',
      irrStartDate: new Date(0),
      isInverted: true,
      isHodlVault: true,
      isLegacy: false,
      irrStartTxAmount: 0
    }
  },
  [VaultName.CEL_ICHI]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.CEL_ICHI, // old: 'cel',
      tableName: VaultName.CEL_ICHI, // old: 'cel',
      displayName: 'CEL-ICHI (legacy)',
      address: '0x82FF3E2eC3bDCa84CF0637402907e26C51d1d676',
      farm: 20,
      externalFarm: '',
      scarceToken: 'token0',
      scarceTokenName: TokenName.ICHI,
      scarceTokenDecimals: 9,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.CEL,
      baseTokenDecimals: 4,
      enableNotifications: true,
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/cel-vault',
      irrStartDate: new Date('2022-03-23T00:13:17'),
      isInverted: true,
      isHodlVault: true,
      isLegacy: true,
      irrStartTxAmount: 346101.2345
    }
  },
  [VaultName.WNXM_ICHI]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.WNXM_ICHI, // old: 'wnxm',
      tableName: VaultName.WNXM_ICHI, // old: 'wnxm',
      displayName: 'wNXM-ICHI (legacy)',
      address: '0xd3FeD75d934Ab824Ff7FEcd0f8A70f204e61769b',
      farm: 21,
      externalFarm: '',
      scarceToken: 'token1',
      scarceTokenName: TokenName.ICHI,
      scarceTokenDecimals: 9,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.WNXM,
      baseTokenDecimals: 18,
      enableNotifications: true,
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/wnxm-vault',
      irrStartDate: new Date('2022-03-15T19:04:48'),
      isInverted: false,
      isHodlVault: true,
      isLegacy: true,
      irrStartTxAmount: 222193
    }
  },
  [VaultName.WBTC_ICHI]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.WBTC_ICHI, // old: 'wbtc',
      tableName: VaultName.WBTC_ICHI, // old: 'wbtc',
      displayName: 'wBTC-ICHI (legacy)',
      address: '0xeF88913c674a9cA1E79b3986e4b222F3E75c7d05',
      farm: 22,
      externalFarm: '',
      scarceToken: 'token1',
      scarceTokenName: TokenName.ICHI,
      scarceTokenDecimals: 9,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.WBTC,
      baseTokenDecimals: 8,
      enableNotifications: true,
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/wbtc-vault',
      irrStartDate: new Date('2022-03-30T18:17:57'),
      isInverted: false,
      isHodlVault: true,
      isLegacy: true,
      irrStartTxAmount: 75.482852739
    },
  },
  [VaultName.ONEBTC_ICHI]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.ONEBTC_ICHI, // old: 'onebtc',
      tableName: VaultName.ONEBTC_ICHI, // old: 'onebtc',
      displayName: 'oneBTC-ICHI (legacy)',
      address: '0x5318c21c96256ce4b73c27D405147df97d28E0Be',
      farm: 23,
      externalFarm: '',
      scarceToken: 'token0',
      scarceTokenName: TokenName.ICHI,
      scarceTokenDecimals: 9,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.ONE_BTC,
      baseTokenDecimals: 18,
      enableNotifications: true,
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/onebtc-vault',
      irrStartDate: new Date(0),
      isInverted: true,
      isHodlVault: false,
      isLegacy: true,
      irrStartTxAmount: 0
    },
    [ChainId.Polygon]: {
      vaultName: VaultName.ONEBTC_ICHI, // old: 'polygon_onebtc',
      tableName: `pol_${VaultName.ONEBTC_ICHI}`, // old: 'polygon_onebtc',
      displayName: 'oneBTC-ICHI (polygon)',
      address: '0xE5bf5D33C617556B91558aAfb7BeadB68E9Cea81',
      farm: 0,
      externalFarm: '',
      scarceToken: 'token0',
      scarceTokenName: TokenName.ICHI_V2,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.ONE_BTC,
      baseTokenDecimals: 18,
      enableNotifications: true,
      subgraphEndpoint: '',
      irrStartDate: new Date('2022-05-26T02:00:00'),
      isInverted: true,
      isHodlVault: false,
      isLegacy: false,
      irrStartTxAmount: 0
    }
  },
  [VaultName.GNO_ICHI_V2]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.GNO_ICHI_V2, // old: 'gno_v2',
      tableName: VaultName.GNO_ICHI_V2, // old: 'gno_v2',
      displayName: 'GNO-ICHI',
      address: '0xd9E3646f5f6F491c0011796C0f7eC45C6639c4C6',
      farm: 26,
      externalFarm: '',
      scarceToken: 'token0',
      scarceTokenName: TokenName.ICHI_V2,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.GNO,
      baseTokenDecimals: 18,
      enableNotifications: true,
      subgraphEndpoint: '',
      irrStartDate: new Date(0),
      isInverted: true,
      isHodlVault: true,
      isLegacy: false,
      irrStartTxAmount: 0
    }
  },
  [VaultName.CEL_ICHI_V2]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.CEL_ICHI_V2, // old: 'cel_v2',
      tableName: VaultName.CEL_ICHI_V2, // old: 'cel_v2',
      displayName: 'CEL-ICHI',
      address: '0x5fEb9A87A9C7d05C9Fbf7D24e753ceEE6696f10D',
      farm: 25,
      externalFarm: '',
      scarceToken: 'token0',
      scarceTokenName: TokenName.ICHI_V2,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.CEL,
      baseTokenDecimals: 4,
      enableNotifications: true,
      subgraphEndpoint: '',
      irrStartDate: new Date(0),
      isInverted: true,
      isHodlVault: true,
      isLegacy: false,
      irrStartTxAmount: 0
    }
  },
  [VaultName.WNXM_ICHI_V2]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.WNXM_ICHI_V2, // old: 'wnxm_v2',
      tableName: VaultName.WNXM_ICHI_V2, // old: 'wnxm_v2',
      displayName: 'wNXM-ICHI',
      address: '0x8abb986fB2C72aBc5a08f4D34BaF15279Dd5581F',
      farm: 24,
      externalFarm: '',
      scarceToken: 'token1',
      scarceTokenName: TokenName.ICHI_V2,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.WNXM,
      baseTokenDecimals: 18,
      enableNotifications: true,
      subgraphEndpoint: '',
      irrStartDate: new Date(0),
      isInverted: false,
      isHodlVault: true,
      isLegacy: false,
      irrStartTxAmount: 0
    }
  },
  [VaultName.WBTC_ICHI_V2]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.WBTC_ICHI_V2, // old: 'wbtc_v2',
      tableName: VaultName.WBTC_ICHI_V2, // old: 'wbtc_v2',
      displayName: 'wBTC-ICHI',
      address: '0x913b7D91e019402233d2f75863133925CE658CD9',
      farm: 28,
      externalFarm: '',
      scarceToken: 'token0',
      scarceTokenName: TokenName.ICHI_V2,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.WBTC,
      baseTokenDecimals: 8,
      enableNotifications: true,
      subgraphEndpoint: '',
      irrStartDate: new Date(0),
      isInverted: true,
      isHodlVault: true,
      isLegacy: false,
      irrStartTxAmount: 0
    },
    [ChainId.Polygon]: {
      vaultName: VaultName.WBTC_ICHI_V2, // old: 'polygon_wbtc',
      tableName: `pol_${VaultName.WBTC_ICHI_V2}`, // old: 'polygon_wbtc',
      displayName: 'wBTC-ICHI (polygon)',
      address: '0x4aef5144131db95c110af41c8ec09f46295a7c4b',
      farm: 1,
      externalFarm: '',
      scarceToken: 'token0',
      scarceTokenName: TokenName.ICHI_V2,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.WBTC,
      baseTokenDecimals: 8,
      enableNotifications: true,
      subgraphEndpoint: '',
      // irrStartDate: new Date('2022-05-26T02:00:00'),
      irrStartDate: new Date(0),
      isInverted: true,
      isHodlVault: true,
      isLegacy: false,
      irrStartTxAmount: 0
    }
  },
  [VaultName.QRDO_USDC]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.QRDO_USDC, // old: 'qrdo',
      tableName: VaultName.QRDO_USDC, // old: 'qrdo',
      displayName: 'QRDO-USDC',
      address: '0x784Ac9aaeaB58AAf904cc69e105aa51343E4C693',
      farm: 0,
      externalFarm: '0x15187432d28d8Ee94957a3277A51708b707D374e',
      scarceToken: 'token0',
      scarceTokenName: TokenName.QRDO,
      scarceTokenDecimals: 8,
      scarceTokenCoingeckoId: 'qredo',
      baseTokenName: TokenName.USDC,
      baseTokenDecimals: 6,
      enableNotifications: true,
      subgraphEndpoint: '',
      irrStartDate: new Date(0),
      isInverted: true,
      isHodlVault: true,
      isLegacy: false,
      irrStartTxAmount: 0
    }
  },
  [VaultName.ONEGIV_GIV]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.ONEGIV_GIV, 
      tableName: VaultName.ONEGIV_GIV, 
      displayName: 'oneGIV-GIV',
      address: '0xc3151A58d519B94E915f66B044De3E55F77c2dd9',
      farm: 0,
      externalFarm: '0x944344CD4014305e1fFAA613396D82eAf5b67B2D',
      scarceToken: 'token1',
      scarceTokenName: TokenName.GIV,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'giveth',
      baseTokenName: TokenName.ONE_GIV,
      baseTokenDecimals: 18,
      enableNotifications: true,
      subgraphEndpoint: '',
      irrStartDate: new Date(0),
      isInverted: false,
      isHodlVault: false,
      isLegacy: false,
      irrStartTxAmount: 0
    }
  },
  [VaultName.USDC_ICHI]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.USDC_ICHI, // old: 'usdc_ichi',
      tableName: VaultName.USDC_ICHI, // old: 'usdc_ichi',
      displayName: 'USDC-ICHI',
      address: '0x683F081DBC729dbD34AbaC708Fa0B390d49F1c39',
      farm: 0,
      externalFarm: '0x4B162306eE680Bf440541c3E5C70c553f632C8aA',
      scarceToken: 'token0',
      scarceTokenName: TokenName.ICHI_V2,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.USDC,
      baseTokenDecimals: 6,
      enableNotifications: true,
      subgraphEndpoint: '',
      irrStartDate: new Date(0),
      isInverted: true,
      isHodlVault: false,
      isLegacy: false,
      irrStartTxAmount: 0
    },
    [ChainId.Polygon]: {
      vaultName: VaultName.USDC_ICHI, // old: 'polygon_usdc',
      tableName: `pol_${VaultName.USDC_ICHI}`, // old: 'polygon_usdc',
      displayName: 'USDC-ICHI (polygon)',
      address: '0x711901e4b9136119Fb047ABe8c43D49339f161c3',
      farm: 2,
      externalFarm: '',
      scarceToken: 'token0',
      scarceTokenName: TokenName.ICHI_V2,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.USDC,
      baseTokenDecimals: 6,
      enableNotifications: true,
      subgraphEndpoint: '',
      irrStartDate: new Date(0),
      isInverted: true,
      isHodlVault: true,
      isLegacy: false,
      irrStartTxAmount: 0
    }
  },
  [VaultName.ONEICHI_ICHI]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.ONEICHI_ICHI, // old: 'oneichi_ichi',
      tableName: VaultName.ONEICHI_ICHI, // old: 'oneichi_ichi',
      displayName: 'oneICHI-ICHI',
      address: '0x46f9490bcbcd0A12d3d8578B5b3AB19f8EF0617D',
      farm: 1,
      externalFarm: '0x4B162306eE680Bf440541c3E5C70c553f632C8aA',
      scarceToken: 'token0',
      scarceTokenName: TokenName.ICHI_V2,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.ONE_ICHI,
      baseTokenDecimals: 18,
      enableNotifications: true,
      subgraphEndpoint: '',
      irrStartDate: new Date(0),
      isInverted: true,
      isHodlVault: false,
      isLegacy: false,
      irrStartTxAmount: 0
    }
  },
  [VaultName.BNT_ICHI]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.BNT_ICHI,
      tableName: VaultName.BNT_ICHI,
      displayName: 'BNT-ICHI',
      address: '0x4DFa8455658f4d6D2eeb91CbeFb0Ee94056bB3dC',
      farm: 29,
      externalFarm: '0x4B162306eE680Bf440541c3E5C70c553f632C8aA',
      scarceToken: 'token0',
      scarceTokenName: TokenName.ICHI_V2,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.BNT,
      baseTokenDecimals: 18,
      enableNotifications: true,
      subgraphEndpoint: '',
      irrStartDate: new Date(0),
      isInverted: true,
      isHodlVault: true,
      isLegacy: false,
      irrStartTxAmount: 0
    }
  }
};

export function getVault(
  vaultName: VaultName,
  opts: { chainId: ChainId; throwIfNotFound?: boolean } = { chainId: ChainId.Mainnet, throwIfNotFound: true }
): Vault {
  const vault = VAULTS[vaultName][opts.chainId] as Vault;
  if (!vault) {
    if (opts.throwIfNotFound) {
      throw new Error(`Could not find ${vaultName} on ${opts.chainId}`);
    } else {
      console.warn(`Could not find ${vaultName} on ${opts.chainId}`);
    }
  }
  return vault;
}

export function getVaults(chainId: ChainId): Vault[] {
  const names = Object.keys(VAULTS);
  const vaults: Vault[] = [];
  for (let name of names) {
    if (chainId in VAULTS[name]) {
      vaults.push(VAULTS[name][chainId]);
    }
  }
  return vaults;
}
