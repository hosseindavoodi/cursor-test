export type CreateTokenResult = {
  baseUrl: string; // where to redirect
  token: string;   // gateway session/id
  providerRef?: string; // optional pre-ref id
  payload?: Record<string, any>; // anything the FE needs to post
};

export type CreateToken = {
  paymentLegId: string;
  amount: number;
  currency: string;
  orderId?: number;
  userId: string;
  returnUrl?: string;
  extra?: Record<string, any>;
}

export type ValidateResult = {
  ok: boolean;
  amount: number;
  currency: string;
  providerRef: string;
  message?: string;
};

export interface PaymentGateway {
  code: string;

  createToken(params: CreateToken): Promise<CreateTokenResult>;

  validate(payload: Record<string, any>): Promise<ValidateResult>;

  refund?(params: {
    paymentLegId: string;
    amount: number;
    currency: string;
    externalRef?: string;
  }): Promise<{
    ok: boolean;
    externalRef?: string;
    message?: string
  }>;
}
