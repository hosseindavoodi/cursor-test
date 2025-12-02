import { HttpClient } from '../http/http.js';
import type { TokenRequest, TokenResponse, RefreshTokenRequest, RevokeTokenRequest } from '../types/auth.js';

export class AuthClient {
  constructor(private http: HttpClient) {}

  token(req: TokenRequest): Promise<TokenResponse> {
    return this.http.post<TokenRequest, TokenResponse>('/api/v1/Auth/token', req);
  }
  refresh(req: RefreshTokenRequest): Promise<TokenResponse> {
    return this.http.post<RefreshTokenRequest, TokenResponse>('/api/v1/Auth/refresh', req);
  }
  revoke(req: RevokeTokenRequest): Promise<{ message?: string; timestamp?: string; }> {
    return this.http.post<RevokeTokenRequest, { message?: string; timestamp?: string; }>('/api/v1/Auth/revoke', req);
  }
}
