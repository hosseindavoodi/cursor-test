import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
  IsIn,
  IsInt,
  Max,
  Min,
  IsArray,
  ValidateNested,
} from "class-validator";
import { Transform } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";
import { Type } from "class-transformer";
import { Gender } from "./gender.enum";
import { ApiProperty } from "@nestjs/swagger";

// helpers
export const trim = () => Transform(({ value }) => (typeof value === "string" ? value.trim() : value));

export const toUpper = () => Transform(({ value }) => (typeof value === "string" ? value.trim().toUpperCase() : value));

export class BasePassengerDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @trim()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @trim()
  lastName: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsOptional()
  @Matches(/^\d{10}$/)
  @trim()
  nationalCode?: string | null;

  @IsDateString()
  birthdate: string;

  //   @IsOptional()
  //   @MaxLength(100)
  //   @trim()
  //   passportFirstName?: string | null;

  //   @IsOptional()
  //   @MaxLength(100)
  //   @trim()
  //   passportLastName?: string | null;

  @IsOptional()
  @MaxLength(32)
  @trim()
  passportNumber?: string | null;

  @IsOptional()
  @IsDateString()
  passportExpireDate?: string | null; // ISO 8601

  @IsOptional()
  @Length(2, 3)
  @toUpper()
  nationalityCode?: string | null; // e.g. IRN, DE
}

export class CreatePassengerDto extends BasePassengerDto {}

export class UpdatePassengerDto extends PartialType(CreatePassengerDto) {}

export class QueryPassengerDto {
  @IsOptional()
  @IsString()
  q?: string; // free text: name, nationalCode, passportNumber

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsString()
  nationalCode?: string;

  @IsOptional()
  @IsString()
  passportNumber?: string;

  @IsOptional()
  @IsString()
  nationalityCode?: string;

  @IsOptional()
  @IsDateString()
  birthdateFrom?: string; // ISO

  @IsOptional()
  @IsDateString()
  birthdateTo?: string; // ISO

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  pageSize: number = 20;

  @IsOptional()
  @IsIn(["createdAt", "updatedAt", "firstName", "lastName", "birthdate"])
  sortBy: "createdAt" | "updatedAt" | "firstName" | "lastName" | "birthdate" = "updatedAt";

  @IsOptional()
  @IsIn(["asc", "desc"])
  sortOrder: "asc" | "desc" = "desc";
}

export class PassengerDocuments {
  @ApiProperty({
    example: "passport.png",
  })
  @IsString()
  fileName: string;

  @IsString()
  type: string;
}
