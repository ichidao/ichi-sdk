// https://stackoverflow.com/questions/58999086/cypress-causing-type-errors-in-jest-assertions
import { expect } from '@jest/globals';
import { getBarShift } from './vault';

describe('utils/vault', () => {
  describe('getBarShift', () => {
    type TestArgs = {
      direction: boolean;
      tickSpacing: number;
      currentTick: number;
      lower: number;
      upper: number;
      expectedResult: number;
    };

    const testParams: TestArgs[] = [
      {
        direction: true,
        tickSpacing: 1,
        currentTick: 5,
        lower: 1,
        upper: 10,
        expectedResult: 4
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), () => {
        const actualResult = getBarShift(
          testParam.direction,
          testParam.tickSpacing,
          testParam.currentTick,
          testParam.lower,
          testParam.upper
        );
        expect(actualResult).toEqual(testParam.expectedResult);
      });
    });
  });
});
