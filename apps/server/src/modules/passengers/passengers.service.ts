import { Injectable, ConflictException, ForbiddenException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { CreatePassengerDto, QueryPassengerDto, UpdatePassengerDto } from "./passengers.dto";
import { Assets, Prisma } from "@sana/db/generated/prisma";
import { MessageDto, MessageStatus } from "src/common/dto/common.dto";

export interface Page<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
}

@Injectable()
export class PassengersService {
  constructor(private readonly prisma: PrismaService) {}

  private handlePrismaError(e: unknown) {
    if (e && typeof e === "object" && "code" in (e as any)) {
      const err = e as any;
      if (err.code === "P2002") {
        const target = err?.meta?.target as string[] | undefined;
        const fields = target?.join(", ") ?? "unique field";
        throw new ConflictException(`Duplicate value for ${fields}`);
      }
      if (err.code === "P2025") {
        throw new NotFoundException("Passenger not found");
      }
    }
    throw e;
  }

  private buildWhere(query: QueryPassengerDto, userId?: string): Prisma.PassengerWhereInput {
    const where: Prisma.PassengerWhereInput = {};
    if (userId) where.userId = userId;

    const and: Prisma.PassengerWhereInput[] = [];

    if (query.q) {
      const q = query.q.trim();
      and.push({
        OR: [
          { firstName: { contains: q, mode: "insensitive" } },
          { lastName: { contains: q, mode: "insensitive" } },
          { nationalCode: { equals: q } },
          { passportNumber: { equals: q } },
        ],
      });
    }

    if (query.firstName)
      and.push({
        firstName: { contains: query.firstName, mode: "insensitive" },
      });
    if (query.lastName) and.push({ lastName: { contains: query.lastName, mode: "insensitive" } });
    if (query.gender) and.push({ gender: query.gender });
    if (query.nationalCode) and.push({ nationalCode: query.nationalCode });
    if (query.passportNumber) and.push({ passportNumber: query.passportNumber });
    if (query.nationalityCode) and.push({ nationalityCode: query.nationalityCode.toUpperCase() });

    if (query.birthdateFrom || query.birthdateTo) {
      and.push({
        birthdate: {
          gte: query.birthdateFrom ? new Date(query.birthdateFrom) : undefined,
          lte: query.birthdateTo ? new Date(query.birthdateTo) : undefined,
        },
      });
    }

    if (and.length) where.AND = and;
    return where;
  }

  async createForUser(userId: string, dto: CreatePassengerDto) {
    try {
      return await this.prisma.passenger.create({
        data: {
          userId,
          firstName: dto.firstName,
          lastName: dto.lastName,
          gender: dto.gender,
          nationalCode: dto.nationalCode ?? null,
          birthdate: dto.birthdate ? new Date(dto.birthdate) : null,
          passportNumber: dto.passportNumber ?? null,
          passportExpireDate: dto.passportExpireDate ? new Date(dto.passportExpireDate) : null,
          nationalityCode: dto.nationalityCode?.toUpperCase() ?? null,
        },
      });
    } catch (e) {
      this.handlePrismaError(e);
    }
  }

  async bulkUpdateOrCreateForUser(dto: CreatePassengerDto[], userId: string, orderId?: string): Promise<MessageDto> {
    const createOrUpdatePassengerForUser = await Promise.all(
      dto.map((passenger) => {
        return this.prisma.passenger.upsert({
          where: {
            userId_nationalCode: passenger.nationalCode
              ? {
                  userId: userId,
                  nationalCode: passenger.nationalCode,
                }
              : undefined,
            userId_passportNumber: passenger.passportNumber
              ? {
                  passportNumber: passenger.passportNumber,
                  userId: userId,
                }
              : undefined,
          },
          update: {
            orders: orderId ? { connect: { id: orderId } } : undefined,
            birthdate: passenger.birthdate,
            firstName: passenger.firstName,
            lastName: passenger.lastName,
            nationalCode: passenger.nationalCode,
            gender: passenger.gender,
            passportExpireDate: passenger.passportExpireDate,
            nationalityCode: passenger.nationalCode,
          }, // does not update user for now it might later
          create: {
            birthdate: passenger.birthdate,
            firstName: passenger.firstName,
            lastName: passenger.lastName,
            gender: passenger.gender,
            nationalCode: passenger.nationalCode,
            nationalityCode: passenger.nationalityCode,
            passportExpireDate: passenger.passportExpireDate,
            passportNumber: passenger.passportNumber,
            user: {
              connect: {
                id: userId,
              },
            },
          },
        });
      })
    );

    return {
      message: "Passenger create/update successfull",
      status: MessageStatus.SUCCESS,
    };
  }

