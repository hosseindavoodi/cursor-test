import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../../auth/auth.service';
import { JwtPayload } from 'src/auth/interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

@Injectable()
export class UserContextMiddleware implements NestMiddleware {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) { }

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next();
      }

      const token = authHeader.substring(7);

      const decoded = this.jwtService.verify(token) as JwtPayload;

      if (decoded && decoded.sub) {
        const user = await this.authService.validateJwtPayload(decoded);

        if (user) {
          req.user = user;
        }
      }
    } catch (error) {
    }

    next();
  }
}