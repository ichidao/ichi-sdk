// https://stackoverflow.com/questions/58999086/cypress-causing-type-errors-in-jest-assertions
import { expect } from '@jest/globals';
import { alwaysResolve } from './promises';

async function fnResolve() {
  return Promise.resolve(1);
}
async function fnReject() {
  return Promise.reject(1);
}

async function fnThrow() {
  throw new Error(`Unknown`);
}

describe('utils/promises', () => {
  describe('alwaysResolve', () => {
    it('Should resolve when one fails', async () => {
      const output = await Promise.all([
        alwaysResolve(fnReject()),
        alwaysResolve(fnResolve()),
        alwaysResolve(fnThrow())
      ]);
      return expect(output).toEqual([undefined, 1, undefined]);
    });
    it('Should resolve when none fails', async () => {
      const output = await Promise.all([
        alwaysResolve(fnResolve()),
        alwaysResolve(fnResolve()),
        alwaysResolve(fnResolve())
      ]);
      return expect(output).toEqual([1, 1, 1]);
    });
  });
});
