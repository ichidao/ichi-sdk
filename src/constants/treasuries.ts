import { TreasuryName } from '../enums/treasuryName';
import { ChainId } from '../crypto/networks';
import { TokenName } from '../enums/tokenName';
import { PartialRecord } from '../types/common';

type TTreasuryManagement = { [treasuryName in TreasuryName]: PartialRecord<ChainId, TokenName[]> };

export const TreasuryManagement: TTreasuryManagement = {
  [TreasuryName.TREASURIES]: {
    [ChainId.Mainnet]: [
      // 'oneBTC',
      TokenName.ONE_BTC,
      // 'oneFIL',
      TokenName.ONE_FIL,
      // 'one1INCH',
      TokenName.ONE_1INCH,
      // 'oneFUSE',
      TokenName.ONE_FUSE,
      // 'oneMPH',
      TokenName.ONE_MPH,
      // 'onePERL',
      TokenName.ONE_PERL,
      // 'oneUNI',
      TokenName.ONE_UNI,
      // 'oneDODO',
      TokenName.ONE_DODO,
      // 'oneFOX',
      TokenName.ONE_FOX,
      // 'oneWING',
      TokenName.ONE_WING,
      // 'BOOTusd',
      TokenName.BOOT_USD,
      // 'oneOJA',
      TokenName.ONE_OJA,
      // 'oneICHI'
      TokenName.ONE_ICHI,
      // 'oneGIV'
      TokenName.ONE_GIV
    ]
  },
  [TreasuryName.LEGACY_TREASURIES]: {
    [ChainId.Mainnet]: [
      // 'oneBTC',
      TokenName.ONE_BTC,
      // 'oneFIL',
      TokenName.ONE_FIL,
      // 'oneMPH',
      TokenName.ONE_MPH,
      // 'onePERL',
      TokenName.ONE_PERL,
      // 'oneDODO',
      TokenName.ONE_DODO,
      // 'oneUNI',
      TokenName.ONE_UNI,
      // 'oneOJA',
      TokenName.ONE_OJA,
      // 'oneWING'
      TokenName.ONE_WING,
      // BOOTusd
      TokenName.BOOT_USD
    ]
  }
};

export function getTreasuries(chainId: ChainId) {
  if (chainId in TreasuryManagement.TREASURIES) {
    return TreasuryManagement.TREASURIES[chainId];
  }
  return [];
}

export function getLegacyTreasuries(chainId: ChainId) {
  if (chainId in TreasuryManagement.LEGACY_TREASURIES) {
    return TreasuryManagement.LEGACY_TREASURIES[chainId];
  }
  return [];
}
