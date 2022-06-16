export type DebankPortfolioToken = {
  id: string; // '0x111111517e4929d3dcbdfa7cce55d30d4b6bc4d6';
  chain: string; // 'matic';
  name: string; // 'ICHI';
  symbol: string; // 'ICHI';
  display_symbol?: string; // null;
  optimized_symbol: string; // 'ICHI';
  decimals: number; // 18;
  logo_url: string; // 'https://static.debank.com/image/matic_token/logo_url/0x111111517e4929d3dcbdfa7cce55d30d4b6bc4d6/e76d0f686f54a074c8aafa738b1ccd40.png';
  protocol_id: string; // 'matic_ichi';
  price: number; // 7.473069657799979;
  is_verified: boolean; // true;
  is_core: boolean; // true;
  is_wallet: boolean; // true;
  time_at: number; // 1644593108;
  amount: number; // 499.9999999999997;
};

export type DebankPortfolioStats = {
  asset_usd_value: number; // 3737.7196189322085;
  debt_usd_value: number; // 0;
  net_usd_value: number; // 3737.7196189322085;
};

export type DebankPortfolioPool = {
  id: string; // '0x6980e5afafec8c9c5f039d0c1a8ccfa6cefb9393';
  chain: string; // 'matic';
  project_id: string; // 'matic_uniswap3';
  adapter_id: string; // 'uniswap3_liquidity';
  controller: string; // '0x6980e5afafec8c9c5f039d0c1a8ccfa6cefb9393';
  // TODO: Unsure exactly what this one is
  index?: number; // null;
  time_at: number; // 1648580602;
};

export type DebankPortfolioItem = {
  stats: DebankPortfolioStats;
  asset_dict: Record<string, number>;
  update_at: number;
  name: string; // 'Liquidity Pool',
  detail_types: string[];
  detail: {
    supply_token_list: DebankPortfolioToken[];
    reward_token_list: DebankPortfolioToken[];
  };
  // TODO: Currently unknown
  proxy_detail: Object;
  position_index: string; // '131006';
  pool: DebankPortfolioPool;
};

export type DebankPortfolio = {
  id: string; // 'matic_uniswap3',
  chain: string; // 'matic',
  name: string; // 'Uniswap V3',
  site_url: string; // 'https://app.uniswap.org',
  logo_url: string; // 'https://static.debank.com/image/project/logo_url/uniswap3/87a541b3b83b041c8d12119e5a0d19f0.png',
  has_supported_portfolio: boolean; // true,
  tvl: number; // 120269837.65412797,
  portfolio_item_list: DebankPortfolioItem[];
};
