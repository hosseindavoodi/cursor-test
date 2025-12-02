export class InquiryDto {
    /** one of 1 (by RR Number), 2 (by token), 3 (by requestId) */
    findOption: 1 | 2 | 3;
    tokenIdentity?: string;
    retrievalReferenceNumber?: string;
    requestId?: string;
}

export type InquiryTransaction = {
    tokenIdentity: string;
    terminalId: string;
    acceptorId: string;
    retrievalReferenceNumber: string;
    systemTraceAuditNumber: string;
    amount: number;
    transactionDate: string; // yyyyMMdd
    transactionTime: string; // HHmmss
    requestId: string;
    paymentId?: string;
    isMultiplex?: boolean;
    isVerified?: boolean;
    isReversed?: boolean;
    maskedPan: string;
    sha256OfPan: string;
    responseCode: string;
    transactionType: string;
};