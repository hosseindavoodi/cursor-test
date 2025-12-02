import { Role } from '../../roles/interfaces/role.interface';

export interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  birthdate?: Date;
  NationalCode?: string;
  email: string;
  isEmailVerified: boolean;
  phoneNumber?: string;
  isPhoneNumberVerified: boolean;
  roles?: Role[];
  isActive: boolean;
  createdAt: Date;
}
