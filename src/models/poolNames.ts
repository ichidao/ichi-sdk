export enum PoolName {
  ONEFUSE_USDC = 'onefuse_usdc',
  ONEUNI_USDC = 'oneuni_usdc',
  ONEWING_USDC = 'onewing_usdc',
  ONEFOX_USDC = 'onefox_usdc',
  ONEPERL_USDC = 'oneperl_usdc',
  // ONEFIL_USDC = 'onefil_usdc',
  ONEMPH_USDC = 'onemph_usdc',
  ONE1INCH_USDC = 'one1inch_usdc',
  ONEOJA_USDC = 'oneoja_usdc'
}

export type PoolNames = keyof typeof PoolName;
