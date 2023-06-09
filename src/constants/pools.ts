import { TokenName } from '../enums/tokenName';
import { PoolName } from '../enums/poolName';
import { ChainId } from '../crypto/networks';
import { Pool } from '../models/pool';
import { PartialRecord } from '../types/common';
import { PoolGroupName } from '../enums/poolManagementName';
import { 
  KovanPoolNumbers, 
  KovanPoolNumberValues, 
  MainnetPoolNumbers, 
  MainnetPoolNumberValues, 
  MumbaiPoolNumbers, 
  MumbaiPoolNumberValues, 
  PolygonPoolNumbers, 
  PolygonPoolNumberValues, 
  PoolNumberValues } from '../enums/poolNumber';

type TPoolMapping = { [vaultName in PoolName]: PartialRecord<ChainId, Pool> };
// NOTE: To some degree it's more logical to namespace with Network then PoolName, but actually
// it get's annoying to scroll to the Network you want while coding, and better dev exp
// to find the Pool in question then you can see all info right there.  Either way would work, but this
// is the way we've chosen.
export const PoolMapping: TPoolMapping = {
  [PoolName.ONEFUSE_USDC]: {
    [ChainId.Mainnet]: {
      poolName: PoolName.ONEFUSE_USDC,
      tableName: PoolName.ONEFUSE_USDC,
      displayName: 'oneFUSE-USDC',
      address: '0x61f2ea3ddabcb9f0b7bd73adba4ec24479247a86',
      oneTokenName: TokenName.ONE_FUSE,
      oneToken: 'token1',
      enableNotifications: false,
    },
  },
  // [PoolName.ONEUNI_USDC]: {
  //   [ChainId.Mainnet]: {
  //     poolName: PoolName.ONEUNI_USDC,
  //     tableName: PoolName.ONEUNI_USDC,
  //     displayName: 'oneUNI-USDC',
  //     address: '0x613944734e29e73d084673d1532bff8683ed9a5b',
  //     oneTokenName: TokenName.ONE_UNI,
  //     oneToken: 'token0',
  //     enableNotifications: false
  //   }
  // },
  // [PoolName.ONEWING_USDC]: {
  //   [ChainId.Mainnet]: {
  //     poolName: PoolName.ONEWING_USDC,
  //     tableName: PoolName.ONEWING_USDC,
  //     displayName: 'oneWING-USDC',
  //     address: '0xD63005e1d0bD8029B656dd43AD8eB66f27B15E07',
  //     oneTokenName: TokenName.ONE_WING,
  //     oneToken: 'token0',
  //     enableNotifications: false
  //   }
  // },
  // [PoolName.ONEFOX_USDC]: {
  //   [ChainId.Mainnet]: {
  //     poolName: PoolName.ONEFOX_USDC,
  //     tableName: PoolName.ONEFOX_USDC,
  //     displayName: 'oneFOX-USDC',
  //     address: '0x4c008261215087bd22d6a983399ae659d816bb50',
  //     : TokenName.ONE_FOX,
  //     oneToken: 'token0',
  //     enableNotifications: false
  //   }
  // },
  [PoolName.ONEPERL_USDC]: {
    [ChainId.Mainnet]: {
      poolName: PoolName.ONEPERL_USDC,
      tableName: PoolName.ONEPERL_USDC,
      displayName: 'onePERL-USDC',
      address: '0x1F52846051b4dB60ba70bA76C188e6a67699fdB0',
      oneTokenName: TokenName.ONE_PERL,
      oneToken: 'token1',
      enableNotifications: false,
    },
  },
  /*onefil_usdc: { 
    displayName: 'oneFIL-USDC',
    address: '0x6486548df147764da6eb09b822915EfBF3343522',
    oneTokenName: 'onefil',
    oneToken: 'token0',
    enableNotifications: false,
  },*/
  // [PoolName.ONEMPH_USDC]: {
  //   [ChainId.Mainnet]: {
  //     poolName: PoolName.ONEMPH_USDC,
  //     tableName: PoolName.ONEMPH_USDC,
  //     displayName: 'oneMPH-USDC',
  //     address: '0x42F1B1a352B4e700172F316eC5f721765a71EfF4',
  //     oneTokenName: TokenName.ONE_MPH,
  //     oneToken: 'token1',
  //     enableNotifications: false
  //   }
  // },
  [PoolName.ONE1INCH_USDC]: {
    [ChainId.Mainnet]: {
      poolName: PoolName.ONE1INCH_USDC,
      tableName: PoolName.ONE1INCH_USDC,
      displayName: 'one1INCH-USDC',
      address: '0x7233A14685201F548d8a7AC5f5Ca3DEdb7bb6d42',
      oneTokenName: TokenName.ONE_1INCH,
      oneToken: 'token0',
      enableNotifications: false,
    },
  },
  [PoolName.ONEGIV_DAI]: {
    [ChainId.Mainnet]: {
      poolName: PoolName.ONEGIV_DAI,
      tableName: PoolName.ONEGIV_DAI,
      displayName: 'oneGIV-DAI',
      address: '0xC506ca6089648D3Fc22dEb5CFAbb8F01f39D4eaF',
      oneTokenName: TokenName.ONE_GIV,
      oneToken: 'token0',
      enableNotifications: false,
      otherToken: TokenName.DAI,
    },
  },
  [PoolName.ONEICHI_USDC]: {
    [ChainId.Mainnet]: {
      poolName: PoolName.ONEICHI_USDC,
      tableName: PoolName.ONEICHI_USDC,
      displayName: 'oneICHI-USDC',
      address: '0xF836a9268d39C89c9C8533BF97e93C00E25dC13e',
      oneTokenName: TokenName.ONE_ICHI,
      oneToken: 'token0',
      enableNotifications: false,
    },
  },
  // onefil_oneuni: {
  //   displayName: 'oneFIL-oneUNI',
  //   address: '0x9bDE1bC608fdAfA59176C6fbC0779efb8437246F',
  //   oneTokenName: 'onefil',
  //   otherToken: 'oneuni',
  //   oneToken: 'token0',
  //   enableNotifications: false,
  // },
  // [PoolName.ONEOJA_USDC]: {
  //   [ChainId.Mainnet]: {
  //     poolName: PoolName.ONEOJA_USDC,
  //     tableName: PoolName.ONEOJA_USDC,
  //     displayName: 'oneOJA-USDC',
  //     address: '0x6195fe3c13746862deac6139c4e8be5e80b96c6c',
  //     oneTokenName: TokenName.ONE_OJA,
  //     oneToken: 'token1',
  //     enableNotifications: false
  //   }
  // }
  // onebtc_usdc: {
  //   displayName: 'oneBTC-USDC',
  //   address: '0x8324be628543be4a8ee4448c1a269cad3da487f6',
  //   oneTokenName: 'onebtc',
  //   oneToken: 'token1',
  //   enableNotifications: false,
  // },

  // Polygon
  // onebtc_ichi: {
  //   displayName: 'oneBTC-USDC',
  //   address: '0x8324be628543be4a8ee4448c1a269cad3da487f6',
  //   oneTokenName: 'onebtc',
  //   oneToken: 'token1',
  //   enableNotifications: false,
  // },
};

