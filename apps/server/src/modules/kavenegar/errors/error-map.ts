// src/kavenegar/errors/error-map.ts
import { HttpException, BadRequestException, UnauthorizedException, ForbiddenException, NotFoundException, ServiceUnavailableException } from '@nestjs/common';
import { KavenegarApiError } from './kavenegar.errors';

export function toNestHttpException(err: KavenegarApiError): HttpException {
  const code = Number(err.providerCode);
  const msg = err.message || 'Kavenegar error';
  // Map common Kavenegar/HTTP patterns to Nest exceptions
  if (code === 401 || err.statusCode === 401) return new UnauthorizedException(msg);
  if (code === 403 || err.statusCode === 403) return new ForbiddenException(msg);
  if (code === 404 || err.statusCode === 404) return new NotFoundException(msg);
  if (code === 406) return new BadRequestException(msg); // invalid receptor, etc.
  if (code === 409) return new BadRequestException(msg); // duplicate / conflict‑ish
  if (code === 429 || err.statusCode === 429) return new BadRequestException(msg);
  if (code >= 500 || (err.statusCode && err.statusCode >= 500)) {
    return new ServiceUnavailableException(msg);
  }
  // Fall back
  return new BadRequestException(msg);
}
