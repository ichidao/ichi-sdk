export enum MainnetPoolNumbers {
  ICHI_1INCH = 10001,
  // ICHI_BNT_MIGRATE = 10003,
  ICHI_BNT = 10003,
  ICHI_BNT_V3 = 10010,
  // ONE_DODO_USDC = 10004,
  ONE_DODO_USDC_MAINNET = 10004,
  // ONE_UNI_DEPOSIT = 10005,
  ONE_UNI_FARM = 10005,
  ONE_UNI_VAULT = 10006,
  // ONE_DODO_USDC_2 = 10007,
  ONE_DODO_USDC_BSC_MAINNET = 10007,
  ONE_BTC_VAULT_RARI = 10008,
  ONE_BTC_VAULT_LEGACY = 1023,
  // Can we get a better name for this one?
  ONE_BTC_DEPOSIT = 10009,
  _80_20_ICHI_ETH = 1001,
  ICHI_ETH_SUSHI = 1004,
  // Can we get a better name for this one?
  ICHI_ETH_UNI_V2 = 1005,
  ONE_FIL = 1009,
  ONE_1INCH = 1010,
  ONE_MPH = 1012,
  ONE_PERL = 1013,
  ONE_UNI = 1014,
  ONE_FOX = 1015,
  ONE_UNI_VAULT_LP = 1016,
  ONE_DODO = 1017,
  ONE_WING = 1018,
  WNXM_VAULT = 1024,
  CEL_VAULT = 1025,
  GNO_VAULT = 1026,
  WBTC_VAULT = 1028,
  BNT_VAULT = 1029,
  FUSE_ICHI_VAULT = 1030,
  '1INCH_VAULT' = 1031,
  WETH_VAULT = 1032,
  ALLY_VAULT = 1033,
  ONE_FUSE_VAULT = 20001,
  ONE_WING_VAULT = 20002,
  ONE_FOX_VAULT = 20003,
  ONE_OJA_VAULT = 20004,
  QRDO_VAULT = 20005,
  USDC_VAULT = 20006,
  ONE_ICHI_VAULT = 20007,
  ONE_FUSE_LEGACY = 20008,
  ONE_GIV = 20009,
  GNO_VAULT_LEGACY = 1019,
  CEL_VAULT_LEGACY = 1020,
  WNXM_VAULT_LEGACY = 1021,
  WBTC_VAULT_LEGACY = 1022
}

// These are non-adjusted
export enum KovanPoolNumbers {
  WEENUS_WETH = 5000,
  ICHI_WETH = 5001,
  OTI_DEPOSIT = 5002,
  ONE_FIL_DEPOSIT = 5003,
  ONE_FIL_VAULT = 5004,
  // ONE_UNI_VAULT_KOVAN = 5005,
  ONE_UNI_VAULT = 5005,
  WEENUS_VAULT = 5006,
  ONE_UNI_UNI_VAULT = 20000
}

export enum PolygonPoolNumbers {
  ONE_BTC_VAULT = 4000,
  // WBTC_VAULT_POLYGON = 4001,
  WBTC_VAULT = 4001,
  // USDC_VAULT_POLYGON = 4002,
  USDC_VAULT = 4002
}

export enum MumbaiPoolNumbers {
  ONE_BTC_ICHI_VAULT = 6000
}

export type MainnetPoolNumberValues = typeof MainnetPoolNumbers[keyof typeof MainnetPoolNumbers];
export type KovanPoolNumberValues = typeof KovanPoolNumbers[keyof typeof KovanPoolNumbers];
export type PolygonPoolNumberValues = typeof PolygonPoolNumbers[keyof typeof PolygonPoolNumbers];
export type MumbaiPoolNumberValues = typeof MumbaiPoolNumbers[keyof typeof MumbaiPoolNumbers];

export type PoolNumberValues =
  | MainnetPoolNumberValues
  | KovanPoolNumberValues
  | PolygonPoolNumberValues
  | MumbaiPoolNumberValues;
