import { IchiVault } from './ichiVault';
import { TokenName } from '../enums/tokenName';
import { TestVault } from './testVault';

export type Token = {
  tokenName: TokenName;
  // test_ is for kovan
  tableName: TokenName | `pol_${TokenName}` | `mum_${TokenName}` | `test_${TokenName}`;
  address: string;
  decimals: number;
  displayName: string;
  fullName: string;
  isOneToken: boolean;
  atCoingecko: boolean;
  symbol: string;

  // Optional
  parentOneToken?: TokenName;
  strategy?: string;
  auxStrategy?: string[];
  allySwap?: string;
  isV2?: boolean;
  ichiVault?: IchiVault;
  testVault?: TestVault;
  stimulusName?: TokenName;
  stimulusDisplayName?: string;
  tradeUrl?: string;
  targetVaultStrength?: number;
};
