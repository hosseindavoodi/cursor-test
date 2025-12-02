export type CallbackDto = {
    token: string;
    acceptorId: string;
    responseCode: string;
    paymentId?: string;
    RequestId: string;
    sha256OfPan?: string;
    retrievalReferenceNumber?: string;
    amount: string;
    maskedPan?: string;
    systemTraceAuditNumber?: string;
}