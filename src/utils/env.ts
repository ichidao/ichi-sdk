import { Optional } from '../types/optional';

export namespace EnvUtils {
  export enum EnvName {
    INFURA_ID = 'INFURA_ID',
    ALCHEMY_ID = 'ALCHEMY_ID',
    QUICKNODE_ID = 'QUICKNODE_ID',
    CHAIN_SRC = 'CHAIN_SRC',
    MAINNET_RPC_HOSTS = 'MAINNET_RPC_HOSTS',
    GOERLI_RPC_HOSTS = 'GOERLI_RPC_HOSTS',
    BSC_RPC_HOSTS = 'BSC_RPC_HOSTS',
    EON_RPC_HOSTS = 'EON_RPC_HOSTS',
    HEDERA_RPC_HOSTS = 'HEDERA_RPC_HOSTS',
    POLYGON_RPC_HOSTS = 'POLYGON_RPC_HOSTS',
    ZKSYNC_RPC_HOSTS = 'ZKSYNC_RPC_HOSTS',
    MUMBAI_RPC_HOSTS = 'MUMBAI_RPC_HOSTS',
    ARBITRUM_RPC_HOSTS = 'ARBITRUM_RPC_HOSTS',
    AVALANCHE_RPC_HOSTS = 'AVALANCHE_RPC_HOSTS',
    CMC_API_KEY = 'CMC_API_KEY'
  }

  export enum GatsbyEnvName {
    GATSBY_INFURA_ID = 'GATSBY_INFURA_ID',
    GATSBY_ALCHEMY_ID = 'GATSBY_ALCHEMY_ID',
    GATSBY_QUICKNODE_ID = 'GATSBY_QUICKNODE_ID',
    GATSBY_CHAIN_SRC = 'GATSBY_CHAIN_SRC',
    GATSBY_MAINNET_RPC_HOSTS = 'GATSBY_MAINNET_RPC_HOSTS',
    GATSBY_GOERLI_RPC_HOSTS = 'GATSBY_GOERLI_RPC_HOSTS',
    GATSBY_BSC_RPC_HOSTS = 'GATSBY_BSC_RPC_HOSTS',
    GATSBY_EON_RPC_HOSTS = 'GATSBY_EON_RPC_HOSTS',
    GATSBY_HEDERA_RPC_HOSTS = 'GATSBY_HEDERA_RPC_HOSTS',
    GATSBY_POLYGON_RPC_HOSTS = 'GATSBY_POLYGON_RPC_HOSTS',
    GATSBY_ZKSYNC_RPC_HOSTS = 'GATSBY_ZKSYNC_RPC_HOSTS',
    GATSBY_MUMBAI_RPC_HOSTS = 'GATSBY_MUMBAI_RPC_HOSTS',
    GATSBY_ARBITRUM_RPC_HOSTS = 'GATSBY_ARBITRUM_RPC_HOSTS',
    GATSBY_AVALANCHE_RPC_HOSTS = 'GATSBY_AVALANCHE_RPC_HOSTS',
    GATSBY_CMC_API_KEY = 'GATSBY_CMC_API_KEY'
  }

  export type EnvNameKey = keyof typeof EnvName;
  export type GatsbyEnvNameKey = keyof typeof GatsbyEnvName;

  export function isDefined(envVarName: EnvNameKey | GatsbyEnvNameKey): boolean {
    const value = process.env[envVarName]?.trim();
    return value != null && value !== '' && value !== 'null' && value !== 'undefined';
  }

  export function getValue(envVarName: EnvNameKey): Optional<string> {
    if (!EnvUtils.isDefined(envVarName) && !EnvUtils.isDefined(`GATSBY_${envVarName}`)) {
      return;
    }
    const rawValue = process.env[`GATSBY_${envVarName}`] || process.env[envVarName];
    const value = rawValue?.trim();
    return value;
  }

  export function getValues(envVarName: EnvNameKey): Optional<string[]> {
    if (!EnvUtils.isDefined(envVarName) && !EnvUtils.isDefined(`GATSBY_${envVarName}`)) {
      return;
    }
    const rawValues = process.env[`GATSBY_${envVarName}`] || process.env[envVarName];
    const values = rawValues?.split(',').map((v) => v.trim());
    return values;
  }

  export function printEnvironment() {
    for (let envName in EnvName) {
      console.log(`env:${envName}:${getValue(envName as EnvName)} `);
    }
    for (let envName in EnvName) {
      console.log(`env:${envName}:${getValues(envName as EnvName)} `);
    }
  }

  export function validateEnvironment(): boolean {
    if (!EnvUtils.isDefined(EnvUtils.EnvName.MAINNET_RPC_HOSTS) && 
        !EnvUtils.isDefined(EnvUtils.EnvName.INFURA_ID) &&
        !EnvUtils.isDefined(EnvUtils.EnvName.QUICKNODE_ID)) {
      console.error(
        `Please either set the environment variable "MAINNET_RPC_HOSTS"\n\tex. export MAINNET_RPC_HOSTS=http://127.0.0.1:8545,http://127.0.0.2:8545`
      );
      console.error(
        `or INFURA_ID=*** which is used for https://*.infura.io/v3/***, without either of these a provider can't be established`
      );
      console.error(
        `or QUICKNODE_ID=***`
      );
      return false;
    }

    if (!EnvUtils.isDefined(EnvUtils.EnvName.CHAIN_SRC)) {
      console.warn(
        'It may be necessary to set the environment variable "CHAIN_SRC"\n\tex. export CHAIN_SRC=https://hostname.com/chains/chain_logo_[chainid].[ext]'
      );
      // return false;
    }

    if (!EnvUtils.isDefined(EnvUtils.EnvName.CMC_API_KEY)) {
      console.warn('It may be necessary to set the environment variable "CMC_API_KEY"');
      // return false;
    }

    return true;
  }
}
