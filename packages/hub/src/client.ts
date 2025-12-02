import { HttpClient, HttpClientOptions } from './http/http.js';
import { InMemoryTokenStore, Tokens } from './http/token-store.js';
import { AuthClient } from './clients/auth.client.js';
import { FlightClient } from './clients/flight.client.js';
import { HotelClient } from './clients/hotel.client.js';
import type { TokenResponse } from './types/auth.js';

export interface MicrotravelClientOptions extends Omit<HttpClientOptions, 'tokenStore' | 'onRefresh'> {
  onRefresh?: HttpClientOptions['onRefresh'];
}

export class MicrotravelClient {
  private http: HttpClient;
  private tokenStore = new InMemoryTokenStore();

  auth: AuthClient;
  flight: FlightClient;
  hotel: HotelClient;

  constructor(private opts: MicrotravelClientOptions) {
    this.http = new HttpClient({
      ...opts,
      tokenStore: this.tokenStore,
      onRefresh: opts.onRefresh ?? (async (refreshToken: string) => {
        const res = await this.auth.refresh({ refreshToken });
        return {
          accessToken: res.accessToken,
          refreshToken: res.refreshToken ?? refreshToken,
          tokenType: res.tokenType ?? 'Bearer',
          expiresIn: res.expiresIn,
        };
      })
    });

    this.auth = new AuthClient(this.http);
    this.flight = new FlightClient(this.http);
    this.hotel = new HotelClient(this.http);
  }

  setTokens(tokens?: Tokens) { this.http.setTokens(tokens); }
  setTokensFromAuth(res: TokenResponse) {
    this.setTokens({
      accessToken: res.accessToken,
      refreshToken: res.refreshToken,
      tokenType: res.tokenType ?? 'Bearer',
      expiresIn: res.expiresIn,
    });
  }
}
