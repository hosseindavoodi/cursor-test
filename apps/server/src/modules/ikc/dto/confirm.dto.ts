export class ConfirmDto {
    /** Values you got back in redirect response or inquiry */
    tokenIdentity: string; // token from make
    retrievalReferenceNumber: string; // 12
    systemTraceAuditNumber: string; // 6
}

export type TransactionResponse = {
    responseCode: string;
    systemTraceAuditNumber?: string;
    retrievalReferenceNumber?: string;
    transactionDate: string; // yyyyMMdd
    transactionTime: string; // HHmmss
    processCode?: string;
    billType?: string;
    billId?: string;
    paymentId?: string;
    amount: string; // n..12
};