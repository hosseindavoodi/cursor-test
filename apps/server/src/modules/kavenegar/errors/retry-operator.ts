// src/kavenegar/errors/retry.operator.ts
import { Observable, retryWhen, scan, delayWhen, of, delay } from 'rxjs';

export function retryBackoff(maxRetries: number, baseDelayMs: number) {
  return <T>(src: Observable<T>) =>
    src.pipe(
      retryWhen((errors) =>
        errors.pipe(
          scan((acc, err: any) => {
            const attempt = acc + 1;
            if (attempt > maxRetries) throw err;
            const retryAfterHeader =
              err?.response?.headers?.['retry-after'] ||
              err?.response?.headers?.['Retry-After'];
            const retryAfterMs = retryAfterHeader ? Number(retryAfterHeader) * 1000 : null;

            const backoff = retryAfterMs ?? Math.min(10_000, baseDelayMs * 2 ** (attempt - 1));
            return attempt | (backoff as any);
          }, 0 as number),
          delayWhen((v: any) => of(null).pipe(delay(typeof v === 'number' ? v : baseDelayMs))),
        ),
      ),
    );
}
