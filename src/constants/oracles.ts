import { ChainId } from '../crypto/networks';
import { PartialRecord } from '../types/common';
import { ADDRESSES } from './addresses';
import { getOneTokenFactoryContract } from '../utils/contracts';
import { getProvider } from '../crypto/providers';
import { OracleName, OracleNames } from '../enums/oracleName';
import { AddressName } from '../enums/addressName';
import { getAddress } from './addresses';
import { OneTokenFactory } from '../generated';

type OracleMapping = {
  [oracleValues in OracleNames]: PartialRecord<ChainId, string>;
};

// TODO: I think we can totally remove this and merge it into the TOKENS?  So here are some overlap here, really we want
// tokens to be in tokens.ts and other contracts are fine to be in here...
export const ORACLES: OracleMapping = {
  [OracleName.MAINNET_ICHI_ORACLE]: { [ChainId.Mainnet]: '0xD41EA28e17BD06136c416cA942fB997122138139' },
};

export async function getAllOneTokenOracles(chainId: ChainId): Promise<Map<string, string[]>> {

  console.log('Getting all OneToken Oracles for chainId: ', chainId);
  let oneTokenToOracle = new Map<string, string[]>();
  const ichiVaultFactory = await getOneTokenFactoryInstance(chainId);

  let numForeignTokens = await ichiVaultFactory.foreignTokenCount();
  for (let i = 0; i < numForeignTokens.toNumber(); i++) {
    let foreignToken = await ichiVaultFactory.foreignTokenAtIndex(i);
    oneTokenToOracle[foreignToken] = await getOneTokenOracles(foreignToken, chainId, ichiVaultFactory);
  }

  return oneTokenToOracle;
}

export async function getOneTokenOracles(oneTokenAddress: string, chainId: ChainId, ichiVaultFactoryContract?: OneTokenFactory): Promise<Map<string, string[]>> {
  let ichiVaultFactory;
  if (!ichiVaultFactoryContract) {
    ichiVaultFactory = await getOneTokenFactoryInstance(chainId);
  } else {
    ichiVaultFactory = ichiVaultFactoryContract;
  }

  let oneTokenToOracle = new Map<string, string[]>();
  oneTokenToOracle[oneTokenAddress] = [];

  let numOracles = await ichiVaultFactory.foreignTokenOracleCount(oneTokenAddress);
  for (let j = 0; j < numOracles.toNumber(); j++) {
    let oracle = await ichiVaultFactory.foreignTokenOracleAtIndex(oneTokenAddress, j);
    oneTokenToOracle[oneTokenAddress].push(oracle);
  }

  return oneTokenToOracle;
}

export async function getOneTokenFactoryInstance(chainId: ChainId): Promise<OneTokenFactory> {
    const provider = await getProvider(chainId);
    if (!provider) {
      throw Error('Could not connect with provider');
    }
    const oneTokenFactoryAddress = getAddress(AddressName.ONE_TOKEN_FACTORY, chainId);
    return getOneTokenFactoryContract(oneTokenFactoryAddress, provider);

}

export function getOracleAddress(oracleName: OracleName, chainId: ChainId): string {
  const address = ORACLES[oracleName] != null ? ORACLES[oracleName][chainId] : undefined;
  if (!address) {
    throw new Error(`Could not find ${oracleName} on ${chainId}`);
  }
  return address;
}
