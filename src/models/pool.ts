import { PoolNumberValues } from '../enums/poolNumber';
import { PoolName } from '../enums/poolName';
import { TokenName } from '../enums/tokenName';
import { VaultName } from '../enums/vaultName';

export type Pool = {
  poolName: PoolName;
  tableName: PoolName | `pol_${PoolName}`;
  displayName: string;
  address: string;
  oneTokenName: TokenName;
  oneToken: 'token0' | 'token1';
  enableNotifications: boolean;
  otherToken?: TokenName;
};

export type PoolLabel = {
  name: string; // 'oneBTC Vault',
  poolNumber: PoolNumberValues;
  lpName: string; // 'ICHI_VAULT_LP',
  shortLpName: string; // 'VAULT_LP',

  launchDate?: number;
  tradeUrl?: string; // 'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48
  // &outputCurrency=0xEc4325F0518584F0774b483c215F65474EAbD27F&chain=mainnet',
  subgraphEndpoint?: string; // 'https://api.thegraph.com/subgraphs/name/ichi-org/onebtc-vault',
  isInverted?: boolean; // true,
  isHodl?: boolean; // false,
  // TODO: The vaultName type is tricky here.  The ichi-api-updater references the Token for the isOneToken based on this string
  // but there are names that aren't tokens, like cel_v2 and gno_v2, those are more like vault names, however the vault names don't
  // include those either.  So for now keep string until there is more clarity.
  vaultName?: VaultName; // 'onebtc',
  vaultAddress?: string; // '0x5318c21c96256ce4b73c27D405147df97d28E0Be',

  irrStartDate?: Date;
  irrStartTxAmount?: number;

  farmAddress?: string; // '0x748F4DFf5996711A3E127aAba2E9B95347cCDc74',
  farmId?: number; // 0,
  // TODO: unclear if I can make this TokenName yet as the parent projects don't consistenly use any consistent casing
  farmRewardTokenName?: TokenName; // TokenName;
  farmRewardTokenDecimals?: number;
  farmRewardTokenAddress?: string;

  externalAddress?: string; // '0x748F4DFf5996711A3E127aAba2E9B95347cCDc74',
  externalUrl?: string; // 'https://app.rari.capital/fuse/pool/136',
  externalText?: string; // 'Earn $ICHI',
  externalButton?: string; // 'RARI'
};

export type PoolRecord = {
  pool: PoolNumberValues;
  lpAddress: string;
  dailyAPY: number;
  weeklyAPY: number;
  monthlyAPY: number;
  yearlyAPY: number;
  // Seems futureAPY is not always defined
  futureAPY?: number;
  totalPoolLP: string;
  totalFarmLP: string;
  tvl: number;
  farmTVL: number;
  reserve0Raw: number;
  reserve1Raw: number;
  address0: string;
  address1: string;
  decimals0: number;
  decimals1: number;
  token0: string;
  token1: string;
  // TODO: What is this poolAddress?  It's not there in some code and there in others
  poolAddress?: string;
};
