export interface TokenRequest { apiKey: string; apiSecret: string; }
export interface TokenResponse { accessToken?: string; refreshToken?: string; tokenType?: string; expiresIn?: number; }

export interface RefreshTokenRequest { refreshToken: string; }
export interface RevokeTokenRequest { refreshToken: string; }

export interface ErrorResponse { error?: string; message?: string; timestamp?: string; }
export interface MessageResponse { message?: string; timestamp?: string; }
