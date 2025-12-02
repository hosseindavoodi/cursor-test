import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { IKC_CONFIG, IkcConfig } from './ikc.tokens';
import { MakeTokenDto, MakeTokenResult } from './dto/tokenization.dto';
import { ConfirmDto, TransactionResponse } from './dto/confirm.dto';
import { InquiryDto, InquiryTransaction } from './dto/inquiry.dto';
import { buildBaseHexString, makeAuthenticationEnvelopeHex } from './crypto/digital-envelope.util';
import * as crypto from 'crypto';


@Injectable()
export class IkcService {
    private readonly logger = new Logger(IkcService.name)

    private readonly endpoints = {
        make: '/api/v3/tokenization/make',
        // makeSpecial: '/api/v3/tokenization/makeSpecial',
        confirmPurchase: '/api/v3/confirmation/purchase',
        // confirmBill: '/api/v3/confirmation/bill',
        reversePurchase: '/api/v3/confirmation/reversePurchase',
        inquirySingle: '/api/v3/inquiry/single',
        uiIndex: '/iuiv3/IPG/Index',
        // asanUiIndex: '/aiuiv3/IPG/Index',
    } as const;

    constructor(
        private readonly http: HttpService,
        @Inject(IKC_CONFIG) private readonly cfg: IkcConfig,
    ) { }

    private url(path: string) { return this.cfg.baseUrl.replace(/\/$/, '') + path; }

    redirectUrl(): string {
        return this.url(this.endpoints.uiIndex);
    }

    private buildAuthEnvelope(dto: MakeTokenDto): { authenticationEnvelope: { iv: string; data: string }; request: any } {
        const baseHex = buildBaseHexString({
            terminalId: this.cfg.terminalId,
            passPhrase: this.cfg.passPhrase,
            amount: dto.amount,
        });


        const aesKeyHex = (this.cfg.aesKeyHex ?? crypto.randomBytes(16).toString('hex')).toUpperCase();
        const aesIvHex = (this.cfg.aesIvHex ?? crypto.randomBytes(16).toString('hex')).toUpperCase();


        const { dataHex, ivHex } = makeAuthenticationEnvelopeHex({
            baseStringHex: baseHex,
            aesKeyHex,
            aesIvHex,
            rsaPublicKeyPem: this.cfg.rsaPublicKeyPem,
        });


        const request = {
            transactionType: dto.transactionType || 'Purchase',
            terminalId: this.cfg.terminalId,
            acceptorId: this.cfg.acceptorId,
            amount: dto.amount,
            revertUri: dto.revertUri,
            requestId: dto.requestId,
            requestTimestamp: dto.requestTimestamp ?? Math.floor(Date.now() / 1000),
            ...(dto.paymentId ? { paymentId: dto.paymentId } : {}),
            ...(dto.cmsPreservationId ? { cmsPreservationId: dto.cmsPreservationId } : {}),
            ...(dto.billInfo ? { billInfo: dto.billInfo } : {}),
            ...(dto.multiplexParameters ? { multiplexParameters: dto.multiplexParameters } : {}),
            ...(dto.asanShp ? { asanShp: dto.asanShp } : {}),
            ...(dto.additionalParameters ? { additionalParameters: dto.additionalParameters } : {}),
            ...(dto.isbehdadtransaction !== undefined ? { isbehdadtransaction: dto.isbehdadtransaction } : {}),
        };


        return { authenticationEnvelope: { iv: ivHex, data: dataHex }, request };
    }

    async makeToken(dto: MakeTokenDto): Promise<MakeTokenResult> {
        const payload = this.buildAuthEnvelope(dto);
        const { data } = await firstValueFrom(
            this.http.post(this.url(this.endpoints.make), payload, { headers: this.cfg.defaultHeaders })
        );
        this.assertOk(data);
        return data.result as MakeTokenResult;
    }

    // async makeSpecialToken(dto: MakeTokenDto): Promise<MakeTokenResult> {
    //     const payload = this.buildAuthEnvelope(dto);
    //     const { data } = await firstValueFrom(
    //         this.http.post(this.url(this.endpoints.makeSpecial), payload, { headers: this.cfg.defaultHeaders })
    //     );
    //     this.assertOk(data);
    //     return data.result as MakeTokenResult;
    // }

    async confirmPurchase(input: ConfirmDto): Promise<TransactionResponse> {
        this.logger.log(`input=${input}`)
        const body = {
            terminalId: this.cfg.terminalId,
            retrievalReferenceNumber: input.retrievalReferenceNumber,
            systemTraceAuditNumber: input.systemTraceAuditNumber,
            tokenIdentity: input.tokenIdentity,
        };
        this.logger.log(`body=${body}`)
        const { data } = await firstValueFrom(
            this.http.post(this.url(this.endpoints.confirmPurchase), body, { headers: this.cfg.defaultHeaders })
        );
        this.logger.log(`data=${data}`)
        this.assertOk(data);
        return data.result as TransactionResponse;
    }

    // async confirmBill(input: ConfirmDto): Promise<TransactionResponse> {
    //     const body = {
    //         terminalId: this.cfg.terminalId,
    //         retrievalReferenceNumber: input.retrievalReferenceNumber,
    //         systemTraceAuditNumber: input.systemTraceAuditNumber,
    //         tokenIdentity: input.tokenIdentity,
    //     };
    //     const { data } = await firstValueFrom(
    //         this.http.post(this.url(this.endpoints.confirmBill), body, { headers: this.cfg.defaultHeaders })
    //     );
    //     this.assertOk(data);
    //     return data.result as TransactionResponse;
    // }

    async reversePurchase(input: ConfirmDto): Promise<TransactionResponse> {
        const body = {
            terminalId: this.cfg.terminalId,
            retrievalReferenceNumber: input.retrievalReferenceNumber,
            systemTraceAuditNumber: input.systemTraceAuditNumber,
            tokenIdentity: input.tokenIdentity,
        };
        const { data } = await firstValueFrom(
            this.http.post(this.url(this.endpoints.reversePurchase), body, { headers: this.cfg.defaultHeaders })
        );
        this.assertOk(data);
        return data.result as TransactionResponse;
    }

    async inquirySingle(input: InquiryDto): Promise<InquiryTransaction[]> {
        const body: any = {
            passPhrase: this.cfg.passPhrase,
            terminalId: this.cfg.terminalId,
            findOption: input.findOption,
        };
        if (input.findOption === 1) body.retrievalReferenceNumber = input.retrievalReferenceNumber;
        if (input.findOption === 2) body.tokenIdentity = input.tokenIdentity;
        if (input.findOption === 3) body.requestId = input.requestId;

        const { data } = await firstValueFrom(
            this.http.post(this.url(this.endpoints.inquirySingle), body, { headers: this.cfg.defaultHeaders })
        );
        this.assertOk(data);
        const res = data.result;
        return Array.isArray(res) ? res : [res];
    }

    private assertOk(data: any) {
        if (!data || data.status !== true || data.responseCode !== '00') {
            const code = data?.responseCode ?? '??';
            const desc = data?.description ?? 'Unknown error';
            throw new Error(`IKC error ${code}: ${desc}`);
        }
    }
}
