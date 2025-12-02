export type Tokens = {
  accessToken?: string;
  refreshToken?: string;
  tokenType?: string;
  expiresIn?: number;
};

export class InMemoryTokenStore {
  private tokens?: Tokens;
  set(tokens?: Tokens) { this.tokens = tokens; }
  get(): Tokens | undefined { return this.tokens; }
}
