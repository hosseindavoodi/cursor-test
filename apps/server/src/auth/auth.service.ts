import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
  Logger,
  Inject,
  NotImplementedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../services/prisma.service';
import { UsersService } from '../users/users.service';
import {
  LoginDto,
  ChangePasswordDto,
  ForgotPasswordDto,
  ResetPasswordDto,
  VerifyDto,
} from './dto/auth.dto';
import {
  AuthResponse,
  LoginResponse,
} from './interfaces/auth-response.interface';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { KavenegarService } from 'src/modules/kavenegar/kavenegar.service';
import { generateOtp } from 'src/common/otp';
import { CACHE_MANAGER, CacheTTL } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { MailService } from 'src/mail/mail.service';
import { Channel, ChannelToServiceType } from './interfaces/type.interface';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private usersService: UsersService,
    private kavenegarService: KavenegarService,
    private roleService: RolesService,
    private mailService: MailService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  private readonly logger = new Logger(AuthService.name);

  private readonly CACHE_KEYS = {
    USER_PROFILE: (userId: string) => `user:profile:${userId}`,
    OTP_VERIFICATION: (verificationId: string) =>
      `otp:verification:${verificationId}`,
    RESET_TOKEN: (token: string) => `reset:token:${token}`,
    JWT_BLACKLIST: (token: string) => `jwt:blacklist:${token}`,
    LOGIN: (identifier: string) => `login:${identifier}`,
    USER_ROLES: (userId: string) => `user:roles:${userId}`,
  };

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: {
        UserRole: {
          include: {
            Role: {
              include: {
                Permission: true,
              },
            },
          },
        },
      },
    });

    if (!user || !user.isActive) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    const { password: _, ...result } = user;
    return {
      ...result,
      roleIds: user.UserRole.map((ur) => ur.roleId),
      roles: user.UserRole.map((ur) => ({
        id: ur.Role.id,
        name: ur.Role.name,
        permissions: ur.Role.Permission,
        createdAt: ur.Role.createdAt,
        updatedAt: ur.Role.updatedAt,
      })),
    };
  }

  // in the login method, we will first check the dto
  // if the user is from Iran then we will use the phone to send otp
  // if the user is not from Iran we will check the opt channel
  // if the channel is whatsapp then we will send the otp in whatsapp
  // if the channel is email then we will send the otp in email
  // then we will create a verification id and send it to the user
  // so that in verify method we can check the otp and verification id
  @CacheTTL(20)
  async login(loginDto: LoginDto): Promise<LoginResponse | AuthResponse> {
    loginDto.Verify();
    // TODO: add checking user activation status

    const cacheKey = this.CACHE_KEYS.LOGIN(loginDto.String());
    const loginCache = await this.cacheManager.get<LoginResponse>(cacheKey);


    console.log('login cache', loginCache)
    if (loginCache) {
      return loginCache;
    }

    let response: LoginResponse;

    let healthType = ChannelToServiceType(loginDto.otpChannel)

    // check if the service is healthy or active
    // const isActive = await this.healthService.checkService(healthType)
    const isActive = true;
    if (!isActive) {
      throw new BadRequestException(`${healthType} service is not active`);
    }

    if (loginDto.otpChannel == Channel.Password) {
      return await this.loginWithPassword(loginDto);
    }

    if (loginDto.IsIran() && loginDto.otpChannel === Channel.SMS) {
      response = await this.sendSmsOtp(loginDto.phoneNumber);
    }

    // if the user is not from Iran we will use email or whatsapp
    if (loginDto.otpChannel === Channel.WHATSAPP) {
      throw new NotImplementedException('WhatsApp OTP not implemented yet')
    }

    if (loginDto.otpChannel === Channel.MAIL) {
      response = await this.sendEmailOtp(loginDto.email);
    }

    if (response) {
      console.log()
      await this.cacheManager.set(cacheKey, response, 120000);
      return response
    }

    throw new BadRequestException(`invalid otp channel`);
  }

  async loginWithPassword(loginDto: LoginDto): Promise<AuthResponse> {
    if (!loginDto.email || !loginDto.password) {
      throw new BadRequestException(
        'Email and password are required for password login',
      );
    }

    const user = await this.usersService.verifyUser(
      loginDto.email,
      loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return this.generateAuthResponse(user);
  }

  async verifyOtp(verifyDto: VerifyDto): Promise<AuthResponse> {
    const cacheKey = this.CACHE_KEYS.OTP_VERIFICATION(verifyDto.verificationId);
    console.log(cacheKey)
    const attemptsKey = `${cacheKey}:attempts`;
    const otpCache = await this.cacheManager.get<any>(cacheKey);

    console.log('opt ', otpCache)

    if (!otpCache) {
      this.logger.error('invalid verification id', verifyDto);
      throw new UnauthorizedException('Invalid verification ID');
    }

    let attempts = await this.cacheManager.get<number>(attemptsKey);
    if (!attempts) attempts = 0;
    attempts = await (this.cacheManager['store']?.incr
      ? this.cacheManager['store'].incr(attemptsKey)
      : (async () => {
        await this.cacheManager.set(attemptsKey, attempts + 1, 120);
        return attempts + 1;
      })());

    if (attempts > 10) {
      this.logger.error('Too many OTP attempts', verifyDto);
      throw new UnauthorizedException(
        'Too many OTP attempts. Please request a new code.',
      );
    }

    if (otpCache.otp !== verifyDto.code) {
      this.logger.error('invalid otp code', verifyDto);
      throw new UnauthorizedException('Invalid OTP code');
    }

    // clear cache on success
    await this.cacheManager.del(cacheKey);
    await this.cacheManager.del(attemptsKey);

    let user = null;
    if (otpCache.identifier) {
      user = await this.usersService.getOrCreateUser(otpCache.identifier);
      if (user && user.roles.length == 0) {
        let userRole = await this.roleService.findByName('user')
        await this.usersService.addRoleToUser(user.id, userRole.id);
      }
    }
    if (!user) {
      this.logger.error('user not found for verified OTP', verifyDto);
      throw new UnauthorizedException('User not found');
    }
    return this.generateAuthResponse(user);
  }

  async sendEmailOtp(email: string): Promise<LoginResponse> {
    const otp = generateOtp();
    await this.mailService.sendOtp(email, otp);

    // create verification id and valid until after sending the request
    const verificationId = this.generateVerificationId();
    const validUntil = new Date(Date.now() + 2 * 60 * 1000);

    const cacheKey = this.CACHE_KEYS.OTP_VERIFICATION(verificationId);
    await this.cacheManager.set(
      cacheKey,
      {
        otp,
        identifier: email,
        type: 'email',
        attempts: 0,
      },
      120000,
    );

    this.logger.debug(`Sent OTP ${otp} to email ${email}`);
    this.logger.debug(
      `Verification ID: ${verificationId}, valid until ${validUntil.toISOString()}`,
    );
    this.logger.debug(`Cache key: ${cacheKey}`);
    return { verificationId, validUntil };
  }

  async sendSmsOtp(phoneNumber: string): Promise<LoginResponse> {
    const otp = generateOtp();

    this.logger.debug(`Sending OTP ${otp} to phone number ${phoneNumber}`);

    // Send OTP via Kavenegar
    const response = await this.kavenegarService.lookup({
      token: otp,
      receptor: phoneNumber,
      template: 'otp',
    });

    this.logger.debug('OTP sent response');

    const verificationId = this.generateVerificationId();
    const validUntil = new Date(Date.now() + 2 * 60 * 1000);

    // Store OTP data in Redis
    const cacheKey = this.CACHE_KEYS.OTP_VERIFICATION(verificationId);

    console.log('cache key => ', cacheKey)
    await this.cacheManager.set(
      cacheKey,
      {
        otp,
        identifier: phoneNumber,
        type: 'sms',
        attempts: 0,
      },
      120000,
    );

    return { verificationId, validUntil };
  }

  async refreshToken(refreshToken: string): Promise<AuthResponse> {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET || 'refresh-secret',
      });

      const user = await this.usersService.findById(payload.sub);
      if (!user || !user.isActive) {
        this.logger.error('user not found or inactive', payload);
        throw new UnauthorizedException('User not found or inactive');
      }

      return this.generateAuthResponse(user);
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async changePassword(
    userId: string,
    changePasswordDto: ChangePasswordDto,
  ): Promise<{ message: string }> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isCurrentPasswordValid = await bcrypt.compare(
      changePasswordDto.currentPassword,
      user.password,
    );
    if (!isCurrentPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    const hashedNewPassword = await bcrypt.hash(
      changePasswordDto.newPassword,
      10,
    );

    await this.prisma.user.update({
      where: { id: userId },
      data: { password: hashedNewPassword },
    });

    return { message: 'Password changed successfully' };
  }

  async forgotPassword(
    forgotPasswordDto: ForgotPasswordDto,
  ): Promise<{ message: string }> {
    const user = await this.prisma.user.findUnique({
      where: { email: forgotPasswordDto.email },
    });

    if (!user) {
      // Don't reveal if email exists or not
      return { message: 'If the email exists, a reset link has been sent' };
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

    // Save reset token to database (you might want to create a separate table for this)
    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        // You'll need to add these fields to your User model
        // resetToken,
        // resetTokenExpiry,
      },
    });

    // TODO: Send email with reset link containing the token
    // For now, just log it (remove in production)
    console.log(`Password reset token for ${user.email}: ${resetToken}`);

    return { message: 'If the email exists, a reset link has been sent' };
  }

  async resetPassword(
    resetPasswordDto: ResetPasswordDto,
  ): Promise<{ message: string }> {
    // Find user by reset token
    const user = await this.prisma.user.findFirst({
      where: {
        // resetToken: resetPasswordDto.token,
        // resetTokenExpiry: {
        //   gt: new Date(),
        // },
      },
    });

    if (!user) {
      throw new BadRequestException('Invalid or expired reset token');
    }

    const hashedPassword = await bcrypt.hash(resetPasswordDto.newPassword, 10);

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        // resetToken: null,
        // resetTokenExpiry: null,
      },
    });

    return { message: 'Password reset successfully' };
  }

  async logout(userId: string, token?: string): Promise<{ message: string }>  {
    // If you're using session management, invalidate the session here
    // For JWT, you might want to add the token to a blacklist

    let payload = await this.jwtService.verifyAsync<JwtPayload>(token, {
      secret: process.env.JWT_SECRET,
    });

    if (payload !== null) {
      this.cacheManager.set(
        this.CACHE_KEYS.JWT_BLACKLIST(token),
        true,
        3600000,
      );
    }

    return { message: 'Logged out successfully' };
  }

  private generateAuthResponse(user: any): AuthResponse {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
    };

    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET || 'refresh-secret',
      expiresIn: '7d',
    });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      user,
      expires_in: 3600, // 1 hour
    };
  }

  async validateJwtPayload(payload: JwtPayload) {
    const user = await this.usersService.findById(payload.sub);
    if (!user || !user.isActive) {
      this.logger.error('user not found or inactive', payload, user);
      throw new UnauthorizedException('User not found or inactive');
    }
    return user;
  }

  private generateVerificationId(): string {
    return crypto.randomBytes(16).toString('hex');
  }
}
