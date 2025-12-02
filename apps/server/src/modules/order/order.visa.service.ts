import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { RequestVisaOrderDto, RequestVisaOrderResponseDto } from "./dto/visa/request.visa.dto";
import { VisaPassengers } from "@sana/db/generated/prisma";
import { I18nService } from "src/common/services/i18n.service";
import { createPassengerDto, VisaConfirmResponseDto } from "./dto/visa/create.visa.passenger.dto";
import { PassengersService } from "../passengers/passengers.service";
import { getFileExtension } from "src/utilities/get.file.extenion";
import { calculateAge } from "src/utilities/age.calculator";
import { GetUploadDocumentUrlResponseDto } from "./dto/visa/upload.doc.dto";
import { MinioService } from "src/modules/assets/minio.service";
import { AssetsServices } from "../assets/assets.service";
import { MessageDto, MessageStatus } from "src/common/dto/common.dto";

@Injectable()
export class VisaOrderServices {
  constructor(
    readonly prisma: PrismaService,
    readonly i18: I18nService,
    readonly passengerServices: PassengersService,
    readonly minioService: MinioService,
    readonly assetsService: AssetsServices
  ) {}

  async createOrderForUser(dto: RequestVisaOrderDto, userId: string): Promise<RequestVisaOrderResponseDto> {
    const visaCountry = await this.prisma.visaCountry.findUnique({
      where: {
        id: dto.countryId,
      },
      include: {
        durations: true,
        requiredAssetTypes: true,
        groups: {
          include: {
            prices: true,
          },
        },
      },
    });

    let allGroupsHasValidDurationAndType: boolean = true;

    dto.passengers.forEach((p) => {
      let requestedGroup = visaCountry.groups.find((g) => g.id === p.groupId);
      let requestedType = dto.visaType;
      let requestedDuration = dto.durationId;
      if (
        !Boolean(
          requestedGroup.prices.find((p) => p.durationId === requestedDuration && p.type === requestedType && p.priceAmount.toNumber() > 0)
        )
      ) {
        allGroupsHasValidDurationAndType = false;
      }
    });

    if (!allGroupsHasValidDurationAndType) {
      throw new HttpException(
        "this country is not providing the visa for selected duration/type/price for all chosen passengers group",
        400
      );
    }

    /// CREATING THE ORDER
    const createdOrder = await this.prisma.orders.create({
      data: {
        product: "VISA",
        status : 'IN_PROGRESS',
        customer: { connect: { id: userId } },
        visa: {
          create: {
            durationInDays: visaCountry.durations.find((d) => d.id === dto.durationId).durationInDays,
            status: "REQUESTED",
            visaType: dto.visaType,
            visaCountry: { connect: { id: dto.countryId } },
          },
        },
      },
      include: {
        visa: true,
      },
    });

    const createdPassengers: VisaPassengers[] = [];
    /// CREATING PRICE AND PASSENGERS
    for (let passengerKey in dto.passengers) {
      for (let count = dto.passengers[passengerKey].count; count > 0; count--) {
        const group = await this.prisma.visaGroups.findUnique({
          where: { id: dto.passengers[passengerKey].groupId },
          include: {
            prices: true,
          },
        });

        const priceForPassenger = group.prices.find((price) => price.durationId === dto.durationId && price.type === dto.visaType);

        const createdPassenger = await this.prisma.visaPassengers.create({
          data: {
            visaOrder: {
              connect: { id: createdOrder.visa.id },
            },
            group: {
              connect: {
                id: dto.passengers[passengerKey].groupId,
              },
            },
            price: {
              create: {
                type: dto.visaType,
                appliedPrice: {
                  connect: {
                    id: priceForPassenger.id,
                  },
                },
                priceAmount: priceForPassenger.priceAmount,
                priceUnit: priceForPassenger.priceUnit,
              },
            },

            totalBaseAmount: priceForPassenger.priceAmount,
            totalPriceAmount: priceForPassenger.priceAmount,
          },
        });

        createdPassengers.push(createdPassenger);
      }
    }

    let totalPrices = {
      totalBaseAmount: 0,
      totalMarkupAmount: 0,
      totalTaxAmount: 0,
      totalPriceAmount: 0,
    };

    createdPassengers.forEach((p) => {
      totalPrices.totalBaseAmount += p.totalBaseAmount.toNumber();
      totalPrices.totalMarkupAmount += p.totalMarkupAmount.toNumber();
      totalPrices.totalTaxAmount += p.totalTaxAmount.toNumber();
      totalPrices.totalPriceAmount += p.totalBaseAmount.toNumber() + p.totalMarkupAmount.toNumber() + p.totalTaxAmount.toNumber();
    });

    await this.prisma.orders.update({
      where: { id: createdOrder.id },
      data: {
        visa: {
          update: {
            totalBaseAmount: totalPrices.totalBaseAmount,
            totalMarkupAmount: totalPrices.totalMarkupAmount,
            totalTaxAmount: totalPrices.totalTaxAmount,
            totalPriceAmount: totalPrices.totalPriceAmount,
          },
        },
        totalBaseAmount: {
          increment: totalPrices.totalBaseAmount,
        },
        totalMarkupAmount: {
          increment: totalPrices.totalMarkupAmount,
        },
        totalTaxAmount: {
          increment: totalPrices.totalTaxAmount,
        },
        totalPriceAmount: {
          increment: totalPrices.totalPriceAmount,
        },
      },
    });

    return {
      orderId: createdOrder.id,
      orderNumber: createdOrder.orderNumber,
      message: this.i18.translate("order.success.created"),
    };
  }

