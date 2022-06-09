export type CoingeckoPrice = {
  usd: number;
  usd_24h_change: number;
};
export type CoingeckoPriceResponse = Record<string, CoingeckoPrice>;
