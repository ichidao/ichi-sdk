import { TokenName } from '../enums/tokenName';
import { Vault } from '../models/vault';
import { ChainId } from '../crypto/networks';
import { PartialRecord } from '../types/common';
import { VaultName, VaultTableName } from '../enums/vaultName';

// type VaultMapping = {
//   [vaultName in VaultName]: PartialRecord<ChainId, Vault>;
// };
type VaultMapping = Record<VaultName, PartialRecord<ChainId, Vault>>;

export const VAULTS: VaultMapping = {
  [VaultName.ALLY]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.ALLY,
      tableName: VaultTableName.ALLY_ICHI,
      displayName: 'ALLY-ICHI',
      address: '0xE0b60aC202530017E5f06561156531c3AdfC5c8f',
      farm: 33,
      externalFarm: '0x275dFE03bc036257Cd0a713EE819Dbd4529739c8',
      scarceToken: 'token0',
      scarceTokenName: TokenName.ICHI_V2,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.ALLY,
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
  [VaultName.WETH]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.WETH,
      tableName: VaultTableName.WETH_ICHI,
      displayName: 'wETH-ICHI',
      address: '0x48fBe026392E4c86b859794ABB56625537c16dd0',
      farm: 32,
      externalFarm: '0x275dFE03bc036257Cd0a713EE819Dbd4529739c8',
      scarceToken: 'token0',
      scarceTokenName: TokenName.ICHI_V2,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.WETH,
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
  [VaultName['1INCH']]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName['1INCH'],
      tableName: VaultTableName['1INCH_ICHI'],
      displayName: '1INCH-ICHI',
      address: '0x65953959EdA6f0085D75B6e6E1F44212AB71c55A',
      farm: 31,
      externalFarm: '0x275dFE03bc036257Cd0a713EE819Dbd4529739c8',
      scarceToken: 'token1',
      scarceTokenName: TokenName.ICHI_V2,
      scarceTokenDecimals: 18,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName['1INCH'],
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
  [VaultName.FUSE]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.FUSE, // old: 'fuse',
      tableName: VaultTableName.ONEFUSE_FUSE, // old: 'fuse',
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
  [VaultName.ICHI]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.ICHI,
      tableName: VaultTableName.ONEUNI_ICHI, // old 'ichi',
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
  [VaultName.WING]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.WING, // old: 'wing',
      tableName: VaultTableName.ONEWING_PWING, // old: 'wing',
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
  [VaultName.FOX]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.FOX, // old: 'fox',
      tableName: VaultTableName.ONEFOX_FOX, // old: 'fox',
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
  [VaultName.OJA]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.OJA, // old: 'oja',
      tableName: VaultTableName.ONEOJA_OJA, // old: 'oja',
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
  [VaultName.GNO]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.GNO, // old: 'gno',
      tableName: VaultTableName.GNO_ICHI, // old: 'gno',
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
  [VaultName.CEL]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.CEL, // old: 'cel',
      tableName: VaultTableName.CEL_ICHI, // old: 'cel',
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
  [VaultName.WBTC]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.WBTC, // old: 'wbtc',
      tableName: VaultTableName.WBTC_ICHI, // old: 'wbtc',
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
    }
  },
  [VaultName.POLYGON_WBTC]: {
    [ChainId.Polygon]: {
      vaultName: VaultName.POLYGON_WBTC, // old: 'polygon_wbtc',
      // tableName: `pol_${VaultName.WBTC_ICHI_V2}`, // old: 'polygon_wbtc',
      tableName: VaultTableName.POLYGON_WBTC_ICHI, // old: 'polygon_wbtc',
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
  [VaultName.ONEBTC]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.ONEBTC, // old: 'onebtc',
      tableName: VaultTableName.ONEBTC_ICHI, // old: 'onebtc',
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
    }
  },
  [VaultName.POLYGON_ONEBTC]: {
    [ChainId.Polygon]: {
      vaultName: VaultName.POLYGON_ONEBTC, // old: 'polygon_onebtc',
      // tableName: `pol_${VaultName.ONEBTC_ICHI}`, // old: 'polygon_onebtc',
      tableName: VaultTableName.POLYGON_ONEBTC_ICHI, // old: 'polygon_onebtc',
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
  [VaultName.GNO_V2]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.GNO_V2, // old: 'gno_v2',
      tableName: VaultTableName.GNO_ICHI_V2, // old: 'gno_v2',
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
  [VaultName.CEL_V2]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.CEL_V2, // old: 'cel_v2',
      tableName: VaultTableName.CEL_ICHI_V2, // old: 'cel_v2',
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
  [VaultName.WNXM]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.WNXM, // old: 'wnxm',
      tableName: VaultTableName.WNXM_ICHI, // old: 'wnxm',
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
  [VaultName.WNXM_V2]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.WNXM_V2, // old: 'wnxm_v2',
      tableName: VaultTableName.WNXM_ICHI_V2, // old: 'wnxm_v2',
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
  [VaultName.WBTC_V2]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.WBTC_V2, // old: 'wbtc_v2',
      tableName: VaultTableName.WBTC_ICHI_V2, // old: 'wbtc_v2',
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
    }
  },
  [VaultName.QRDO]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.QRDO, // old: 'qrdo',
      tableName: VaultTableName.QRDO_USDC, // old: 'qrdo',
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
  [VaultName.USDC_ICHI]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.USDC_ICHI, // old: 'usdc_ichi',
      tableName: VaultTableName.USDC_ICHI, // old: 'usdc_ichi',
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
      // tableName: `pol_${VaultName.USDC_ICHI}`, // old: 'polygon_usdc',
      tableName: VaultTableName.POLYGON_USDC_ICHI, // old: 'polygon_usdc',
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
  [VaultName.POLYGON_USDC]: {
    [ChainId.Polygon]: {
      vaultName: VaultName.POLYGON_USDC, // old: 'polygon_usdc',
      // tableName: `pol_${VaultName.USDC_ICHI}`, // old: 'polygon_usdc',
      tableName: VaultTableName.POLYGON_USDC_ICHI, // old: 'polygon_usdc',
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
      tableName: VaultTableName.ONEICHI_ICHI, // old: 'oneichi_ichi',
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
  // [VaultName.ONE_ICHI]: {
  //   [ChainId.Mainnet]: {
  //     name: 'oneICHI Vault',
  //     tableName: VaultTableName.ONEICHI, // old: 'oneichi_ichi',
  //     lpName: 'ICHI_VAULT_LP',
  //     shortLpName: 'VAULT_LP',
  //     farmAddress: ADDRESSES.farming_V3,
  //     farmId: 1,
  //     farmRewardTokenName: TOKENS.ichi_v2.displayName,
  //     farmRewardTokenDecimals: 18,
  //     farmRewardTokenAddress: TOKENS.ichi_v2.address,
  //     tradeUrl:
  //       'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x4db2c02831c9ac305FF9311Eb661f80f1dF61e07&chain=mainnet',
  //     subgraphEndpoint: '',
  //     isInverted: true,
  //     isHodl: false,
  //     vaultName: VaultName.ONE_ICHI,
  //     vaultAddress: '0x46f9490bcbcd0A12d3d8578B5b3AB19f8EF0617D',
  //     irrStartDate: new Date(0),
  //     irrStartTxAmount: 0
  //   }
  // },
  [VaultName.BNT_V2]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.BNT_V2,
      tableName: VaultTableName.BNT_ICHI,
      displayName: 'BNT-ICHI',
      address: '0x4DFa8455658f4d6D2eeb91CbeFb0Ee94056bB3dC',
      farm: 29,
      externalFarm: '0x275dFE03bc036257Cd0a713EE819Dbd4529739c8',
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
  },
  [VaultName.ONEGIV_GIV]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.ONEGIV_GIV,
      tableName: VaultTableName.ONEGIV_GIV,
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
  [VaultName.FUSE_ICHI]: {
    [ChainId.Mainnet]: {
      vaultName: VaultName.FUSE_ICHI,
      tableName: VaultTableName.FUSE_ICHI,
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
  [VaultName.KOVAN_ONE_FIL]: {
    [ChainId.Kovan]: {
      vaultName: VaultName.KOVAN_ONE_FIL,
      tableName: VaultTableName.KOVAN_ONE_FIL,
      displayName: 'oneFIL-ICHI',
      address: '0xA0D500fd3479CBCb64a2238082b7a1Df9f87d98D',
      farm: 4, // id in the farm, 5000 is internal, from farm starts at 0 and goes up
      externalFarm: '',
      scarceToken: 'token1', // ICHi since token0 in contract is oneFIL
      scarceTokenName: TokenName.ICHI,
      scarceTokenDecimals: 9,
      scarceTokenCoingeckoId: 'ichi-farm',
      baseTokenName: TokenName.ONE_FIL,
      baseTokenDecimals: 18,
      enableNotifications: false,
      subgraphEndpoint: '',
      irrStartDate: new Date(0),
      isInverted: false, // will be inverted if token0 is ICHI, in this case token0 is oneFIL so inverted false
      isHodlVault: false,
      isLegacy: false,
      irrStartTxAmount: 0
    }
  }
};

export function getVault(vaultName: VaultName, chainId: ChainId): Vault {
  const vault = VAULTS[vaultName] != null ? VAULTS[vaultName]![chainId] : undefined;
  if (!vault) {
    throw new Error(`Could not find ${vaultName} on ${chainId}`);
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
