import { TokenName } from '../enums/tokenName';

export type IchiVault = {
  address: string;
  farm: number;
  externalFarm: string;
  scarceToken: 'token0' | 'token1'; // 'token0',
  scarceTokenName: TokenName;
  scarceTokenDecimals: number;
  // Test vaults just have this
  ichi?: 'token1';
};
