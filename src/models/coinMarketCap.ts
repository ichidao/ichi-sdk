export type PlatformData = {
  id: number; // 1027,
  name: string; // 'Ethereum',
  symbol: string; // 'ETH',
  slug: string; // 'ethereum',
  token_address: string; // '0x111111517e4929d3dcbdfa7cce55d30d4b6bc4d6'
};

export type QuotePriceData = {
  price: number; //5.4379638908995975,
  volume_24h: number; //519685.19505375,
  volume_change_24h: number; //-19.0727,
  percent_change_1h: number; //0.08649356,
  percent_change_24h: number; //0.24666887,
  percent_change_7d: number; //-0.74610789,
  percent_change_30d: number; //1.07857822,
  percent_change_60d: number; //-2.95590092,
  percent_change_90d: number; //22.13989148,
  market_cap: number; //27662470.671960473,
  market_cap_dominance: number; //0,
  fully_diluted_market_cap: number; //54379638.91,
  tvl?: number; // null,
  last_updated: string; // '2022-10-12T19:04:00.000Z'
};

export type QuoteData = {
  USD: QuotePriceData;
};

export type CoinMarketCapTokenInfo = {
  id: number; // 7726,
  name: string; // 'ICHI',
  symbol: string; // 'ICHI',
  slug: string; // 'ichi',
  num_market_pairs: number; // 26,
  date_added: string; //'2020-11-19T00:00:00.000Z',
  tags: string[]; // [Array],
  max_supply: null,
  circulating_supply: number; //5086916.94666334,
  total_supply: number; //10000000,
  platform: PlatformData; // [Object],
  is_active: number; // 1,
  cmc_rank: number; // 435,
  is_fiat: number; // 0,
  self_reported_circulating_supply?: number; // null,
  self_reported_market_cap?: number; // null,
  tvl_ratio?: number; // null,
  last_updated: string; // '2022-10-12T18:46:00.000Z',
  quote: QuoteData; // [Object]
};

export type CoinMarketCapTokenInfoResponse = Record<string, CoinMarketCapTokenInfo>;
