import { expect } from '@jest/globals';
import { CoinGeckoPriceResponse, CoinGeckoTokenInfo } from '../models/coinGecko';
import { getTokenInfo, getTokenPrice, lookUpTokenPrices } from './coinGecko';

describe('external/coinGecko', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('lookUpTokenPrices', () => {
    const mockResponse1: CoinGeckoPriceResponse = {
      '1': {
        usd: 1,
        usd_24h_change: 0.01
      }
    };

    const mockResponse2: CoinGeckoPriceResponse = {
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
    const mockResponse1: CoinGeckoPriceResponse = {
      '1': {
        usd: 1,
        usd_24h_change: 0.01
      }
    };

    const mockResponse2: CoinGeckoPriceResponse = {
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
      tokenPrices: CoinGeckoPriceResponse;
      mockResponse?: CoinGeckoPriceResponse;
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

  describe('getTokenInfo', () => {
    const mockResponse1: Partial<CoinGeckoTokenInfo> = {
      id: 'ichi',
      ath: 1
    };

    const mockResponse2: Partial<CoinGeckoTokenInfo> = {
      id: 'qredo',
      ath: 1.5
    };

    type TestArgs = {
      ids: string[];
      mockResponse: CoinGeckoTokenInfo[];
      expectedResult: Awaited<ReturnType<typeof getTokenInfo>>;
    };

    const testParams: TestArgs[] = [
      // Given nothing return nothing
      {
        ids: undefined as unknown as string[],
        mockResponse: [],
        expectedResult: undefined
      },
      // Given an address but no tokenPrices expect the fetch call
      {
        ids: ['ichi'],
        mockResponse: [mockResponse1] as CoinGeckoTokenInfo[],
        expectedResult: { ichi: mockResponse1 as CoinGeckoTokenInfo }
      },
      // Given an address with tokenPrices expect a cached response
      {
        ids: ['ichi', 'qredo'],
        // Note I'm only mocking the 1 not the 2, so this ensures the cache hit
        mockResponse: [mockResponse1, mockResponse2] as CoinGeckoTokenInfo[],
        expectedResult: { ichi: mockResponse1 as CoinGeckoTokenInfo, qredo: mockResponse2 as CoinGeckoTokenInfo }
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        fetchMock.mockResponse(JSON.stringify(testParam.mockResponse), {
          headers: { 'Content-Type': 'application/json' }
        });
        const actualResult = await getTokenInfo(testParam.ids);
        expect(actualResult).toEqual(testParam.expectedResult);
      });
    });
  });
});
