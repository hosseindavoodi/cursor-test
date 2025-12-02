// src/kavenegar/errors/kavenegar.errors.ts
export type ProviderErrorPayload = {
  // Kavenegar usually returns { return: { status: <code>, message: <string> }, entries?: any[] }
  return?: { status?: number; message?: string };
  entries?: unknown;
  // Some transport-level errors:
  error?: { code?: string | number; message?: string };
};

export class KavenegarApiError extends Error {
  constructor(
    message: string,
    readonly statusCode: number | undefined,
    readonly providerCode: number | string | undefined,
    readonly meta?: Record<string, any>,
  ) {
    super(message);
  }
}
