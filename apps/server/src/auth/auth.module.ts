import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { PoliciesGuard } from './guards/policies.guard';
import { CaslModule } from '../casl/casl.module';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';
import { KavenegarModule } from 'src/modules/kavenegar/kavenegar.module';
import { MailModule } from 'src/mail/mail.module';
import { PrismaService } from 'src/services/prisma.service';
import { UserContextMiddleware } from 'src/common/middlewares/user-context.middleware';
import { ConfigService } from '@nestjs/config';
import { RolesService } from 'src/roles/roles.service';

@Module({
  imports: [
    // HealthModule,
    UsersModule,
    CaslModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-secret-key',
      signOptions: { expiresIn: '1d' },
    }),
    KavenegarModule,
    MailModule,
  ],
  providers: [
    PrismaService,
    AuthService,
    LocalStrategy,
    UserContextMiddleware,
    JwtStrategy,
    PoliciesGuard,
    RolesService,
  ],
  controllers: [AuthController],
  exports: [
    AuthService,
    JwtStrategy,
    PoliciesGuard,
    JwtModule,
    UserContextMiddleware,
  ],
})
export class AuthModule { }
