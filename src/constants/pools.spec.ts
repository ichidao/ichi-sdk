import { expect } from '@jest/globals';
import { PoolName } from '../enums/poolName';
import { ChainId } from '../crypto/networks';
import { getPool, getPools, PoolMapping } from './pools';

describe('constants/pools', () => {
  describe('getPool - valid', () => {
    type TestArgs = {
      name: PoolName;
      chainId: ChainId;
      expectedAddress?: string;
    };

    const testParams: TestArgs[] = [
      {
        name: PoolName.ONE1INCH_USDC,
        chainId: ChainId.Mainnet,
        expectedAddress: PoolMapping[PoolName.ONE1INCH_USDC][ChainId.Mainnet]?.address
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        const actualResult = getPool(testParam.name, testParam.chainId);
        expect(actualResult.address).toEqual(testParam.expectedAddress);
      });
    });
  });

  describe('getPool - invalid', () => {
    type TestArgs = {
      name: PoolName;
      chainId: ChainId;
      expectedErrorMessage?: string;
    };

    const testParams: TestArgs[] = [
      {
        name: PoolName.ONE1INCH_USDC,
        // Look for ICHI on a unknown chainId
        chainId: 999 as ChainId,
        expectedErrorMessage: `Could not find ${PoolName.ONE1INCH_USDC} on 999`
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        expect(() => getPool(testParam.name, testParam.chainId)).toThrow(testParam.expectedErrorMessage);
      });
    });
  });

  describe('getPools', () => {
    type TestArgs = {
      chainId: ChainId;
    };

    const testParams: TestArgs[] = [
      {
        chainId: ChainId.Mainnet
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        const actualResult = getPools(testParam.chainId);
        expect(actualResult.length).toBeGreaterThan(0);
      });
    });
  });
});
