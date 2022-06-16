import { PoolName } from './poolNames';
import { TokenName } from './tokenNames';

export type Pool = {
  poolName: PoolName;
  displayName: string;
  address: string;
  oneTokenName: TokenName;
  oneToken: 'token0' | 'token1';
  enableNotifications: boolean;
  otherToken?: TokenName;
};
