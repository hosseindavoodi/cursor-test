import { Logger } from "@nestjs/common";
import { GatewayAdapter, GatewaySession, GatewayVerify } from "../payment.service";
import { IkcService } from "../../ikc/ikc.service";
import { CallbackDto } from "../../ikc/dto/callback.dto";

export class IKCAdapter implements GatewayAdapter {
    private readonly logger = new Logger(IKCAdapter.name);

    constructor(
        private readonly ikc: IkcService,
    ) { }

    code(): string {
        return 'ikc';
    }

    async createSession(args: { amountIRR: number; orderRef: string; returnUrl?: string; callbackUrl?: string; }): Promise<GatewaySession> {
        const { amountIRR, orderRef, callbackUrl } = args;
        this.logger.log(`Creating IKC session for orderRef=${orderRef} amountIRR=${amountIRR} callbackUrl=${callbackUrl}`);

        let now = Date.now() / 1000
        this.logger.log(`current timestamp ${now}`)

        const res = await this.ikc.makeToken({
            amount: amountIRR,
            requestId: orderRef,
            revertUri: callbackUrl,
            requestTimestamp: Math.floor(now),
            transactionType: "Purchase",
            paymentId: orderRef
        });

        return {
            body: {
                tokenIdentity: res.token,
            },
            token: res.token,
            redirectUrl: this.ikc.redirectUrl(),
        }
    }

    async verifyCallback(payload: any): Promise<GatewayVerify> {
        let callbackPayload = payload as CallbackDto;
        this.logger.log(`payload=${callbackPayload}`)

        if (callbackPayload.responseCode !== '00') {
            this.logger.warn(`IKC callback with non-ok responseCode: ${callbackPayload.responseCode}`);
            return {
                ok: false,
                message: `Response code: ${callbackPayload.responseCode}`,
                authority: '',
                paidAmountIRR: 0,
            };
        }

        this.logger.log(`Verifying IKC callback: ${JSON.stringify(callbackPayload)}`);
        const res = await this.ikc.confirmPurchase({
            retrievalReferenceNumber: callbackPayload.retrievalReferenceNumber,
            systemTraceAuditNumber: callbackPayload.systemTraceAuditNumber,
            tokenIdentity: callbackPayload.token,
        });
        return {
            ok: true,
            message: "success",
            authority: callbackPayload.token,
            externalRef: callbackPayload.token,
            paidAmountIRR: Number(res.amount)
        };
    }
}