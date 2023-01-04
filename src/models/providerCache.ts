import { JsonRpcProvider } from '@ethersproject/providers';

export type ProviderCache = {
  provider?: JsonRpcProvider;
  lastUdated: number;
  cacheHit: number;
  cacheMiss: number;
};
