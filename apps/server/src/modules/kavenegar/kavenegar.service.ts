import {
  Injectable,
  Inject,
  Logger,
  HttpException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map, catchError } from 'rxjs';

import {
  KAVENEGAR_BACKOFF_BASE_MS,
  KAVENEGAR_FUSE_COOLDOWN_MS,
  KAVENEGAR_FUSE_ERROR_THRESHOLD,
  KAVENEGAR_MAX_RETRIES,
} from './kavenegar.consts';
import { KAVENEGAR_OPTIONS } from './kavenegar.consts';
import { KavenegarModuleOptions } from './kavenegar.options';

import {
  KavenegarResponse,
  SmsEntry,
  SendParams,
  SendArrayParams,
  StatusParams,
  StatusLocalParams,
  StatusByReceptorParams,
  SelectParams,
  SelectOutboxParams,
  LatestOutboxParams,
  CountOutboxParams,
  CancelParams,
  ReceiveParams,
  InboxPagedParams,
  BlockedListParams,
  CountInboxParams,
  LookupParams,
  TtsParams,
} from './kavenegar.types';

import { toCsv } from './kavenegar.util';
import { retryBackoff } from './errors/retry-operator';
import { KavenegarApiError, ProviderErrorPayload } from './errors/kavenegar.errors';
import { toNestHttpException } from './errors/error-map';
import { SoftFuse } from './errors/fuse';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class KavenegarService {
  private readonly logger = new Logger(KavenegarService.name);
  private readonly baseUrl: string;
  private readonly fuse = new SoftFuse(
    KAVENEGAR_FUSE_ERROR_THRESHOLD,
    KAVENEGAR_FUSE_COOLDOWN_MS,
  );

  constructor(
    private readonly http: HttpService,
    @Inject(KAVENEGAR_OPTIONS) private readonly opts: KavenegarModuleOptions,
  ) {
    this.baseUrl = (opts.baseUrl ?? 'https://api.kavenegar.com').replace(/\/$/, '');
  }

  async send(params: SendParams) {
    const body: SendParams = { ...params };
    if (!body.sender && this.opts.defaultSender) body.sender = this.opts.defaultSender;

    return this.post<SmsEntry[]>(
      this.endpoint('sms', 'send'),
      body,
      'sms.send',
    );
  }

  async sendArray(params: SendArrayParams) {
    return this.post<SmsEntry[]>(
      this.endpoint('sms', 'sendarray'),
      params,
      'sms.sendarray',
    );
  }

  async status(params: StatusParams) {
    const p = { messageid: toCsv(params.messageid) };
    return this.get<Array<Pick<SmsEntry, 'messageid' | 'status' | 'statustext'>>>(
      this.endpoint('sms', 'status'),
      p,
      'sms.status',
    );
  }

  async statusLocal(params: StatusLocalParams) {
    const p = { localid: toCsv(params.localid) };
    return this.get<Array<{ messageid: number; localid: string | number; status: number; statustext: string }>>(
      this.endpoint('sms', 'statuslocalmessageid'),
      p,
      'sms.statuslocal',
    );
  }

  async statusByReceptor(params: StatusByReceptorParams) {
    return this.get<Array<{ messageid: number; receptor: string; status: number; statustext: string }>>(
      this.endpoint('sms', 'statusbyreceptor'),
      params as any,
      'sms.statusByReceptor',
    );
  }

  async select(params: SelectParams) {
    const p = { messageid: toCsv(params.messageid) };
    return this.get<SmsEntry[]>(
      this.endpoint('sms', 'select'),
      p,
      'sms.select',
    );
  }

  async selectOutbox(params: SelectOutboxParams) {
    return this.get<SmsEntry[]>(
      this.endpoint('sms', 'selectoutbox'),
      params as any,
      'sms.selectOutbox',
    );
  }

  async latestOutbox(params: LatestOutboxParams = {}) {
    return this.get<SmsEntry[]>(
      this.endpoint('sms', 'latestoutbox'),
      params as any,
      'sms.latestOutbox',
    );
  }

  async countOutbox(params: CountOutboxParams) {
    return this.get<Array<{ startdate: number; enddate: number; sumpart: number; sumcount: number; cost: number }>>(
      this.endpoint('sms', 'countoutbox'),
      params as any,
      'sms.countOutbox',
    );
  }

  async cancel(params: CancelParams) {
    const p = { messageid: toCsv(params.messageid) };
    return this.get<Array<{ messageid: number; status: number; statustext: string }>>(
      this.endpoint('sms', 'cancel'),
      p,
      'sms.cancel',
    );
  }

  async receive(params: ReceiveParams) {
    return this.get<Array<{ messageid: number; message: string; sender: string; receptor: string; date: number }>>(
      this.endpoint('sms', 'receive'),
      params as any,
      'sms.receive',
    );
  }

  async inboxPaged(params: InboxPagedParams) {
    return this.get<
      Array<{ messageid: number; message: string; sender: string; receptor: string; date: number }>
    >(
      this.endpoint('sms', 'inboxpaged'),
      params as any,
      'sms.inboxPaged',
    );
  }

  async blockedList(params: BlockedListParams) {
    return this.get<Array<{ number: string; blockreason: number; date: number }>>(
      this.endpoint('Line', 'blocked/list'),
      params as any,
      'line.blockedList',
    );
  }

  async countInbox(params: CountInboxParams) {
    return this.get<Array<{ startdate: number; enddate: number; sumcount: number }>>(
      this.endpoint('sms', 'countinbox'),
      params as any,
      'sms.countInbox',
    );
  }

  async lookup(params: LookupParams) {
    return this.get<SmsEntry[]>(
      this.endpoint('verify', 'lookup'),
      params as any,
      'verify.lookup',
    );
  }

  async tts(params: TtsParams) {
    return this.post<SmsEntry[]>(
      this.endpoint('call', 'make/tts'),
      params as any,
      'call.tts',
    );
  }

  private endpoint(scope: string, method: string) {
    return `${this.baseUrl}/v1/${this.opts.apiKey}/${scope}/${method}.json`;
  }

  private async get<T>(
    url: string,
    params: Record<string, any> | undefined,
    op: string,
  ): Promise<T> {
    this.guardFuse();

    const reqId = this.makeReqId(op);
    try {
      const data = await firstValueFrom(
        this.http
          .get<KavenegarResponse<T>>(url, {
            params,
            headers: { 'X-Request-Id': reqId },
          })
          .pipe(
            retryBackoff(KAVENEGAR_MAX_RETRIES, KAVENEGAR_BACKOFF_BASE_MS),
            map((r) => this.unwrapOrThrow<T>(r.data, op, reqId)),
            catchError((err) => {
              throw this.wrapAxiosError(err, op, reqId);
            }),
          ),
      );

      this.fuse.onSuccess();
      return data;
    } catch (e: any) {
      this.fuse.onFailure();
      throw this.toNest(e);
    }
  }

  private async post<T>(
    url: string,
    body: Record<string, any> | undefined,
    op: string,
  ): Promise<T> {
    this.guardFuse();

    const reqId = this.makeReqId(op);
    try {
      const data = await firstValueFrom(
        this.http
          .post<KavenegarResponse<T>>(url, body, {
            headers: { 'X-Request-Id': reqId },
          })
          .pipe(
            retryBackoff(KAVENEGAR_MAX_RETRIES, KAVENEGAR_BACKOFF_BASE_MS),
            map((r) => this.unwrapOrThrow<T>(r.data, op, reqId)),
            catchError((err) => {
              throw this.wrapAxiosError(err, op, reqId);
            }),
          ),
      );

      this.fuse.onSuccess();
      return data;
    } catch (e: any) {
      this.fuse.onFailure();
      throw this.toNest(e);
    }
  }

  private unwrapOrThrow<T>(
    data: KavenegarResponse<T> | any,
    op: string,
    reqId: string,
  ): T {
    const status = data?.return?.status;
    if (Number(status) === 200 || Number(status) === 201) {
      // Provider uses { entries: T } on success
      return (data?.entries ?? data) as T;
    }
    const msg = data?.return?.message || 'Provider returned an error';
    throw new KavenegarApiError(msg, undefined, status, {
      op,
      reqId,
      body: this.redact(data),
    });
  }

  private wrapAxiosError(err: any, op: string, reqId: string): KavenegarApiError {
    const statusCode: number | undefined = err?.response?.status;
    const payload: ProviderErrorPayload = err?.response?.data ?? {};
    const providerCode =
      payload?.return?.status ??
      err?.code ?? // e.g., ECONNRESET, ETIMEDOUT
      statusCode;

    const providerMsg =
      payload?.return?.message ||
      err?.message ||
      'Transport error';

    this.logger.error(
      `[${op}] requestId=${reqId} status=${statusCode} providerCode=${providerCode} msg=${providerMsg}`,
    );

    return new KavenegarApiError(providerMsg, statusCode, providerCode, {
      op,
      reqId,
      payload: this.redact(payload),
    });
  }

  private toNest(err: any): HttpException {
    if (err instanceof HttpException) return err;
    if (err instanceof KavenegarApiError) return toNestHttpException(err);

    this.logger.error(`[unknown] ${err?.message ?? err}`);
    return new ServiceUnavailableException('Upstream SMS provider unavailable');
  }

  private guardFuse(): void {
    if (!this.fuse.canPass()) {
      throw new ServiceUnavailableException(
        'SMS provider temporarily unavailable (cooling down)',
      );
    }
  }

  private makeReqId(op: string): string {
    return `${op}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  }

  private redact(obj: any) {
    try {
      const clone = JSON.parse(JSON.stringify(obj ?? {}));
      if (clone?.receptor) clone.receptor = '[redacted]';
      if (clone?.message) clone.message = '[redacted]';
      if (clone?.sender) clone.sender = '[redacted]';
      if (clone?.entries) {
        clone.entries = '[redacted]';
      }
      return clone;
    } catch {
      return {};
    }
  }
}
