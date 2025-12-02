import { Injectable, HttpException, HttpStatus, Logger, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import {
    BookFlightRequest,
    CancelTicketRequest,
    ConfirmPriceRequest,
    FlightBookDataRequest,
    IssueTicketRequest,
    PricingFlightRequest,
    RefundTicketRequest,
    RetryConfig,
    SearchFlightRequest,
    TokenRequest,
    TokenResponse,
    RefreshTokenRequest,
    MessageResponse,
} from './microtravel.dto';
import { time } from 'console';

export const DEFAULT_RETRY_CONFIG: RetryConfig = {
    maxRetries: 3,
    initialDelayMs: 1000,
    maxDelayMs: 10000,
    backoffMultiplier: 2,
    retryableStatusCodes: [408, 429, 500, 502, 503, 504],
    retryableErrorCodes: ['ECONNRESET', 'ETIMEDOUT', 'ENOTFOUND', 'ECONNREFUSED'],
};

@Injectable()
export class MicrotravelFlightService implements OnModuleInit {
    private readonly baseUrl: string;
    private accessToken?: string;
    private refreshTok?: string;
    private tokenType: string = 'Bearer';
    private tokenExpiresAt?: number;
    private readonly logger = new Logger(MicrotravelFlightService.name);
    private retryConfig: RetryConfig;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.baseUrl =
            this.configService.get<string>('MICROTRAVEL_API_URL') ||
            'https://api.microtravel.com';
        this.retryConfig = DEFAULT_RETRY_CONFIG;
    }

    onModuleInit() {
        this.logger.log('MicrotravelFlightService initializing, performing login...');
        this.loginWithConfig().catch((error) => {
            this.logger.error('Failed to authenticate with Microtravel API on module init', error.stack);
        }).then(() => {
            this.logger.log('MicrotravelFlightService initialized successfully');
        });
    }

    setAccessToken(token: string): void {
        this.accessToken = token;
    }

    setRetryConfig(config: Partial<RetryConfig>): void {
        this.retryConfig = { ...this.retryConfig, ...config };
    }

    async login(input: TokenRequest): Promise<TokenResponse> {
        try {
            const res = await this.makeRequestWithRetry<TokenResponse>(
                'post',
                `${this.baseUrl}/api/v1/Auth/token`,
                input,
                { auth: false, timeout: 15000 }, // important: no auth header for login
            );
            this.setTokens(res);
            return res;
        } catch (error) {
            this.handleError(error, 'login');
        }
    }

    async loginWithConfig(): Promise<TokenResponse> {
        const apiKey = this.configService.get<string>('MICROTRAVEL_API_KEY');
        const apiSecret = this.configService.get<string>('MICROTRAVEL_API_SECRET');
        if (!apiKey || !apiSecret) {
            throw new HttpException(
                'Missing MICROTRAVEL_API_KEY or MICROTRAVEL_API_SECRET',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
        return this.login({ apiKey, apiSecret });
    }

    async refresh(refreshToken?: string): Promise<TokenResponse> {
        const token = refreshToken || this.refreshTok;

        if (!token) {
            this.logger.warn('No refresh token available. Attempting loginWithConfig()...');
            const res = await this.loginWithConfig();
            return res;
        }

        try {
            const res = await this.makeRequestWithRetry<TokenResponse>(
                'post',
                `${this.baseUrl}/api/v1/Auth/refresh`,
                { refreshToken: token } as RefreshTokenRequest,
                { auth: false, timeout: 15000 }, // important: no auth header for refresh
            );
            this.setTokens(res);
            return res;
        } catch (error: any) {
            const status = error?.response?.status;

            if (status === 401) {
                this.logger.warn(
                    'Refresh token returned 401. Clearing tokens and attempting fresh loginWithConfig()...',
                );
                this.clearTokens();

                const res = await this.loginWithConfig();
                return res;
            }

            this.logger.error('Refresh token failed. Clearing tokens.', error?.stack);
            this.clearTokens();
            this.handleError(error, 'refresh');
        }
    }


    async revoke(refreshToken?: string): Promise<MessageResponse> {
        const token = refreshToken || this.refreshTok;
        if (!token) {
            throw new HttpException('No refresh token available', HttpStatus.BAD_REQUEST);
        }
        try {
            const res = await this.makeRequestWithRetry<MessageResponse>(
                'post',
                `${this.baseUrl}/api/v1/Auth/revoke`,
                { refreshToken: token },
                { auth: false, timeout: 15000 },
            );
            this.clearTokens();
            return res;
        } catch (error) {
            this.handleError(error, 'revoke');
        }
    }

    async searchFlight(request: SearchFlightRequest): Promise<any> {
        try {
            // Step 1: Flight Search
            // Request body is already shaped like the documentation
            return await this.makeRequestWithRetry(
                'post',
                `${this.baseUrl}/api/v1/searchflight`,
                request,
                { auth: true, timeout: 20000 }
            );
        } catch (error) {
            this.handleError(error, 'searchFlight');
        }
    }


    async pricingFlight(request: PricingFlightRequest): Promise<any> {
        try {
            return await this.makeRequestWithRetry(
                'post',
                `${this.baseUrl}/api/v1/PricingFlight`,
                request,
            );
        } catch (error) {
            this.handleError(error, 'pricingFlight');
        }
    }

    async confirmPrice(request: ConfirmPriceRequest): Promise<any> {
        try {
            const body = {
                Data: request.data,
            };

            return await this.makeRequestWithRetry(
                'post',
                `${this.baseUrl}/api/v1/confirmprice`,
                body,
            );
        } catch (error) {
            this.handleError(error, 'confirmPrice');
        }
    }


    async bookFlight(request: BookFlightRequest): Promise<any> {
        try {
            const body: any = {
                data: request.data,
            };

            if (request.captchaCode !== undefined) {
                body.CaptchaCode = request.captchaCode;
            }

            if (request.requestedId) {
                body.RequestedId = request.requestedId;
            }

            return await this.makeRequestWithRetry(
                'post',
                `${this.baseUrl}/api/v1/bookflight`,
                body,
            );
        } catch (error) {
            this.handleError(error, 'bookFlight');
        }
    }

    async issueTicket(request: IssueTicketRequest): Promise<any> {
        try {
            const body = {
                Provider: request.provider,
                PNRId: request.pnrId,
                RequestedId: request.requestedId,
            };

            return await this.makeRequestWithRetry(
                'post',
                `${this.baseUrl}/api/v1/issueticket`,
                body,
            );
        } catch (error) {
            this.handleError(error, 'issueTicket');
        }
    }


    async cancelBooking(request: CancelTicketRequest): Promise<any> {
        try {
            return await this.makeRequestWithRetry<any>(
                'post',
                `${this.baseUrl}/api/v1/CancelBook`,
                request,
            );
        } catch (error) {
            this.handleError(error, 'cancelBooking');
        }
    }

    async refundFlight(request: RefundTicketRequest): Promise<any> {
        try {
            return await this.makeRequestWithRetry(
                'post',
                `${this.baseUrl}/api/v1/RefundFlight`,
                request,
            );
        } catch (error) {
            this.handleError(error, 'refundFlight');
        }
    }

    async getFlightBookStatus(request: FlightBookDataRequest): Promise<any> {
        try {
            return await this.makeRequestWithRetry(
                'post',
                `${this.baseUrl}/api/v1/FlightBookStatus`,
                request,
            );
        } catch (error) {
            this.handleError(error, 'getFlightBookStatus');
        }
    }

    private getHeaders() {
        if (!this.accessToken) {
            throw new HttpException('Authentication token not set', HttpStatus.UNAUTHORIZED);
        }
        return {
            Authorization: `${this.tokenType || 'Bearer'} ${this.accessToken}`,
            'Content-Type': 'application/json',
        };
    }

    private baseHeaders() {
        return { 'Content-Type': 'application/json' };
    }

    private isRetriableError(error: any): boolean {
        if (error.code && this.retryConfig.retryableErrorCodes?.includes(error.code)) return true;
        if (error.response?.status && this.retryConfig.retryableStatusCodes?.includes(error.response.status)) return true;
        if (error.response?.status === 429) return true;
        return false;
    }

    private calculateBackoffDelay(attemptNumber: number): number {
        const delay = this.retryConfig.initialDelayMs * Math.pow(this.retryConfig.backoffMultiplier, attemptNumber);
        return Math.min(delay, this.retryConfig.maxDelayMs);
    }

    private async makeRequestWithRetry<T>(
        method: 'get' | 'post' | 'put' | 'delete',
        url: string,
        data?: any,
        opts: { auth?: boolean, timeout: number } = { auth: true, timeout: 10000 },
    ): Promise<T> {
        let lastError: any;
        let didAuthRefresh = false;

        for (let attempt = 0; attempt <= this.retryConfig.maxRetries; attempt++) {
            try {
                const headers = opts.auth !== false ? this.getHeaders() : this.baseHeaders();
                const response: AxiosResponse<T> = await firstValueFrom(
                    this.httpService[method](url, data, { headers, timeout: opts.timeout }),
                );

                if (attempt > 0) {
                    this.logger.log(`Request succeeded after ${attempt} retries: ${method.toUpperCase()} ${url}`);
                }

                return response.data;
            } catch (error) {
                lastError = error;

                const status = error?.response?.status;
                if (opts.auth !== false && status === 401 && this.refreshTok && !didAuthRefresh) {
                    try {
                        this.logger.warn(`401 received for ${method.toUpperCase()} ${url}. Attempting token refresh...`);
                        await this.refresh();
                        didAuthRefresh = true;
                        continue;
                    } catch (refreshErr) {
                        this.logger.error('Token refresh failed', (refreshErr as any)?.stack);
                    }
                }

                if (!this.isRetriableError(error) || attempt === this.retryConfig.maxRetries) {
                    if (!this.isRetriableError(error)) {
                        this.logger.error(
                            `Non-retriable error on ${method.toUpperCase()} ${url}: ${error.message}`,
                            error.stack,
                        );
                    } else {
                        this.logger.error(
                            `Max retries (${this.retryConfig.maxRetries}) exceeded for ${method.toUpperCase()} ${url}`,
                            error.stack,
                        );
                    }
                    break;
                }

                const delayMs = this.calculateBackoffDelay(attempt);
                this.logger.warn(
                    `Retriable error on ${method.toUpperCase()} ${url} (attempt ${attempt + 1}/${this.retryConfig.maxRetries + 1}). ` +
                    `Status: ${status || 'N/A'}, Code: ${error.code || 'N/A'}. ` +
                    `Retrying in ${delayMs}ms...`,
                );
                await new Promise((resolve) => setTimeout(resolve, delayMs));
            }
        }

        throw lastError;
    }

    private setTokens(res: TokenResponse) {
        this.accessToken = res.accessToken || undefined;
        this.refreshTok = res.refreshToken || undefined;
        this.tokenType = res.tokenType || 'Bearer';
        if (res.expiresIn && Number.isFinite(res.expiresIn)) {
            this.tokenExpiresAt = Date.now() + res.expiresIn * 1000;
        } else {
            this.tokenExpiresAt = undefined;
        }
    }

    private clearTokens() {
        this.accessToken = undefined;
        this.refreshTok = undefined;
        this.tokenType = 'Bearer';
        this.tokenExpiresAt = undefined;
    }

    private handleError(error: any, operation: string): never {
        const status = error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
        const message = error.response?.data?.message || error.message || `Failed to ${operation}`;
        throw new HttpException(
            {
                statusCode: status,
                message,
                error: error.response?.data || error.message,
                operation,
            },
            status,
        );
    }
}
