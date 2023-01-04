import { expect } from '@jest/globals';
import { ChainId } from '../crypto/networks';
import { AddressName } from '../enums/addressName';
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
        name: OracleName.ICHI_ORACLE,
        chainId: ChainId.Mainnet,
        expectedAddress: ORACLES[OracleName.ICHI_ORACLE][ChainId.Mainnet]
      }
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
      const actualResult = await getAllOneTokenOracles(AddressName.ONE_TOKEN_FACTORY, ChainId.Polygon);
      expect(Object.keys(actualResult).length).toBeGreaterThan(0);
    });
  });
});
