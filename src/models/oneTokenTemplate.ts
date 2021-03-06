import { TokenName } from '../enums/tokenName';
import { Token } from './token';

export type OneTokenTemplate = {
  address: string;
  display_name?: string;
  decimals: number;
  strategy?: string;
  aux_strategy?: string[];
  ally_swap: string;
  tradeUrl?: string;
  stimulus_address: string;
  stimulus_name?: string;
  stimulus_display_name?: string;
  stimulus_decimals?: number;
  abi_type: 'ONETOKEN' | 'ONEETH' | 'ONELINK';
  base_name: TokenName;
  collateral_name?: string;
  collateralToken?: Token;
  isV2?: boolean;
  ichiVault: {
    address: string;
    farm: number;
    externalFarm: string;
    scarceTokenName: string;
    scarceTokenDecimals?: number;
    scarceToken: string;
    // unclear what this is for
    ichi?: string;
  };
};
