// https://stackoverflow.com/questions/58999086/cypress-causing-type-errors-in-jest-assertions
import { expect } from '@jest/globals';
import { chunk } from './array';

describe('utils/array', () => {
  describe('chunk', () => {
    type TestArgs = {
      arr: string[];
      chunkSize: number;
      expectedResult: string[][];
    };

    const testParams: TestArgs[] = [
      {
        arr: [],
        chunkSize: 1,
        expectedResult: []
      },
      {
        arr: ['a', 'b', 'c'],
        chunkSize: 1,
        expectedResult: [['a'], ['b'], ['c']]
      },
      {
        arr: ['a', 'b', 'c'],
        chunkSize: 2,
        expectedResult: [['a', 'b'], ['c']]
      },
      {
        arr: ['a', 'b', 'c'],
        chunkSize: 3,
        expectedResult: [['a', 'b', 'c']]
      },
      {
        arr: ['a', 'b', 'c'],
        chunkSize: 4,
        expectedResult: [['a', 'b', 'c']]
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), () => {
        const actualResult = chunk(testParam.arr, testParam.chunkSize);
        expect(actualResult).toEqual(testParam.expectedResult);
      });
    });
  });
});