  async confirmOrderPassengers(dto: createPassengerDto, userId: string): Promise<VisaConfirmResponseDto> {
    const { orderId, passengers } = dto;
    const order = await this.prisma.orders.findUnique({
      where: { id: orderId },
      include: {
        visa: {
          select: {
            id: true,
            savePassengers: {
              include: {
                group: true,
              },
            },
            visaCountry: {
              include: {
                groups: true,
              },
            },
          },
        },
      },
    });

    order.visa.savePassengers.forEach((savedPassenger) => {
      const isPassengerAvailableInDto = Boolean(passengers.find((passenger) => passenger.passengerId === savedPassenger.id));

      if (!isPassengerAvailableInDto) {
        throw new HttpException(`data for passenger with ID:${savedPassenger.id} is not provided but exists in order`, 400);
      }
    });

    passengers.forEach((passenger) => {
      const passengerAge = calculateAge(passenger.birthdate);

      const group = order.visa.savePassengers.find((p) => p.id === passenger.passengerId).group;

      if (!(group.startAge <= passengerAge && passengerAge <= group.endAge)) {
        throw new HttpException(
          `The passenger age with ID: ${passenger.passengerId} is not in the range of it's specified age group  (minAge : ${group.startAge} , maxAge: ${group.endAge} , sentAge : ${passengerAge})  `,
          400
        );
      }
    });

    const updatePassengers = await Promise.all(
      passengers.map(async (passenger) => {
        return this.prisma.visaPassengers.update({
          where: { id: passenger.passengerId },
          data: {
            firstName: passenger.firstName,
            lastName: passenger.lastName,
            birthdate: passenger.birthdate,
            nationalityCode: passenger.nationalityCode,
            gender: passenger.gender,
            passportNumber: passenger.passportNumber,
            passportExpireDate: passenger.passportExpireDate,
          },
        });
      })
    );

    await this.prisma.visaOrder.update({
      where: { id: order.visa.id },
      data: {
        status: "CONFIRMED",
      },
    });

    await this.passengerServices.bulkUpdateOrCreateForUser(
      passengers.map((p) => ({
        firstName: p.firstName,
        lastName: p.lastName,
        birthdate: p.birthdate,
        gender: p.gender,
        nationalityCode: p.nationalityCode,
        passportExpireDate: p.passportExpireDate,
        passportNumber: p.passportNumber,
        documents: [],
      })),
      userId,
      orderId
    );

    // const createAssets = await this.assetsService.createPrivateAssets({assets : dto.passengers.flatMap(passenger=> passenger.)})
    // let uploadUrls: GetUploadDocumentUrlResponseDto["uploadUrls"] = [];

    return {
      message: "passengers successfully updated",
      orderId: orderId,
      requirePayment: order.visa.visaCountry.immediatePayment,
    };
  }
}
