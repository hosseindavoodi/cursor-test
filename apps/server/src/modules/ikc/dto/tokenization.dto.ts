export type MultiplexParameter = { iban: string; amount: number };
export type AsanShp = { prepaymentAmount: number; loanAmount: number; loanCount: number };

export class MakeTokenDto {
    /** Purchase | Bill | AsanShpWPP | AsanShpWPPDrug | IsacoWPP | SpecialBill */
    transactionType: string;
    amount: number; // rial
    revertUri: string; // merchant return URL
    requestId: string; // <=20 chars
    requestTimestamp: number; // epoch seconds
    paymentId?: string; // optional, not allowed for Bill unless SpecialBill
    cmsPreservationId?: string; // customer profile identifier (mobile/email per doc)
    billInfo?: { billId: string; billPaymentId: string };
    multiplexParameters?: MultiplexParameter[] | null; // for split-payments
    asanShp?: AsanShp; // credit purchase options
    additionalParameters?: { Key: string; Value: string }[]; // e.g., nationalId / encNationalId
    isbehdadtransaction?: boolean; // per spec
}

export type MakeTokenResult = {
    token: string;
    initiateTimestamp: number;
    expiryTimestamp: number;
    transactionType: string;
    billInfo?: { billId: string | null; billPaymentId: string | null };
};
