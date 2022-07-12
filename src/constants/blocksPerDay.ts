import { ChainId } from '../crypto/networks';
import { PartialRecord } from '../types/common';
import { Optional } from '../types/optional';

export const BlocksPerDay: PartialRecord<ChainId, number> = {
  [ChainId.Mainnet]: 6500,
  [ChainId.Polygon]: 43000,
  [ChainId.Mumbai]: 43000,
  [ChainId.Kovan]: 6500
};

export function getBlocksPerDay(chainId: ChainId): Optional<number> {
  if (BlocksPerDay[chainId] == null) {
    throw new Error(`Could not resolve blocks per day for ${chainId}`);
  }
  return BlocksPerDay[chainId];
}
