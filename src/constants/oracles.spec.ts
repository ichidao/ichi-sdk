import { expect } from '@jest/globals';
import { ChainId } from '../crypto/networks';
import { ORACLES, getOracleAddress, getAllOneTokenOracles } from './oracles';
import { OracleName } from '../enums/oracleName';

describe('constants/addresses', () => {
  describe('getToken - valid', () => {
    type TestArgs = {
      name: OracleName;
      chainId: ChainId;
      expectedAddress?: string;
    };

    const testParams: TestArgs[] = [
      {
        name: OracleName.MAINNET_ICHI_ORACLE,
        chainId: ChainId.Mainnet,
        expectedAddress: ORACLES[OracleName.MAINNET_ICHI_ORACLE][ChainId.Mainnet],
      },
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        const actualResult = getOracleAddress(testParam.name, testParam.chainId);
        expect(actualResult).toEqual(testParam.expectedAddress);
      });
    });
  });

  describe('getToken - invalid', () => {
    it('should return non negative list of all oracles', async () => {
      const actualResult = await getAllOneTokenOracles(ChainId.Polygon);
      expect(actualResult.size).toBeGreaterThan(0);
    });
  });
});
