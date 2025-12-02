import { IsDateString, IsOptional, IsString } from "class-validator";

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsDateString()
  birthdate?: string; // ISO string

  @IsOptional()
  @IsString()
  nationalCode?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;
}

export class UpdatePassportDto {
  @IsOptional()
  @IsString()
  passportFirstName?: string;

  @IsOptional()
  @IsString()
  passportLastName?: string;

  @IsOptional()
  @IsString()
  passportNumber?: string;

  @IsOptional()
  @IsDateString()
  passportExpiryDate?: string;
}

export class UpdateBankDto {
  @IsOptional()
  @IsString()
  iban?: string;

  @IsOptional()
  @IsString()
  cardNumber?: string;
}
