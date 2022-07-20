import { expect } from '@jest/globals';
import { ChainId } from '../crypto/networks';
import { ADDRESSES, getAddress } from './addresses';
import { AddressName } from '../enums/addressName';

describe('constants/addresses', () => {
  describe('getToken - valid', () => {
    type TestArgs = {
      name: AddressName;
      chainId: ChainId;
      expectedAddress?: string;
    };

    const testParams: TestArgs[] = [
      {
        name: AddressName.ETH,
        chainId: ChainId.Mainnet,
        expectedAddress: ADDRESSES[AddressName.ETH][ChainId.Mainnet]
      },
      {
        name: AddressName.ICHIBPT,
        chainId: ChainId.Polygon,
        expectedAddress: ADDRESSES[AddressName.ICHIBPT][ChainId.Mainnet]
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        const actualResult = getAddress(testParam.name, testParam.chainId);
        expect(actualResult).toEqual(testParam.expectedAddress);
      });
    });
  });

  describe('getToken - invalid', () => {
    type TestArgs = {
      name: AddressName;
      chainId: ChainId;
      expectedErrorMessage?: string;
    };

    const testParams: TestArgs[] = [
      {
        name: AddressName.FARMING_V1,
        // Look for ICHI on a unknown chainId
        chainId: 999 as ChainId,
        expectedErrorMessage: `Could not find ${AddressName.FARMING_V1} on 999`
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        expect(() => getAddress(testParam.name, testParam.chainId)).toThrow(testParam.expectedErrorMessage);
      });
    });
  });

  // describe('getaddresses', () => {
  //   type TestArgs = {
  //     chainId: ChainId;
  //   };

  //   const testParams: TestArgs[] = [
  //     {
  //       chainId: ChainId.Mainnet
  //     },
  //     {
  //       chainId: ChainId.Polygon
  //     }
  //   ];

  //   testParams.forEach((testParam) => {
  //     it(JSON.stringify(testParam), async () => {
  //       const actualResult = getaddresses(testParam.chainId);
  //       expect(actualResult.length).toBeGreaterThan(0);
  //     });
  //   });
  // });
});
