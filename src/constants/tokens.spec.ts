import { expect } from '@jest/globals';
import { TokenName } from '../enums/tokenName';
import { ChainId } from '../crypto/networks';
import { getToken, getTokens, TOKENS } from './tokens';

describe('constants/tokens', () => {
  describe('getToken - valid', () => {
    type TestArgs = {
      name: TokenName;
      chainId: ChainId;
      expectedAddress?: string;
    };

    const testParams: TestArgs[] = [
      {
        name: TokenName.ICHI,
        chainId: ChainId.Mainnet,
        expectedAddress: TOKENS[TokenName.ICHI][ChainId.Mainnet]?.address
      },
      {
        name: TokenName.ICHI_V2,
        chainId: ChainId.Polygon,
        expectedAddress: TOKENS[TokenName.ICHI_V2][ChainId.Polygon]?.address
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        const actualResult = getToken(testParam.name, testParam.chainId);
        expect(actualResult.address).toEqual(testParam.expectedAddress);
      });
    });
  });

  describe('getToken - invalid', () => {
    type TestArgs = {
      name: TokenName;
      chainId: ChainId;
      expectedErrorMessage?: string;
    };

    const testParams: TestArgs[] = [
      {
        name: TokenName.ICHI,
        // Look for ICHI on a unknown chainId
        chainId: 999 as ChainId,
        expectedErrorMessage: `Could not find ${TokenName.ICHI} on 999`
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        expect(() => getToken(testParam.name, testParam.chainId)).toThrow(testParam.expectedErrorMessage);
      });
    });
  });

  describe('getTokens', () => {
    type TestArgs = {
      chainId: ChainId;
    };

    const testParams: TestArgs[] = [
      {
        chainId: ChainId.Mainnet
      },
      {
        chainId: ChainId.Polygon
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        const actualResult = getTokens(testParam.chainId);
        expect(actualResult.length).toBeGreaterThan(0);
      });
    });
  });
});
