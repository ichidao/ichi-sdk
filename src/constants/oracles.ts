import { ChainId } from '../crypto/networks';
import { PartialRecord } from '../types/common';
import { getOneTokenFactoryContract } from '../utils/contracts';
import { getProvider } from '../crypto/providers';
import { OracleName, OracleNames } from '../enums/oracleName';
import { TokenName } from '../enums/tokenName';
import { getToken } from './tokens';
import { OneTokenFactory } from '../generated';
import { resourceUsage } from 'process';
import { resourceLimits } from 'worker_threads';

type OracleMapping = {
  [oracleValues in OracleNames]: PartialRecord<ChainId, string>;
};

// TODO: I think we can totally remove this and merge it into the TOKENS?  So here are some overlap here, really we want
// tokens to be in tokens.ts and other contracts are fine to be in here...
export const ORACLES: OracleMapping = {
  [OracleName.ICHI_ORACLE]: { [ChainId.Mainnet]: '0xD41EA28e17BD06136c416cA942fB997122138139' },
};

export async function getAllOneTokenOracles(oneTokenFactoryAddress: string, chainId: ChainId): Promise<Record<string, string[]>> {
  let oneTokenToOracle = {};

  const ichiVaultFactory = await getOneTokenFactoryInstance(oneTokenFactoryAddress, chainId);
  let numForeignTokens = await ichiVaultFactory.foreignTokenCount();

  for (let i = 0; i < numForeignTokens.toNumber(); i++) {
    let foreignToken = await ichiVaultFactory.foreignTokenAtIndex(i);
    oneTokenToOracle[foreignToken] = await getOneTokenOracles(foreignToken, chainId, ichiVaultFactory);
  }

  return oneTokenToOracle;
}

export async function getOneTokenOracles(oneTokenAddress: string, chainId: ChainId, ichiVaultFactoryContract?: OneTokenFactory, oneTokenFactoryAddress?: string): Promise<string[]> {
  let ichiVaultFactory;
  if (!ichiVaultFactoryContract) {
    if (!oneTokenFactoryAddress) {
      throw 'Cannot make instance of OneToken Factory - Address not provided';
    }
    ichiVaultFactory = await getOneTokenFactoryInstance(oneTokenFactoryAddress, chainId);
  } else {
    ichiVaultFactory = ichiVaultFactoryContract;
  }

  let oneTokenToOracle: string[] = [];

  let numOracles = await ichiVaultFactory.foreignTokenOracleCount(oneTokenAddress);
  for (let j = 0; j < numOracles.toNumber(); j++) {
    let oracle = await ichiVaultFactory.foreignTokenOracleAtIndex(oneTokenAddress, j);
    oneTokenToOracle.push(oracle);
  }

  return oneTokenToOracle;
}

async function getOneTokenFactoryInstance(oneTokenFactoryAddress: string, chainId: ChainId): Promise<OneTokenFactory> {
  const provider = await getProvider(chainId);
  if (!provider) {
    throw Error('Could not connect with provider');
  }

  let instance = getOneTokenFactoryContract(oneTokenFactoryAddress, provider);
  if (!instance) {
    throw 'Instance could not be created - please check the inputs';
  }
  return instance;
}

export function getOracleAddress(oracleName: OracleName, chainId: ChainId): string {
  const address = ORACLES[oracleName] != null ? ORACLES[oracleName][chainId] : undefined;
  if (!address) {
    throw new Error(`Could not find ${oracleName} on ${chainId}`);
  }
  return address;
}

getAllOneTokenOracles('0x101eB16BdbA37979a771c86e1CAAfbaDbABfc879', ChainId.Polygon).then((result) => console.log(result));
