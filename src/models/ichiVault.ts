import { TokenName } from './tokenNames';

export type IchiVault = {
  address: string;
  farm: number;
  externalFarm: string;
  scarceToken: string; // 'token0',
  scarceTokenName: TokenName;
  scarceTokenDecimals: number;
};