type TPools = {
  // [poolGroupName in PoolGroupName]: Record<ChainId, PoolNumberValues[]>
  [poolGroupName in PoolGroupName]: {
    [ChainId.Mainnet]: MainnetPoolNumberValues[];
    [ChainId.Kovan]: KovanPoolNumberValues[];
    [ChainId.Polygon]: PolygonPoolNumberValues[];
    [ChainId.Mumbai]: MumbaiPoolNumberValues[];
  };
};

// Kovan
// const POOLS = {
//   unretiredPools: []
// };

export const Pools: TPools = {
  [PoolGroupName.ACTIVE_POOLS]: {
    [ChainId.Mainnet]: [
      MainnetPoolNumbers._80_20_ICHI_ETH,
      MainnetPoolNumbers.ICHI_BNT,
      MainnetPoolNumbers.ICHI_BNT_V3,
      MainnetPoolNumbers.ICHI_ETH_SUSHI,
      MainnetPoolNumbers.ICHI_ETH_UNI_V2,
      MainnetPoolNumbers.ONE_FIL,
      MainnetPoolNumbers.ONE_1INCH,
      MainnetPoolNumbers.ONE_MPH,
      MainnetPoolNumbers.ONE_PERL,
      MainnetPoolNumbers.ONE_UNI,
      MainnetPoolNumbers.ONE_FOX,
      MainnetPoolNumbers.ONE_DODO,
      MainnetPoolNumbers.ONE_WING,
      MainnetPoolNumbers.ICHI_1INCH,
      MainnetPoolNumbers.ONE_UNI,
      MainnetPoolNumbers.ONE_BTC_DEPOSIT,
    ],
    [ChainId.Kovan]: [KovanPoolNumbers.WEENUS_WETH, KovanPoolNumbers.ICHI_WETH, KovanPoolNumbers.OTI_DEPOSIT, KovanPoolNumbers.ONE_FIL_DEPOSIT],
    [ChainId.Polygon]: [],
    [ChainId.Mumbai]: [],
  },
  [PoolGroupName.DEPOSIT_POOLS]: {
    [ChainId.Mainnet]: [
      MainnetPoolNumbers.ONE_FIL, MainnetPoolNumbers.ONE_1INCH, 
      MainnetPoolNumbers.ONE_MPH, MainnetPoolNumbers.ONE_PERL, 
      MainnetPoolNumbers.ONE_UNI, MainnetPoolNumbers.ONE_FOX, 
      MainnetPoolNumbers.ONE_DODO, MainnetPoolNumbers.ONE_WING, 
      MainnetPoolNumbers.ONE_UNI, MainnetPoolNumbers.ONE_BTC_DEPOSIT
    ],
    [ChainId.Kovan]: [KovanPoolNumbers.OTI_DEPOSIT, KovanPoolNumbers.ONE_FIL_DEPOSIT],
    [ChainId.Polygon]: [],
    [ChainId.Mumbai]: [],
  },
  [PoolGroupName.ACTIVE_VAULTS]: {
    [ChainId.Mainnet]: [
      MainnetPoolNumbers.ONE_UNI_VAULT_LP,
      MainnetPoolNumbers.GNO_VAULT_LEGACY,
      MainnetPoolNumbers.CEL_VAULT_LEGACY,
      MainnetPoolNumbers.WNXM_VAULT_LEGACY,
      MainnetPoolNumbers.WBTC_VAULT_LEGACY,
      MainnetPoolNumbers.WNXM_VAULT,
      MainnetPoolNumbers.CEL_VAULT,
      MainnetPoolNumbers.GNO_VAULT,
      MainnetPoolNumbers.WBTC_VAULT,
      MainnetPoolNumbers.BNT_VAULT,
      MainnetPoolNumbers.FUSE_ICHI_VAULT,
      MainnetPoolNumbers['1INCH_VAULT'],
      MainnetPoolNumbers.ALLY_VAULT,
      MainnetPoolNumbers.WETH_VAULT,
      MainnetPoolNumbers.ONE_FUSE_VAULT,
      MainnetPoolNumbers.ONE_WING_VAULT,
      MainnetPoolNumbers.ONE_FOX_VAULT,
      MainnetPoolNumbers.ONE_OJA_VAULT,
      MainnetPoolNumbers.QRDO_VAULT,
      MainnetPoolNumbers.USDC_VAULT,
      MainnetPoolNumbers.ONE_ICHI_VAULT,
      MainnetPoolNumbers.ONE_UNI_VAULT,
      MainnetPoolNumbers.ONE_BTC_VAULT_RARI,
      MainnetPoolNumbers.ONE_GIV,
      MainnetPoolNumbers.AAVE_VAULT,
      MainnetPoolNumbers.ASTO_VAULT,
      MainnetPoolNumbers.BANK_VAULT,
      MainnetPoolNumbers.BAT_VAULT,
      MainnetPoolNumbers.BIT_VAULT,
      MainnetPoolNumbers.BOBA_VAULT,
      MainnetPoolNumbers.BOBA_ETH_VAULT,
      MainnetPoolNumbers.CHO_VAULT,
      MainnetPoolNumbers.COC_VAULT,
      MainnetPoolNumbers.COC_USDC_VAULT,
      MainnetPoolNumbers.COC_ETH_VAULT,
      MainnetPoolNumbers.COMP_VAULT,
      MainnetPoolNumbers.COW_VAULT,
      MainnetPoolNumbers.FIDU_VAULT,
      MainnetPoolNumbers.FRAX_VAULT,
      MainnetPoolNumbers.FXS_VAULT,
      MainnetPoolNumbers.GIV_VAULT,
      MainnetPoolNumbers.GIV_ETH_VAULT,
      MainnetPoolNumbers.HOME_VAULT,
      MainnetPoolNumbers.IMX_VAULT,
      MainnetPoolNumbers.IMX_ETH_VAULT,
      MainnetPoolNumbers.LDO_VAULT,
      MainnetPoolNumbers.LINK_VAULT,
      MainnetPoolNumbers.METIS_VAULT,
      MainnetPoolNumbers.MIDAS_VAULT,
      MainnetPoolNumbers.MKR_VAULT,
      MainnetPoolNumbers.OGN_VAULT,
      MainnetPoolNumbers.OUSD_VAULT,
      MainnetPoolNumbers.QRDO_ICHI_VAULT,
      MainnetPoolNumbers.SFRXETH_VAULT,
      MainnetPoolNumbers.SHIB_VAULT,
      MainnetPoolNumbers.SUSHI_VAULT,
      MainnetPoolNumbers.SWISE_VAULT,
      MainnetPoolNumbers.TBTC_WETH_VAULT,
      MainnetPoolNumbers.UMA_VAULT,
      MainnetPoolNumbers.UNI_VAULT, 
      MainnetPoolNumbers.YFI_VAULT,
      MainnetPoolNumbers.ZRX_VAULT,
      MainnetPoolNumbers.ICHI_ETH_VAULT,
      MainnetPoolNumbers.ICHI_WBTC_VAULT,
      MainnetPoolNumbers.ICHI_USDC_VAULT,
    ],
    [ChainId.Polygon]: [
      PolygonPoolNumbers.BAL_WETH_VAULT, 
      PolygonPoolNumbers.CRV_WETH_VAULT, 
      PolygonPoolNumbers.DPI_WETH_VAULT, 
      PolygonPoolNumbers.GHST_WETH_VAULT, 
      PolygonPoolNumbers.GOVI_VAULT, 
      PolygonPoolNumbers.ICHI_USDC_VAULT, 
      PolygonPoolNumbers.ICHI_WBTC_VAULT, 
      PolygonPoolNumbers.ICHI_WETH_VAULT, 
      PolygonPoolNumbers.ICHI_WMATIC_VAULT, 
      PolygonPoolNumbers.LINK_WETH_VAULT, 
      PolygonPoolNumbers.ONE_BTC_VAULT, 
      PolygonPoolNumbers.POP_WETH_VAULT, 
      PolygonPoolNumbers.SUSHI_WETH_VAULT, 
      PolygonPoolNumbers.TRADE_USDT_VAULT, 
      PolygonPoolNumbers.USDC_VAULT, 
      PolygonPoolNumbers.USDC_WETH_VAULT,
      PolygonPoolNumbers.WBTC_VAULT, 
      PolygonPoolNumbers.WBTC_WETH_VAULT, 
      PolygonPoolNumbers.WEN_WETH_VAULT, 
      PolygonPoolNumbers.WETH_USDC_VAULT, 
      PolygonPoolNumbers.WMATIC_WETH_VAULT, 
      PolygonPoolNumbers.WSTETH_FBX_VAULT, 
      PolygonPoolNumbers.WSTETH_WETH_VAULT, 
    ],
    [ChainId.Kovan]: [KovanPoolNumbers.ONE_FIL_VAULT, KovanPoolNumbers.ONE_UNI_VAULT, KovanPoolNumbers.ONE_UNI_UNI_VAULT, KovanPoolNumbers.WEENUS_VAULT],
    [ChainId.Mumbai]: [MumbaiPoolNumbers.ONE_BTC_ICHI_VAULT],
  },
  [PoolGroupName.UNDERLYING_VAULTS]: {
    [ChainId.Mainnet]: [MainnetPoolNumbers.ONE_BTC_VAULT_LEGACY],
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  [PoolGroupName.UPCOMING_POOLS]: {
    [ChainId.Mainnet]: [],
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  [PoolGroupName.MIGRATING_POOLS]: {
    [ChainId.Mainnet]: [],
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  [PoolGroupName.RETIRED_POOLS]: {
    [ChainId.Mainnet]: [],
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  // Pools in the UNRETIRED_POOLS will show up even if APR == 0
  // used only in retired app
  [PoolGroupName.UNRETIRED_POOLS]: {
    [ChainId.Mainnet]: [
      MainnetPoolNumbers.ICHI_1INCH,
      MainnetPoolNumbers.ICHI_BNT,
      MainnetPoolNumbers.ONE_UNI_FARM,
      MainnetPoolNumbers.ONE_UNI_VAULT,
      MainnetPoolNumbers.ONE_BTC_VAULT_RARI,
      MainnetPoolNumbers.ONE_BTC_DEPOSIT,
      MainnetPoolNumbers.ICHI_BNT_V3,
      MainnetPoolNumbers.ONE_FUSE_VAULT,
      MainnetPoolNumbers.ONE_WING_VAULT,
      MainnetPoolNumbers.ONE_FOX_VAULT,
      MainnetPoolNumbers.ONE_OJA_VAULT,
      MainnetPoolNumbers.QRDO_VAULT,
      MainnetPoolNumbers.USDC_VAULT,
      MainnetPoolNumbers.ONE_ICHI_VAULT,
      MainnetPoolNumbers._80_20_ICHI_ETH,
      MainnetPoolNumbers.ICHI_ETH_UNI_V2,
      MainnetPoolNumbers.ONE_FIL,
      MainnetPoolNumbers.ONE_1INCH,
      MainnetPoolNumbers.ONE_MPH,
      MainnetPoolNumbers.ONE_PERL,
      MainnetPoolNumbers.ONE_UNI,
      MainnetPoolNumbers.ONE_FOX,
      MainnetPoolNumbers.ONE_UNI_VAULT_LP,
      MainnetPoolNumbers.ONE_DODO,
      MainnetPoolNumbers.ONE_WING,
      MainnetPoolNumbers.GNO_VAULT_LEGACY,
      MainnetPoolNumbers.CEL_VAULT_LEGACY,
      MainnetPoolNumbers.WNXM_VAULT_LEGACY,
      MainnetPoolNumbers.WBTC_VAULT_LEGACY,
      MainnetPoolNumbers.ONE_BTC_VAULT_LEGACY,
      MainnetPoolNumbers.WNXM_VAULT,
      MainnetPoolNumbers.CEL_VAULT,
      MainnetPoolNumbers.GNO_VAULT,
      MainnetPoolNumbers.WBTC_VAULT,
      MainnetPoolNumbers.BNT_VAULT,
      MainnetPoolNumbers.FUSE_ICHI_VAULT,
      MainnetPoolNumbers['1INCH_VAULT'],
      MainnetPoolNumbers.ALLY_VAULT,
      MainnetPoolNumbers.WETH_VAULT,
      MainnetPoolNumbers.ONE_GIV,
      MainnetPoolNumbers.AAVE_VAULT,
      MainnetPoolNumbers.ASTO_VAULT,
      MainnetPoolNumbers.BIT_VAULT,
      MainnetPoolNumbers.BAT_VAULT,
      MainnetPoolNumbers.BOBA_VAULT,
      MainnetPoolNumbers.CHO_VAULT,
      MainnetPoolNumbers.COMP_VAULT,
      MainnetPoolNumbers.COW_VAULT,
      MainnetPoolNumbers.FIDU_VAULT,
      MainnetPoolNumbers.FXS_VAULT,
      MainnetPoolNumbers.GIV_VAULT,
      MainnetPoolNumbers.HOME_VAULT,
      MainnetPoolNumbers.LDO_VAULT,
      MainnetPoolNumbers.LINK_VAULT,
      MainnetPoolNumbers.MIDAS_VAULT,
      MainnetPoolNumbers.MKR_VAULT,
      MainnetPoolNumbers.OGN_VAULT,
      MainnetPoolNumbers.OUSD_VAULT,
      MainnetPoolNumbers.QRDO_ICHI_VAULT,
      MainnetPoolNumbers.SFRXETH_VAULT,
      MainnetPoolNumbers.SHIB_VAULT,
      MainnetPoolNumbers.SUSHI_VAULT,
      MainnetPoolNumbers.SWISE_VAULT,
      MainnetPoolNumbers.TBTC_WETH_VAULT,
      MainnetPoolNumbers.UNI_VAULT, 
      MainnetPoolNumbers.YFI_VAULT,
      MainnetPoolNumbers.ZRX_VAULT,
    ],
    [ChainId.Polygon]: [
      PolygonPoolNumbers.ONE_BTC_VAULT, 
      PolygonPoolNumbers.WBTC_VAULT, 
      PolygonPoolNumbers.GOVI_VAULT, 
      PolygonPoolNumbers.TRADE_USDT_VAULT,
      PolygonPoolNumbers.USDC_VAULT,
    ],
    [ChainId.Kovan]: [
      KovanPoolNumbers.ONE_FIL_DEPOSIT, KovanPoolNumbers.ONE_FIL_VAULT, 
      KovanPoolNumbers.ONE_UNI_VAULT, KovanPoolNumbers.WEENUS_VAULT, 
      KovanPoolNumbers.ONE_UNI_UNI_VAULT],
    [ChainId.Mumbai]: [MumbaiPoolNumbers.ONE_BTC_ICHI_VAULT],
  },
  [PoolGroupName.ONE_INCH_POOLS]: {
    [ChainId.Mainnet]: [
      // TODO: Unclear what 15 and 16 are.
      // 15,
      // 16,
      MainnetPoolNumbers.ICHI_1INCH,
    ],
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  [PoolGroupName.BALANCER_POOLS]: {
    [ChainId.Mainnet]: [
      // TODO: Unclear what 18 is here.
      // 18,
      MainnetPoolNumbers._80_20_ICHI_ETH,
      // TODO: 1002 doesn't exist
      // 1002,
      // TODO: Commented out
      // 1008
    ],
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  [PoolGroupName.BALANCER_SMART_POOLS]: {
    [ChainId.Mainnet]: [
      // TODO: Commented out Smart ICHI-ETH
      // 1003,
      // TODO: Commented out ICHI oneToken Pool (ICHIBPT)
      // 1007
    ],
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  [PoolGroupName.BANCOR_POOLS_V2]: {
    // bancorPoolsV2: [14, 1006, 10003],
    [ChainId.Mainnet]: [
      // TODO: Can't find 14 or 1006
      // 10003
      MainnetPoolNumbers.ICHI_BNT,
    ],
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  [PoolGroupName.BANCOR_POOLS_V3]: {
    [ChainId.Mainnet]: [MainnetPoolNumbers.ICHI_BNT_V3],
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  [PoolGroupName.UNI_POOLS]: {
    [ChainId.Mainnet]: [MainnetPoolNumbers.ICHI_ETH_UNI_V2],
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  [PoolGroupName.LOOPRING_POOLS]: {
    [ChainId.Mainnet]: [
      // TODO: ICHI-ETH commented out below
      // 10002
    ],
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  [PoolGroupName.DODO_POOLS]: {
    [ChainId.Mainnet]: [MainnetPoolNumbers.ONE_DODO_USDC_MAINNET, MainnetPoolNumbers.ONE_DODO_USDC_BSC_MAINNET],
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  [PoolGroupName.RARI_ASSETS]: {
    [ChainId.Mainnet]: [MainnetPoolNumbers.ONE_UNI, MainnetPoolNumbers.ONE_UNI_VAULT, MainnetPoolNumbers.ONE_BTC_VAULT_RARI, MainnetPoolNumbers.ONE_BTC_DEPOSIT],
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  [PoolGroupName.SPECIAL_PRICING]: {
    [ChainId.Mainnet]: [
      // TODO: oneVBTC-vBTC commented out below
      // 19
    ],
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  // Pools in the LEGACY_POOLS will only show in old.ichi.org
  [PoolGroupName.LEGACY_POOLS]: {
    [ChainId.Mainnet]: [
      MainnetPoolNumbers._80_20_ICHI_ETH,
      MainnetPoolNumbers.AAVE_VAULT,
      MainnetPoolNumbers.ASTO_VAULT,
      MainnetPoolNumbers.BIT_VAULT,
      MainnetPoolNumbers.COW_VAULT,
      MainnetPoolNumbers.FXS_VAULT,
      MainnetPoolNumbers.ICHI_BNT,
      MainnetPoolNumbers.ICHI_BNT_V3,
      MainnetPoolNumbers.ICHI_ETH_SUSHI,
      MainnetPoolNumbers.ICHI_ETH_UNI_V2,
      MainnetPoolNumbers.LDO_VAULT,
      MainnetPoolNumbers.LINK_VAULT,
      MainnetPoolNumbers.MIDAS_VAULT,
      MainnetPoolNumbers.OGN_VAULT,
      MainnetPoolNumbers.ONE_FIL,
      MainnetPoolNumbers.ONE_1INCH,
      MainnetPoolNumbers.ONE_MPH,
      MainnetPoolNumbers.ONE_PERL,
      MainnetPoolNumbers.ONE_UNI,
      MainnetPoolNumbers.ONE_FOX,
      MainnetPoolNumbers.ONE_UNI_VAULT_LP,
      MainnetPoolNumbers.ONE_DODO,
      MainnetPoolNumbers.ONE_WING,
      MainnetPoolNumbers.GNO_VAULT_LEGACY,
      MainnetPoolNumbers.CEL_VAULT_LEGACY,
      // MainnetPoolNumbers.CEL_VAULT,
      MainnetPoolNumbers.WNXM_VAULT_LEGACY,
      MainnetPoolNumbers.WBTC_VAULT_LEGACY,
      MainnetPoolNumbers.ICHI_1INCH,
      MainnetPoolNumbers.ONE_DODO_USDC_MAINNET,
      MainnetPoolNumbers.ONE_DODO_USDC_BSC_MAINNET,
      MainnetPoolNumbers.ONE_UNI,
      MainnetPoolNumbers.ONE_UNI_VAULT,
      MainnetPoolNumbers.ONE_BTC_VAULT_RARI,
      MainnetPoolNumbers.ONE_BTC_VAULT_LEGACY,
      MainnetPoolNumbers.ONE_BTC_DEPOSIT,
      MainnetPoolNumbers.ONE_WING_VAULT,
      MainnetPoolNumbers.ONE_FOX_VAULT,
      MainnetPoolNumbers.ONE_OJA_VAULT,
      MainnetPoolNumbers.ONE_FUSE_VAULT,
      MainnetPoolNumbers.OUSD_VAULT,
      MainnetPoolNumbers.QRDO_ICHI_VAULT,
      MainnetPoolNumbers.SFRXETH_VAULT,
      MainnetPoolNumbers.SHIB_VAULT,
      MainnetPoolNumbers.SUSHI_VAULT,
      MainnetPoolNumbers.SWISE_VAULT,
      MainnetPoolNumbers.TBTC_WETH_VAULT,
      MainnetPoolNumbers.UNI_VAULT
    ],
    [ChainId.Polygon]: [
      PolygonPoolNumbers.TRADE_USDT_VAULT,
      PolygonPoolNumbers.WETH_FBX_VAULT, 
    ],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  // Vaults that are not processed in api-updater using standard multicall flow
  [PoolGroupName.NONSTANDARD_VAULTS]: {
    [ChainId.Mainnet]: [
      MainnetPoolNumbers.ONE_UNI_VAULT_LP,
      MainnetPoolNumbers.GNO_VAULT_LEGACY,
      MainnetPoolNumbers.CEL_VAULT_LEGACY,
      MainnetPoolNumbers.WNXM_VAULT_LEGACY,
      MainnetPoolNumbers.WBTC_VAULT_LEGACY,
      MainnetPoolNumbers.ONE_UNI_VAULT,
      MainnetPoolNumbers.ONE_BTC_VAULT_RARI,
      MainnetPoolNumbers.ONE_BTC_VAULT_LEGACY,
      MainnetPoolNumbers.ONE_BTC_DEPOSIT,
      MainnetPoolNumbers.ONE_WING_VAULT,
      MainnetPoolNumbers.ONE_FOX_VAULT,
      MainnetPoolNumbers.ONE_OJA_VAULT,
      MainnetPoolNumbers.ONE_FUSE_VAULT,
    ],
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
  // These vaults don't show in either main app or legacy app.
  // They are available by direct link
  [PoolGroupName.HIDDEN_VAULTS]: {
    [ChainId.Mainnet]: [], 
    [ChainId.Polygon]: [],
    [ChainId.Kovan]: [],
    [ChainId.Mumbai]: [],
  },
};

export function getPool(poolName: PoolName, chainId: ChainId): Pool {
  const pool = PoolMapping[poolName] != null ? PoolMapping[poolName][chainId] : undefined;
  if (!pool) {
    throw new Error(`Could not find ${poolName} on ${chainId}`);
  }
  return pool;
}

export function getPools(chainId: ChainId): Pool[] {
  const names = Object.keys(PoolMapping);
  const vaults: Pool[] = [];
  for (let name of names) {
    if (chainId in PoolMapping[name]) {
      vaults.push(PoolMapping[name][chainId]);
    }
  }
  return vaults;
}
