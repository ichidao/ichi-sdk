import { expect } from '@jest/globals';
import { BancorV3Pool, BancorV3Pools } from '../models/bancor';
import { getBancorV3Pools } from './bancor';

describe('external/bancor', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('getBancorV3Pools', () => {
    it('Successfully return bancor v3 pools', async () => {
      const result: BancorV3Pools = {
        data: [
          {
            name: 'test'
          } as BancorV3Pool
        ]
      };

      fetchMock.mockResponse(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' }
      });
      const actualResult = await getBancorV3Pools();
      expect(actualResult).toEqual(result);
    });
  });
});
