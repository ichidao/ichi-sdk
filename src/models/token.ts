import { IchiVault } from './ichiVault';
import { TokenName } from '../enums/tokenName';

export type TokenTableName = `${TokenName}` |
  `pol_${TokenName}` |
  `mum_${TokenName}` |
  `base_${TokenName}` |
  `bsc_${TokenName}` |
  `celo_${TokenName}` |
  `haven1_${TokenName}` |
  `hedera_${TokenName}` |
  `hemi_${TokenName}` |
  `hyperevm_${TokenName}` |
  `zksync_${TokenName}` |
  `arbitrum_${TokenName}` |
  `avalanche_${TokenName}`|
  `eon_${TokenName}` |
  `fantom_${TokenName}` |
  `linea_${TokenName}` |
  `mantle_${TokenName}` |
  `monad_testnet_${TokenName}` |
  `moonbeam_${TokenName}` |
  `nibiru_${TokenName}` |
  `opbnb_${TokenName}` |
  `unichain_${TokenName}` |
  `zkevm_${TokenName}`;

export type Token = {
  tokenName: TokenName;
  tableName: TokenTableName;
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
  stimulusName?: TokenName;
  stimulusDisplayName?: string;
  tradeUrl?: string;
  targetVaultStrength?: number;
};
