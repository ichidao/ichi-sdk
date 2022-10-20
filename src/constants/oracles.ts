import { ChainId } from '../crypto/networks';
import { PartialRecord } from '../types/common';
import { getOneTokenFactoryContract } from '../utils/contracts';
import { getProvider } from '../crypto/providers';
import { OracleName, OracleNames } from '../enums/oracleName';
import { TokenName } from '../enums/tokenName';
import { getToken } from './tokens';
import { OneTokenFactory } from '../generated';
import { getAddress } from './addresses';
import { AddressName } from '../enums/addressName';

type OracleMapping = {
  [oracleValues in OracleNames]: PartialRecord<ChainId, string>;
};

// TODO: I think we can totally remove this and merge it into the TOKENS?  So here are some overlap here, really we want
// tokens to be in tokens.ts and other contracts are fine to be in here...
export const ORACLES: OracleMapping = {
  [OracleName.ICHI_ORACLE]: { [ChainId.Mainnet]: '0xD41EA28e17BD06136c416cA942fB997122138139' },
};

export async function getAllOneTokenOracles(oneTokenFactoryName: AddressName, chainId: ChainId): Promise<Record<string, string[]>> {
  let oneTokenToOracle = {};

  const ichiVaultFactory = await getOneTokenFactoryInstance(oneTokenFactoryName, chainId);
  const numForeignTokens = await ichiVaultFactory.foreignTokenCount();

  for (let i = 0; i < numForeignTokens.toNumber(); i++) {
    const foreignToken = await ichiVaultFactory.foreignTokenAtIndex(i);
    oneTokenToOracle[foreignToken] = await getOneTokenOracles(foreignToken, chainId, ichiVaultFactory);
  }

  return oneTokenToOracle;
}

export async function getOneTokenOracles(
  oneTokenAddress: string, 
  chainId: ChainId, 
  ichiVaultFactoryContract?: OneTokenFactory, 
  oneTokenFactoryName?: AddressName): Promise<string[]> {
  let ichiVaultFactory;
  if (!ichiVaultFactoryContract) {
    if (!oneTokenFactoryName) {
      throw 'Cannot make instance of OneToken Factory - Name not provided';
    }
    ichiVaultFactory = await getOneTokenFactoryInstance(oneTokenFactoryName, chainId);
  } else {
    ichiVaultFactory = ichiVaultFactoryContract;
  }

  const oneTokenToOracle: string[] = [];

  const numOracles = await ichiVaultFactory.foreignTokenOracleCount(oneTokenAddress);
  for (let j = 0; j < numOracles.toNumber(); j++) {
    const oracle = await ichiVaultFactory.foreignTokenOracleAtIndex(oneTokenAddress, j);
    oneTokenToOracle.push(oracle);
  }

  return oneTokenToOracle;
}

async function getOneTokenFactoryInstance(oneTokenFactoryName: AddressName, chainId: ChainId): Promise<OneTokenFactory> {
  const provider = await getProvider(chainId);
  if (!provider) {
    throw Error('Could not connect with provider');
  }

  const oneTokenFactoryAddress = getAddress(oneTokenFactoryName, chainId);

  const instance = getOneTokenFactoryContract(oneTokenFactoryAddress, provider);
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
