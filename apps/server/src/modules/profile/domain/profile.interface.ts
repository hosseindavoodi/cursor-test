import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { RetrieveAssetsResponseDto } from "src/modules/assets/dto/retrieve.assets.dto";

export type WalletStatus = "active" | "frozen" | "closed";

export class WalletSummary {
  @ApiProperty() id: string;
  @ApiProperty() currency: string;
  @ApiProperty({ type: Number }) balance: number;
  @ApiProperty({ enum: ["active", "frozen", "closed"] }) status: WalletStatus;
  @ApiProperty({ type: String, format: "date-time" }) updatedAt: Date;
}

export class PassportInfo {
  @ApiProperty() firstName: string;
  @ApiProperty() lastName: string;
  @ApiProperty() number: string;
  @ApiProperty({ type: Date, format: "date" }) expiryDate: Date; // adjust to your field
  @ApiProperty() @Type(() => RetrieveAssetsResponseDto) image: RetrieveAssetsResponseDto;
}

export class BankInfo {
  @ApiProperty({ required: false, nullable: true }) iban?: string;
  @ApiProperty({ required: false, nullable: true }) cardNumber?: string;
}

export class Profile {
  @ApiProperty() id: string;

  @ApiProperty({ required: false, nullable: true }) firstName?: string;
  @ApiProperty({ required: false, nullable: true }) lastName?: string;
  @ApiProperty({ required: false, nullable: true, type: Date, format: "date" }) birthdate?: Date;
  @ApiProperty({ required: false, nullable: true }) nationalCode?: string;

  @ApiProperty() phoneNumber: string;
  @ApiProperty() isPhoneNumberVerified: boolean;

  @ApiProperty() email: string;
  @ApiProperty() isEmailVerified: boolean;

  @ApiProperty({ type: () => PassportInfo, required: false, nullable: true })
  passport?: PassportInfo;

  @ApiProperty({ type: () => BankInfo, required: false, nullable: true })
  bank?: BankInfo;

  @ApiProperty({ type: () => [WalletSummary] })
  wallets?: WalletSummary[];
}
