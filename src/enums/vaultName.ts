export enum VaultName {
  '1INCH' = '1inch',
  ALLY = 'ally',
  BOBA = 'boba',
  HOME = 'home',
  FUSE = 'fuse',
  ICHI = 'ichi',
  USDC_ICHI = 'usdc-ichi',
  WING = 'wing',
  OJA = 'oja',
  GNO = 'gno',
  GNO_V2 = 'gno_v2',
  CEL = 'cel',
  CEL_V2 = 'cel_v2',
  WBTC = 'wbtc',
  WBTC_V2 = 'wbtc_v2',
  BNT_V2 = 'bnt_v2',
  ONEBTC = 'onebtc',
  WNXM = 'wnxm',
  WNXM_V2 = 'wnxm_v2',
  QRDO = 'qrdo',
  FOX = 'fox',
  ONEICHI_ICHI = 'oneichi_ichi',
  ONEGIV_GIV = 'onegiv_giv',
  FUSE_ICHI = 'fuse_ichi',
  WETH = 'weth',
  // Kovan
  KOVAN_ONE_FIL = 'kovan_one_fil',
  // Polygon
  POLYGON_GOVI = 'pol_govi',
  POLYGON_ONEBTC = 'pol_onebtc',
  POLYGON_USDC = 'pol_usdc',
  POLYGON_WBTC = 'pol_wbtc'
}

export enum VaultTableName {
  // Mainnet
  '1INCH_ICHI' = '1inch_ichi',
  ALLY_ICHI = 'ally_ichi',
  ONEFUSE_FUSE = 'onefuse_fuse',
  ONEUNI_ICHI = 'oneuni_ichi',
  ONEWING_PWING = 'onewing_pwing',
  ONEFOX_FOX = 'onefox_fox',
  ONEOJA_OJA = 'oneoja_oja',
  GNO_ICHI = 'gno_ichi',
  CEL_ICHI = 'cel_ichi',
  WBTC_ICHI = 'wbtc_ichi',
  ONEBTC_ICHI = 'onebtc_ichi',
  GNO_ICHI_V2 = 'gno_ichi_v2',
  CEL_ICHI_V2 = 'cel_ichi_v2',
  WNXM_ICHI = 'wnxm_ichi',
  WNXM_ICHI_V2 = 'wnxm_ichi_v2',
  WBTC_ICHI_V2 = 'wbtc_ichi_v2',
  QRDO_USDC = 'qrdo_usdc',
  USDC_ICHI = 'usdc_ichi',
  ONEICHI_ICHI = 'oneichi_ichi',
  ONEGIV_GIV = 'onegiv_giv',
  BOBA_ICHI = 'boba_ichi',
  HOME_ICHI = 'home_ichi',
  BNT_ICHI = 'bnt_ichi',
  FUSE_ICHI = 'fuse_ichi',
  WETH_ICHI = 'weth_ichi',
  // Kovan related
  KOVAN_ONE_FIL = 'test_one_fil',
  // Polygon
  POLYGON_GOVI_ICHI = 'pol_govi_ichi',
  POLYGON_WBTC_ICHI = 'pol_wbtc_ichi',
  POLYGON_ONEBTC_ICHI = 'pol_onebtc_ichi',
  POLYGON_USDC_ICHI = 'pol_usdc_ichi'
}

export type VaultNames = keyof typeof VaultName;
