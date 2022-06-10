export type CoinGeckoPrice = {
  usd: number;
  usd_24h_change: number;
};
export type CoinGeckoPriceResponse = Record<string, CoinGeckoPrice>;

export type CoinGeckoTokenInfo = {
  id: string; // ichi-farm,
  symbol: string; // ichi,
  name: string; // Ichi,
  image: string; // https://assets.coingecko.com/coins/images/13119/large/ICHI_%28Round%29.jpg?1614308761,
  current_price: number; // 10.35;
  market_cap: number; // 49121697;
  market_cap_rank: number; // 435;
  fully_diluted_valuation: number; // 103651798;
  total_volume: number; // 413548;
  high_24h: number; // 10.67;
  low_24h: number; // 10.34;
  price_change_24h: number; // -0.28055557520104735;
  price_change_percentage_24h: number; // -2.63791;
  market_cap_change_24h: number; // -1412027.6084604636;
  market_cap_change_percentage_24h: number; // -2.79423;
  circulating_supply: number; // 4739107.06379146;
  total_supply: number; // 10000000;
  max_supply: number; // 10000000;
  ath: number; // 143.93;
  ath_change_percentage: number; // -92.79644;
  ath_date: string; // 2022-04-08T12:59:25.419Z,
  atl: number; // 0.247096;
  atl_change_percentage: number; // 4095.88981;
  atl_date: string; // 2020-11-22T14:43:22.948Z,
  roi?: number; // null;
  last_updated: string; // 2022-06-10T18:26:31.351Z,
  price_change_percentage_7d_in_currency: number; // 5.0167697917599225;
};
export type CoinGeckoTokenInfoResponse = Record<string, CoinGeckoTokenInfo>;
