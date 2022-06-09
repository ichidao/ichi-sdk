import { expect } from '@jest/globals';
import { CoingeckoPriceResponse } from '../../models/coinGecko';
import { getTokenPrice, lookUpTokenPrices } from './prices';

describe('sdk/external/prices', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('lookUpTokenPrices', () => {
    const mockResponse1: CoingeckoPriceResponse = {
      '1': {
        usd: 1,
        usd_24h_change: 0.01
      }
    };

    const mockResponse2: CoingeckoPriceResponse = {
      '1': {
        usd: 1,
        usd_24h_change: 0.01
      },
      '2': {
        usd: 2,
        usd_24h_change: 0.02
      }
    };

    type TestArgs = {
      ids?: string[];
      expectedResult: Awaited<ReturnType<typeof lookUpTokenPrices>>;
    };

    const testParams: TestArgs[] = [
      {
        ids: undefined,
        expectedResult: undefined
      },
      {
        expectedResult: undefined
      },
      {
        ids: ['1'],
        expectedResult: mockResponse1
      },
      {
        ids: ['1', '2'],
        expectedResult: mockResponse2
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        fetchMock.mockResponse(JSON.stringify(testParam.expectedResult), {
          headers: { 'Content-Type': 'application/json' }
        });
        const actualResult = await lookUpTokenPrices(testParam.ids as string[]);
        expect(actualResult).toEqual(testParam.expectedResult);
      });
    });
  });

  describe('getTokenPrice', () => {
    const mockResponse1: CoingeckoPriceResponse = {
      '1': {
        usd: 1,
        usd_24h_change: 0.01
      }
    };

    const mockResponse2: CoingeckoPriceResponse = {
      '1': {
        usd: 1,
        usd_24h_change: 0.01
      },
      '2': {
        usd: 2,
        usd_24h_change: 0.02
      }
    };

    type TestArgs = {
      address: string;
      tokenPrices: CoingeckoPriceResponse;
      mockResponse?: CoingeckoPriceResponse;
      expectedResult: Awaited<ReturnType<typeof getTokenPrice>>;
    };

    const testParams: TestArgs[] = [
      // Given nothing return nothing
      {
        address: undefined as unknown as string,
        tokenPrices: {},
        expectedResult: undefined
      },
      // Given an address but no tokenPrices expect the fetch call
      {
        address: '1',
        tokenPrices: {},
        mockResponse: mockResponse1,
        expectedResult: mockResponse1['1']
      },
      // Given an address with tokenPrices expect a cached response
      {
        address: '2',
        tokenPrices: mockResponse2,
        // Note I'm only mocking the 1 not the 2, so this ensures the cache hit
        mockResponse: mockResponse1,
        expectedResult: mockResponse2['2']
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        fetchMock.mockResponse(JSON.stringify(testParam.mockResponse), {
          headers: { 'Content-Type': 'application/json' }
        });
        const actualResult = await getTokenPrice(testParam.address, testParam.tokenPrices);
        expect(actualResult).toEqual(testParam.expectedResult);
      });
    });
  });
});
