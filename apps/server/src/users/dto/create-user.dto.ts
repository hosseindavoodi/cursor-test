import {
  IsString,
  IsOptional,
  IsArray,
  Validate,
  IsMobilePhone,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsMobilePhone()
  phoneNumber: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  roles?: string;
}
