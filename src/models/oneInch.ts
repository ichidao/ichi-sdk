type OneInchPoolApy = {
  token: string; // "0x111111111117dc0aa78b770fa6a738034120c302",
  value: number; // 7455.99
};

export type OneInchPool = {
  pool_identifier: string; // "oneinchlp-0x111111111117dc0aa78b770fa6a738034120c302-0x0000000000000000000000000000000000000000",
  liquidity_locked: number; // 78240.31,
  apy: number; // 7455.99,
  apys: OneInchPoolApy[];
};
