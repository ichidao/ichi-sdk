import { expect } from '@jest/globals';
import { OneInchPool } from '../models/oneInch';
import { get1InchPools } from './oneInch';

describe('external/oneInch', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('get1InchPools', () => {
    it('Successfully return 1inch pools', async () => {
      const result: OneInchPool[] = [
        {
          pool_identifier:
            'oneinchlp-0x111111111117dc0aa78b770fa6a738034120c302-0x0000000000000000000000000000000000000000',
          liquidity_locked: 78240.31,
          apy: 7455.99,
          apys: [
            {
              token: '1234',
              value: 1234
            }
          ]
        }
      ];

      fetchMock.mockResponse(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' }
      });
      const actualResult = await get1InchPools();
      expect(actualResult).toEqual(result);
    });
  });

  // describe('get1InchPools', () => {
  //   const mockResponse1: CoinGeckoPriceResponse = {
  //     '1': {
  //       usd: 1,
  //       usd_24h_change: 0.01
  //     }
  //   };

  //   const mockResponse2: CoinGeckoPriceResponse = {
  //     '1': {
  //       usd: 1,
  //       usd_24h_change: 0.01
  //     },
  //     '2': {
  //       usd: 2,
  //       usd_24h_change: 0.02
  //     }
  //   };

  //   type TestArgs = {
  //     ids?: string[];
  //     expectedResult: Awaited<ReturnType<typeof lookUpTokenPrices>>;
  //   };

  //   const testParams: TestArgs[] = [
  //     {
  //       ids: undefined,
  //       expectedResult: undefined
  //     },
  //     {
  //       expectedResult: undefined
  //     },
  //     {
  //       ids: ['1'],
  //       expectedResult: mockResponse1
  //     },
  //     {
  //       ids: ['1', '2'],
  //       expectedResult: mockResponse2
  //     }
  //   ];

  //   testParams.forEach((testParam) => {
  //     it(JSON.stringify(testParam), async () => {
  //       fetchMock.mockResponse(JSON.stringify(testParam.expectedResult), {
  //         headers: { 'Content-Type': 'application/json' }
  //       });
  //       const actualResult = await lookUpTokenPrices(testParam.ids as string[]);
  //       expect(actualResult).toEqual(testParam.expectedResult);
  //     });
  //   });
  // });

  // describe('getTokenPrice', () => {
  //   const mockResponse1: CoinGeckoPriceResponse = {
  //     '1': {
  //       usd: 1,
  //       usd_24h_change: 0.01
  //     }
  //   };

  //   const mockResponse2: CoinGeckoPriceResponse = {
  //     '1': {
  //       usd: 1,
  //       usd_24h_change: 0.01
  //     },
  //     '2': {
  //       usd: 2,
  //       usd_24h_change: 0.02
  //     }
  //   };

  //   type TestArgs = {
  //     address: string;
  //     tokenPrices: CoinGeckoPriceResponse;
  //     mockResponse?: CoinGeckoPriceResponse;
  //     expectedResult: Awaited<ReturnType<typeof getTokenPrice>>;
  //   };

  //   const testParams: TestArgs[] = [
  //     // Given nothing return nothing
  //     {
  //       address: undefined as unknown as string,
  //       tokenPrices: {},
  //       expectedResult: undefined
  //     },
  //     // Given an address but no tokenPrices expect the fetch call
  //     {
  //       address: '1',
  //       tokenPrices: {},
  //       mockResponse: mockResponse1,
  //       expectedResult: mockResponse1['1']
  //     },
  //     // Given an address with tokenPrices expect a cached response
  //     {
  //       address: '2',
  //       tokenPrices: mockResponse2,
  //       // Note I'm only mocking the 1 not the 2, so this ensures the cache hit
  //       mockResponse: mockResponse1,
  //       expectedResult: mockResponse2['2']
  //     }
  //   ];

  //   testParams.forEach((testParam) => {
  //     it(JSON.stringify(testParam), async () => {
  //       fetchMock.mockResponse(JSON.stringify(testParam.mockResponse), {
  //         headers: { 'Content-Type': 'application/json' }
  //       });
  //       const actualResult = await getTokenPrice(testParam.address, testParam.tokenPrices);
  //       expect(actualResult).toEqual(testParam.expectedResult);
  //     });
  //   });
  // });

  // describe('getTokenInfo', () => {
  //   const mockResponse1: Partial<CoinGeckoTokenInfo> = {
  //     id: 'ichi',
  //     ath: 1
  //   };

  //   const mockResponse2: Partial<CoinGeckoTokenInfo> = {
  //     id: 'qredo',
  //     ath: 1.5
  //   };

  //   type TestArgs = {
  //     ids: string[];
  //     mockResponse: CoinGeckoTokenInfo[];
  //     expectedResult: Awaited<ReturnType<typeof getTokenInfo>>;
  //   };

  //   const testParams: TestArgs[] = [
  //     // Given nothing return nothing
  //     {
  //       ids: undefined as unknown as string[],
  //       mockResponse: [],
  //       expectedResult: undefined
  //     },
  //     // Given an address but no tokenPrices expect the fetch call
  //     {
  //       ids: ['ichi'],
  //       mockResponse: [mockResponse1] as CoinGeckoTokenInfo[],
  //       expectedResult: { ichi: mockResponse1 as CoinGeckoTokenInfo }
  //     },
  //     // Given an address with tokenPrices expect a cached response
  //     {
  //       ids: ['ichi', 'qredo'],
  //       // Note I'm only mocking the 1 not the 2, so this ensures the cache hit
  //       mockResponse: [mockResponse1, mockResponse2] as CoinGeckoTokenInfo[],
  //       expectedResult: { ichi: mockResponse1 as CoinGeckoTokenInfo, qredo: mockResponse2 as CoinGeckoTokenInfo }
  //     }
  //   ];

  //   testParams.forEach((testParam) => {
  //     it(JSON.stringify(testParam), async () => {
  //       fetchMock.mockResponse(JSON.stringify(testParam.mockResponse), {
  //         headers: { 'Content-Type': 'application/json' }
  //       });
  //       const actualResult = await getTokenInfo(testParam.ids);
  //       expect(actualResult).toEqual(testParam.expectedResult);
  //     });
  //   });
  // });
});
