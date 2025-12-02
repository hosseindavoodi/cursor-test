import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosHeaders } from 'axios';
import { ApiError } from '../common/errors.js';
import { InMemoryTokenStore, Tokens } from './token-store.js';

export type RefreshFn = (refreshToken: string) => Promise<Tokens>;

export type RetryOptions = {
  retries?: number;
  backoffFactor?: number;
  minDelayMs?: number;
  maxDelayMs?: number;
  jitter?: boolean;
  retryOnStatus?: (status?: number) => boolean;
};

export type RateLimitOptions = {
  maxRPS?: number;
  maxConcurrent?: number;
};

export type HttpClientOptions = {
  baseURL: string;
  tokenStore?: InMemoryTokenStore;
  onRefresh?: RefreshFn;
  timeoutMs?: number;
  defaultHeaders?: Record<string, string>;
  retry?: RetryOptions;
  rateLimit?: RateLimitOptions;
};

function sleep(ms: number) { return new Promise(res => setTimeout(res, ms)); }

export class HttpClient {
  private axios: AxiosInstance;
  private tokenStore: InMemoryTokenStore;
  private refreshing?: Promise<void>;

  private queue: (() => void)[] = [];
  private inFlight = 0;
  private lastIssuedAt = 0;

  private retry: Required<RetryOptions>;
  private rate: Required<RateLimitOptions>;

  constructor(private opts: HttpClientOptions) {
    this.tokenStore = opts.tokenStore ?? new InMemoryTokenStore();
    this.retry = {
      retries: opts.retry?.retries ?? 3,
      backoffFactor: opts.retry?.backoffFactor ?? 2,
      minDelayMs: opts.retry?.minDelayMs ?? 250,
      maxDelayMs: opts.retry?.maxDelayMs ?? 8000,
      jitter: opts.retry?.jitter ?? true,
      retryOnStatus: opts.retry?.retryOnStatus ?? ((s?: number) => !!s && (s === 429 || (s >= 500 && s < 600))),
    } as Required<RetryOptions>;

    this.rate = {
      maxRPS: opts.rateLimit?.maxRPS ?? 0,
      maxConcurrent: opts.rateLimit?.maxConcurrent ?? 0,
    } as Required<RateLimitOptions>;

    this.axios = axios.create({
      baseURL: opts.baseURL.replace(/\/$/, ''),
      timeout: opts.timeoutMs ?? 30_000,
      headers: { 'Content-Type': 'application/json', ...(opts.defaultHeaders ?? {}) },
      transitional: { clarifyTimeoutError: true },
    });

    this.axios.interceptors.request.use(async (config) => {
      const tokens = this.tokenStore.get();
      if (tokens?.accessToken) {
        config.headers = config.headers ?? AxiosHeaders.from({});
        config.headers['Authorization'] = `${tokens.tokenType ?? 'Bearer'} ${tokens.accessToken}`;
      }
      return config;
    });

    this.axios.interceptors.response.use(
      (r) => r,
      async (error: AxiosError) => {
        const original: AxiosRequestConfig & { _retry?: boolean } = (error.config || {}) as any;
        const status = error?.response?.status;
        if (status === 401 && !original?._retry && this.opts.onRefresh) {
          const current = this.tokenStore.get();
          if (current?.refreshToken) {
            original._retry = true;
            if (!this.refreshing) {
              this.refreshing = (async () => {
                try {
                  const tokens = await this.opts.onRefresh!(current.refreshToken!);
                  this.tokenStore.set(tokens);
                } finally {
                  this.refreshing = undefined;
                }
              })();
            }
            await this.refreshing;
            return this.axios(original);
          }
        }
        throw error;
      }
    );
  }

  setTokens(tokens?: Tokens) { this.tokenStore.set(tokens); }
  getTokens(): Tokens | undefined { return this.tokenStore.get(); }

  private schedule<T>(fn: () => Promise<T>): Promise<T> {
    const { maxRPS, maxConcurrent } = this.rate;
    if (!maxRPS && !maxConcurrent) return fn();

    return new Promise<T>((resolve, reject) => {
      const task = async () => {
        try {
          // Concurrency window
          while (maxConcurrent && this.inFlight >= maxConcurrent) await sleep(5);
          this.inFlight++;

          // RPS gate
          if (maxRPS) {
            const minGap = 1000 / maxRPS;
            const now = Date.now();
            const wait = Math.max(0, this.lastIssuedAt + minGap - now);
            if (wait > 0) await sleep(wait);
            this.lastIssuedAt = Date.now();
          }

          const result = await fn();
          resolve(result);
        } catch (e) { reject(e); }
        finally {
          this.inFlight--;
          const next = this.queue.shift();
          next && next();
        }
      };
      this.queue.push(task);
      if (this.inFlight < (maxConcurrent || Infinity)) {
        const next = this.queue.shift();
        next && next();
      }
    });
  }

  private async requestWithRetry<T>(doRequest: () => Promise<T>, attempt = 0): Promise<T> {
    try {
      return await doRequest();
    } catch (err: any) {
      const status = err?.response?.status;
      const shouldRetry = this.retry.retryOnStatus(status) && attempt < this.retry.retries;
      if (!shouldRetry) {
        const msg = err?.response?.data?.message || err?.message || 'Request failed';
        const code = err?.response?.data?.error || err?.code;
        const details = err?.response?.data;
        throw new ApiError(msg, status, code, details);
      }
      const base = Math.min(this.retry.maxDelayMs, this.retry.minDelayMs * (this.retry.backoffFactor ** attempt));
      const jitter = this.retry.jitter ? Math.random() * base * 0.25 : 0;
      const delay = Math.min(this.retry.maxDelayMs, base + jitter);
      await sleep(delay);
      return this.requestWithRetry(doRequest, attempt + 1);
    }
  }

  async post<TReq, TRes>(url: string, data: TReq): Promise<TRes> {
    const exec = () => this.axios.post(url, data).then(r => r.data as TRes);
    return this.schedule(() => this.requestWithRetry(exec));
  }
}
