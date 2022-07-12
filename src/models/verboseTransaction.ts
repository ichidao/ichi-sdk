export type VerboseTransaction = {
  id: string;
  date: Date;
  oneTokenAmount: number;
  scarceTokenAmount: number;
  price: number;
  account: string;
  oneTokenTotalAmount: number;
  scarceTokenTotalAmount: number;
  oneTokenTotalAmountBeforeEvent: number;
  scarceTokenTotalAmountBeforeEvent: number;
  type: 'deposit' | 'withdrawal';
};
