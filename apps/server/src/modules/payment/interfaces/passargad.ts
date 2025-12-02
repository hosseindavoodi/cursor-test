export interface GetAuthTokenRequestSchema {
  username: string;
  password: string;
}

export interface GetAuthTokenResponseSchema {
  requestMsg: string;
  resultCode: number;
  token: string;
  username: string;
  firstName: string;
  lastName: string;
  userId: string;
  roles: { authority: string }[];
}

export interface PurchaseRequestSchema {
  invoice: string;
  invoiceDate: string;
  amount: number;
  callbackApi: string;
  serviceCode: string;
  serviceType: 'PURCHASE';
  terminalNumber: string;
  mobileNumber?: string;
  description?: string;
  payerMail?: string;
  payerName?: string;
  nationalCode?: string; // optional or mandatory depends on contract with bank
  pans?: string;
}
