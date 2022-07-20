export enum TreasuryName {
  TREASURIES = 'TREASURIES',
  LEGACY_TREASURIES = 'LEGACY_TREASURIES'
}

export type TreasuryNames = keyof typeof TreasuryName;
