import { IchiVault } from './ichiVault';
import { TokenName } from './tokenNames';

export type Token = {
  tokenName: TokenName;
  tableName: TokenName | `pol_${TokenName}`;
  address: string;
  decimals: number;
  displayName: string;
  isOneToken: boolean;
  atCoingecko: boolean;
  // Optional
  parentOneToken?: TokenName;
  strategy?: string;
  auxStrategy?: string[];
  allySwap?: string;
  isV2?: boolean;
  ichiVault?: IchiVault;
  stimulusName?: string;
  stimulusDisplayName?: string;
  tradeUrl?: string;
};