  async listForUser(userId: string, query: QueryPassengerDto): Promise<Page<Prisma.PassengerGetPayload<{}>>> {
    const where = this.buildWhere(query, userId);
    const skip = (query.page - 1) * query.pageSize;
    const take = query.pageSize;
    const orderBy: Prisma.PassengerOrderByWithRelationInput = {
      [query.sortBy]: query.sortOrder,
    } as any;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.passenger.findMany({ where, skip, take, orderBy }),
      this.prisma.passenger.count({ where }),
    ]);

    return { items, page: query.page, pageSize: query.pageSize, total };
  }

  async getForUser(userId: string, id: string) {
    const passenger = await this.prisma.passenger.findUnique({ where: { id } });
    if (!passenger) throw new NotFoundException("Passenger not found");
    if (passenger.userId !== userId) throw new ForbiddenException("Not your passenger");
    return passenger;
  }

  async updateForUser(userId: string, id: string, dto: UpdatePassengerDto) {
    const existing = await this.getForUser(userId, id);
    try {
      return await this.prisma.passenger.update({
        where: { id: existing.id },
        data: {
          firstName: dto.firstName ?? undefined,
          lastName: dto.lastName ?? undefined,
          gender: dto.gender ?? undefined,
          nationalCode: dto.nationalCode === undefined ? undefined : dto.nationalCode,
          // birthdateJalali: dto.birthdateJalali === undefined ? undefined : dto.birthdateJalali,
          birthdate: dto.birthdate === undefined ? undefined : dto.birthdate ? new Date(dto.birthdate) : null,
          // passportFirstName: dto.passportFirstName === undefined ? undefined : dto.passportFirstName,
          // passportLastName: dto.passportLastName === undefined ? undefined : dto.passportLastName,
          passportNumber: dto.passportNumber === undefined ? undefined : dto.passportNumber,
          passportExpireDate:
            dto.passportExpireDate === undefined ? undefined : dto.passportExpireDate ? new Date(dto.passportExpireDate) : null,
          nationalityCode: dto.nationalityCode === undefined ? undefined : dto.nationalityCode ? dto.nationalityCode.toUpperCase() : null,
          // passportImage: dto.passportImage === undefined ? undefined : dto.passportImage,
        },
      });
    } catch (e) {
      this.handlePrismaError(e);
    }
  }

  async removeForUser(userId: string, id: string) {
    const existing = await this.getForUser(userId, id);
    try {
      await this.prisma.passenger.delete({ where: { id: existing.id } });
      return { id };
    } catch (e) {
      this.handlePrismaError(e);
    }
  }

  async createForAny(dto: CreatePassengerDto & { userId: string }) {
    try {
      return await this.prisma.passenger.create({
        data: {
          userId: dto.userId,
          firstName: dto.firstName,
          lastName: dto.lastName,
          gender: dto.gender,
          nationalCode: dto.nationalCode ?? null,
          // birthdateJalali: dto.birthdateJalali ?? null,
          birthdate: dto.birthdate ? new Date(dto.birthdate) : null,
          // passportFirstName: dto.passportFirstName ?? null,
          // passportLastName: dto.passportLastName ?? null,
          passportNumber: dto.passportNumber ?? null,
          passportExpireDate: dto.passportExpireDate ? new Date(dto.passportExpireDate) : null,
          nationalityCode: dto.nationalityCode?.toUpperCase() ?? null,
          // passportImage: dto.passportImage ?? null,
        },
      });
    } catch (e) {
      this.handlePrismaError(e);
    }
  }

  async listAll(query: QueryPassengerDto & { userId?: string }): Promise<Page<Prisma.PassengerGetPayload<{}>>> {
    const where = this.buildWhere(query, query.userId);
    const skip = (query.page - 1) * query.pageSize;
    const take = query.pageSize;
    const orderBy: Prisma.PassengerOrderByWithRelationInput = {
      [query.sortBy]: query.sortOrder,
    } as any;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.passenger.findMany({ where, skip, take, orderBy }),
      this.prisma.passenger.count({ where }),
    ]);

    return { items, page: query.page, pageSize: query.pageSize, total };
  }

  async getAny(id: string) {
    const passenger = await this.prisma.passenger.findUnique({ where: { id } });
    if (!passenger) throw new NotFoundException("Passenger not found");
    return passenger;
  }

  async updateAny(id: string, dto: UpdatePassengerDto) {
    try {
      return await this.prisma.passenger.update({
        where: { id },
        data: {
          firstName: dto.firstName ?? undefined,
          lastName: dto.lastName ?? undefined,
          gender: dto.gender ?? undefined,
          nationalCode: dto.nationalCode === undefined ? undefined : dto.nationalCode,
          // birthdateJalali: dto.birthdateJalali === undefined ? undefined : dto.birthdateJalali,
          birthdate: dto.birthdate === undefined ? undefined : dto.birthdate ? new Date(dto.birthdate) : null,
          // passportFirstName: dto.passportFirstName === undefined ? undefined : dto.passportFirstName,
          // passportLastName: dto.passportLastName === undefined ? undefined : dto.passportLastName,
          passportNumber: dto.passportNumber === undefined ? undefined : dto.passportNumber,
          passportExpireDate:
            dto.passportExpireDate === undefined ? undefined : dto.passportExpireDate ? new Date(dto.passportExpireDate) : null,
          nationalityCode: dto.nationalityCode === undefined ? undefined : dto.nationalityCode ? dto.nationalityCode.toUpperCase() : null,
          // passportImage: dto.passportImage === undefined ? undefined : dto.passportImage,
        },
      });
    } catch (e) {
      this.handlePrismaError(e);
    }
  }

  async removeAny(id: string) {
    try {
      await this.prisma.passenger.delete({ where: { id } });
      return { id };
    } catch (e) {
      this.handlePrismaError(e);
    }
  }

  async bulkDelete(ids: string[]) {
    await this.prisma.passenger.deleteMany({ where: { id: { in: ids } } });
    return { deletedIds: ids };
  }

  async transferOwner(id: string, newUserId: string) {
    try {
      return await this.prisma.passenger.update({
        where: { id },
        data: { userId: newUserId },
      });
    } catch (e) {
      this.handlePrismaError(e);
    }
  }
}
