import { StaticJsonRpcProvider } from '@ethersproject/providers';

export type ProviderCache = {
  provider?: StaticJsonRpcProvider;
  lastUdated: number;
  cacheHit: number;
  cacheMiss: number;
};
