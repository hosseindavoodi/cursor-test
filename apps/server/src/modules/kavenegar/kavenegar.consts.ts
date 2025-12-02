export const KAVENEGAR_HTTP_TIMEOUT_MS = 8000; // per request timeout
export const KAVENEGAR_MAX_RETRIES = 3;        // transient retries
export const KAVENEGAR_BACKOFF_BASE_MS = 300;  // exponential base
export const KAVENEGAR_FUSE_ERROR_THRESHOLD = 6;  // consecutive failures
export const KAVENEGAR_FUSE_COOLDOWN_MS = 20_000; // open period
export const KAVENEGAR_OPTIONS = 'KAVENEGAR_OPTIONS'; // DI token for module options