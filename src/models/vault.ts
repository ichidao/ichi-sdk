import { TokenName } from '../enums/tokenName';
import { VaultName, VaultTableName } from '../enums/vaultName';

export type Vault = {
  vaultName: VaultName;
  tableName: VaultTableName;
  displayName: string;
  address: string;
  farm: number;
  externalFarm: string;
  scarceToken: string;
  scarceTokenName: TokenName;
  scarceTokenDecimals: number;
  scarceTokenCoingeckoId: string;
  baseTokenName: TokenName;
  baseTokenDecimals: number;
  enableNotifications: boolean;
  subgraphEndpoint: string;
  irrStartDate: Date;
  isInverted: boolean;
  isHodlVault: boolean;
  irrStartTxAmount: number;
  isLegacy: boolean;
  depositStatus: boolean;
};
