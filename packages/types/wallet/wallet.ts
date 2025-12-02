export type WalletBalanceResponse = {
  balance: number;
};

export type WalletBalanceRequestKeys = {
  currency: string;
};

export type WalletIncreaseRequest = {
  amount: number;
  gatewayCode: string;
};

export type WalletIncreaseResponse = {
  body: object;
  redirectUrl: string;
};
