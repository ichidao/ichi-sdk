export enum VaultName {
  FUSE = 'fuse',
  FUSE_V2 = 'fuse_v2',
  ICHI = 'ichi',
  USDC_ICHI = 'usdc-ichi',
  // ONE_ICHI = 'oneichi',
  WING = 'wing',
  OJA = 'oja',
  GNO = 'gno',
  GNO_V2 = 'gno_v2',
  CEL = 'cel',
  CEL_V2 = 'cel_v2',
  WBTC = 'wbtc',
  WBTC_V2 = 'wbtc_v2',
  BNT_V2 = 'bnt_v2',
  POLYGON_WBTC = 'polygon_wbtc',
  ONEBTC = 'onebtc',
  POLYGON_ONEBTC = 'polygon_onebtc',
  POLYGON_USDC = 'polygon_usdc',
  WNXM = 'wnxm',
  WNXM_V2 = 'wnxm_v2',
  QRDO = 'qrdo',
  FOX = 'fox',
  ONEICHI_ICHI = 'oneichi_ichi',
  ONEGIV_GIV = 'onegiv_giv'
}

export enum VaultTableName {
  ONEFUSE_FUSE = 'onefuse_fuse',
  ONEUNI_ICHI = 'oneuni_ichi',
  ONEWING_PWING = 'onewing_pwing',
  ONEFOX_FOX = 'onefox_fox',
  ONEOJA_OJA = 'oneoja_oja',
  GNO_ICHI = 'gno_ichi',
  CEL_ICHI = 'cel_ichi',
  WBTC_ICHI = 'wbtc_ichi',
  ONEBTC_ICHI_MAINNET = 'onebtc_ichi',
  ONEBTC_ICHI_POLYGON = 'polygon_onebtc', // old: polygon_onebtc ?
  GNO_ICHI_V2 = 'gno_ichi_v2',
  CEL_ICHI_V2 = 'cel_ichi_v2',
  WNXM_ICHI = 'wnxm_ichi',
  WNXM_ICHI_V2 = 'wnxm_ichi_v2',
  WBTC_ICHI_V2_MAINNET = 'wbtc_ichi_v2', // old: 'polygon_wbtc'
  WBTC_ICHI_V2_POLYGON = 'polygon_wbtc', // old: 'polygon_wbtc'
  QRDO_USDC = 'qrdo_usdc',
  USDC_ICHI_MAINNET = 'usdc_ichi', // old: 'polygon_usdc'
  USDC_ICHI_POLYGON = 'polygon_usdc', // old: 'polygon_usdc'
  ONEICHI_ICHI = 'oneichi_ichi',
  ONEGIV_GIV = 'onegiv_giv',
  BNT_ICHI = 'bnt_ichi'
}

export type VaultNames = keyof typeof VaultName;
