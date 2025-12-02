import { User } from '../../users/interfaces/user.interface';

export interface AuthResponse {
  access_token: string;
  refresh_token?: string;
  user: Omit<User, 'password'>;
  expires_in: number;
}

export interface LoginResponse {
  verificationId: string;
  validUntil: Date;
}