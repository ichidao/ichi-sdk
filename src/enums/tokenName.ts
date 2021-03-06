export enum TokenName {
  ICHI = 'ichi',
  ICHI_V2 = 'ichi_v2',
  XICHI = 'xichi',
  RENFIL = 'renfil',
  ALLY = 'ally',
  BNT = 'bnt',
  CEL = 'cel',
  GIV = 'giv',
  GNO = 'gno',
  '1INCH' = '1inch',
  OJA = 'oja',
  PWING = 'pwing',
  QRDO = 'qrdo',
  WBTC = 'wbtc',
  WETH = 'weth',
  WNXM = 'wnxm',
  VBTC = 'vbtc',
  LINK = 'link',
  UNI = 'uni',
  USDC = 'usdc',
  FUSE = 'fuse',
  MPH = 'mph',
  PERL = 'perl',
  DODO = 'dodo',
  FOX = 'fox',
  BOOT = 'boot',
  ETH = 'eth',
  ONE_ETH = 'oneeth',
  ONE_VBTC = 'onevbtc',
  ONE_LINK = 'onelink',
  ONE_FIL = 'onefil',
  ONE_1INCH = 'one1inch',
  ONE_BTC = 'onebtc',
  ONE_FUSE = 'onefuse',
  ONE_MPH = 'onemph',
  ONE_OJA = 'oneoja',
  ONE_PERL = 'oneperl',
  ONE_GIV = 'onegiv',
  ONE_UNI = 'oneuni',
  ONE_DODO = 'onedodo',
  ONE_FOX = 'onefox',
  ONE_WING = 'onewing',
  BOOT_USD = 'bootusd',
  ONE_ICHI = 'oneichi',
  DAI = 'dai',
  // Test
  WEENUS = 'weenus',
  OTI = 'oti',
  TOKEN_6 = 'token6',
  TOKEN_18 = 'token18'
  // TEST_RENFIL = 'test_renfil',
  // TEST_ICHI = 'test_ichi',
  // TEST_XICHI = 'test_xichi'
}

export type TokenNames = keyof typeof TokenName;
export type TokenValues = typeof TokenName[keyof typeof TokenName];
