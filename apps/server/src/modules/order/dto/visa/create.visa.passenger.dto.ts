import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsDateString, IsEnum, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Gender } from "src/modules/passengers/gender.enum";
import { PassengerDocuments } from "src/modules/passengers/passengers.dto";
import { IsNotExpired } from "src/validators/passport.expire.validator";

export class createPassengerDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Passenger)
  passengers: Passenger[];
  orderId: string;
}

export class Passenger {
  @IsString()
  @IsNotEmpty()
  passengerId: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty({
    example: "2025-10-12T00:00:00Z",
  })
  @IsString()
  @IsNotEmpty()
  @IsDateString()
  birthdate: string;

  @IsString()
  @IsNotEmpty()
  passportNumber: string;

  @ApiProperty({
    example: "2025-10-12T00:00:00Z",
  })
  @IsString()
  @IsNotEmpty()
  @IsDateString()
  @IsNotExpired() // Custom message
  passportExpireDate: string;

  @IsString()
  nationalityCode: string;

  // @IsArray()
  // @ValidateNested({ each: true })
  // assets: PassengerDocuments[];
}

export class VisaConfirmResponseDto {
  orderId: string;
  message: string;
  requirePayment: boolean;
}
