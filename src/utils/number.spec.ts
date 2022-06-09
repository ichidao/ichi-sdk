// https://stackoverflow.com/questions/58999086/cypress-causing-type-errors-in-jest-assertions
import { expect } from '@jest/globals';
import { bnToNumberWithoutDecimals } from './number';

describe('utils/number', () => {
  describe('bnToNumberWithoutDecimals', () => {
    type TestArgs = {
      val?: string;
      decimals: number;
      expectedResult: number;
    };

    const testParams: TestArgs[] = [
      {
        val: undefined,
        decimals: 8,
        expectedResult: 0
      },
      {
        val: undefined,
        decimals: 8,
        expectedResult: 0
      },
      {
        val: '1',
        decimals: 8,
        expectedResult: 0.00000001
      },
      {
        val: '10',
        decimals: 8,
        expectedResult: 0.0000001
      },
      {
        val: '10000000',
        decimals: 8,
        expectedResult: 0.1
      },
      {
        val: '1',
        decimals: 18,
        expectedResult: 0.000000000000000001
      },
      {
        val: '10',
        decimals: 18,
        expectedResult: 0.00000000000000001
      },
      {
        val: '100000000000000000',
        decimals: 18,
        expectedResult: 0.1
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), () => {
        const actualResult = bnToNumberWithoutDecimals(testParam.val, testParam.decimals);
        expect(actualResult).toEqual(testParam.expectedResult);
      });
    });
  });
});
