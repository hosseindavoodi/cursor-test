import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateBankDto, UpdatePassportDto, UpdateProfileDto } from "./dto/profile.dto";
import { PROFILE_SELECT } from "./profile.select";
import { Profile } from "./domain/profile.interface";
import { PrismaService } from "src/services/prisma.service";
import { Prisma, User } from "@sana/db/generated/prisma";
import { AssetsServices } from "../assets/assets.service";

@Injectable()
export class ProfileService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly assets: AssetsServices
  ) {}

  async getMe(userId: string): Promise<Profile> {
    const user = await this.prisma.user.findFirst({
      where: { id: userId },
      select: PROFILE_SELECT,
    });
    if (!user) throw new NotFoundException("User not found");

    return await this.mapToDomain(user);
  }

  async updateProfile(userId: string, dto: UpdateProfileDto): Promise<Profile> {
    const updated = await this.prisma.user.update({
      where: { id: userId },
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        birthdate: dto.birthdate ? new Date(dto.birthdate) : undefined,
        nationalCode: dto.nationalCode,
        email: dto.email,
        phoneNumber: dto.phoneNumber ? this.normalizePhone(dto.phoneNumber) : undefined,
      },
      select: PROFILE_SELECT,
    });
    return await this.mapToDomain(updated);
  }

  async updatePassport(userId: string, dto: UpdatePassportDto): Promise<Profile> {
    const updated = await this.prisma.user.update({
      where: { id: userId },
      data: {
        passportFirstName: dto.passportFirstName,
        passportLastName: dto.passportLastName,
        passportNumber: dto.passportNumber,
        passportExpiryDate: dto.passportExpiryDate ? new Date(dto.passportExpiryDate) : undefined,
      },
      select: PROFILE_SELECT,
    });
    return await this.mapToDomain(updated);
  }

  async updateBank(userId: string, dto: UpdateBankDto): Promise<Profile> {
    const updated = await this.prisma.user.update({
      where: { id: userId },
      data: {
        iban: dto.iban,
        cardNumber: dto.cardNumber,
      },
      select: PROFILE_SELECT,
    });
    return await this.mapToDomain(updated);
  }

  private async mapToDomain(user: PrismaUserWithWallets): Promise<Profile> {
    const passportImage = (await this.assets.retrieveAssets({ assets: [{ userId: user.id }] })).find(
      (asset) => asset.type.name === "PASSPORT_IMAGE"
    );

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      birthdate: user.birthdate,
      nationalCode: user.nationalCode,
      email: user.email,
      isEmailVerified: user.isEmailVerified,
      phoneNumber: user.phoneNumber,
      isPhoneNumberVerified: user.isPhoneNumberVerified,
      passport: {
        firstName: user.passportFirstName,
        lastName: user.passportLastName,
        number: user.passportNumber,
        expiryDate: user.passportExpiryDate,
        image: passportImage,
      },
      bank: {
        iban: user.iban,
        cardNumber: user.cardNumber,
      },
    };
  }

  private normalizePhone(input: string): string {
    const trimmed = input.trim().replace(/\s+/g, "");
    if (!trimmed) return "";
    if (trimmed.startsWith("00")) return `+${trimmed.slice(2)}`;
    return trimmed;
  }
}

type PrismaUserWithWallets = Prisma.UserGetPayload<{ select: typeof PROFILE_SELECT }>;
