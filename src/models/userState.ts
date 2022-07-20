export type UserStateInVault = {
  isGone: boolean;
  sharesIn: number;
  sharesOut: number;
  sharesCurrent: number;
  transactionsToSkip: string[];
  transactionsToKeep: string[];
};
