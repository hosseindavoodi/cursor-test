import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { isEmail, IsEmail, IsEnum, IsOptional, IsPhoneNumber, IsString, MinLength, Validate, ValidateIf } from 'class-validator';
import { Channel } from '../interfaces/type.interface';
import { BadRequestException } from '@nestjs/common';

export class LoginDto {
  @IsOptional()
  @ValidateIf((o) => (o.eamil !== undefined || o.email !== '') && isEmail(o.email))
  email?: string;

  @IsOptional()
  @IsPhoneNumber()
  phoneNumber: string;

  @IsEnum(Channel)
  otpChannel?: Channel = Channel.WHATSAPP;

  @IsString()
  @IsOptional()
  password: string;

  public IsIran(): boolean {
    return this.phoneNumber !== "" && this.phoneNumber !== undefined && (this.phoneNumber.startsWith('+98') || this.phoneNumber.startsWith('0098') || this.phoneNumber.startsWith('098'));
  }

  public String(): string {
    if (this.IsIran()) {
      return this.phoneNumber;
    }

    return this.email || this.phoneNumber;
  }

  public Verify(): boolean {
    if (this.IsIran()) {
      if (this.otpChannel === Channel.MAIL) {
        throw new BadRequestException('OTP channel MAIL is not allowed for Iranian phone numbers');
      }
    } else {
      if (!this.email || this.email === '') {
        throw new BadRequestException('Email is required for non-Iranian phone numbers');
      }
    }

    return true;
  }
}

export class VerifyDto {
  @IsString()
  code: string;

  @IsString()
  verificationId: string;
}

export class ChangePasswordDto {
  @IsString()
  currentPassword: string;

  @IsString()
  @MinLength(6)
  newPassword: string;
}

export class ForgotPasswordDto {
  @IsEmail()
  email: string;
}

export class ResetPasswordDto {
  @IsString()
  token: string;

  @IsString()
  @MinLength(6)
  newPassword: string;
}
