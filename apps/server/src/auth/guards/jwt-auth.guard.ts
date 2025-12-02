import {
  Injectable,
  ExecutionContext,
  Inject,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private reflector: Reflector,
    @Inject(Cache) private cacheManager: Cache,
  ) {
    super();
  }

  private readonly logger = new Logger(JwtAuthGuard.name);

  private readonly CACHE_KEYS = {
    JWT_BLACKLIST: (token: string) => `jwt:blacklist:${token}`,
  };

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Check if route is marked as public
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return false;
    }
    const token = authHeader.replace('Bearer ', '').trim();

    const isBlacklisted = await this.cacheManager.get(
      this.CACHE_KEYS.JWT_BLACKLIST(token),
    );
    this.logger.debug(
      `Checking token blacklist: ${token} - blacklisted: ${isBlacklisted}`,
      'JWT Auth Guard',
    );
    if (isBlacklisted) {
      throw new UnauthorizedException('Token has been revoked');
    }

    // super.canActivate may return boolean | Promise<boolean> | Observable<boolean>
    // Always resolve to boolean for compatibility
    const result = await Promise.resolve(super.canActivate(context));
    return !!result;
  }
}
