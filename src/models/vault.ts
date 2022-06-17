import { TokenName } from './tokenNames';
import { VaultName } from './vaultNames';

export type Vault = {
  vaultName: VaultName;
  tableName: VaultName | `pol_${VaultName}`;
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
};
