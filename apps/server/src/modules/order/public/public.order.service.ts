import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { ProductTypes } from "../interfaces/order.interface";
import { VisaTypes } from "../../visa/dto/visa.dto";
import { GetOrderByUserQueryDto, GetOrderByUserResponseDto, OrderDto } from "../dto/order/get.order.user.dto";
import { MinioService } from "src/modules/assets/minio.service";
import { Orders, Prisma } from "@sana/db/generated/prisma";
import { Gender } from "../../passengers/gender.enum";
import { OrderStatus, ResidencyOrderStatus, VisaOrderStatus } from "src/enums/enums";


@Injectable()
export class PublicOrderServices {
  constructor(
    readonly prisma: PrismaService,
    readonly minio: MinioService
  ) {}

  async getOrderById(orderId: string, userId: string): Promise<OrderDto> {
    const order = await this.prisma.orders.findUnique({
      where: {
        id: orderId,
        customerId: userId,
      },
      include: {
        visa: {
          include: {
            savePassengers: {
              include: {
                group: true,
                assets: true,
              },
            },
            visaCountry: {
              include: {
                assets: true,
                requiredAssetTypes: {
                  select: {
                    type: true,
                    desc: true,
                  },
                },
              },
            },
          },
        },
        residency: {
          include: {
            residencyCountry: {
              include: {
                type: true,
              },
            },
          },
        },
      },
    });

    const visaOrder: OrderDto["visa"] = order.visa
      ? {
          country: {
            requireOrderAssetTypes: order.visa.visaCountry.requiredAssetTypes,
            countryCode: order.visa.visaCountry.countryCode,
            countryEnName: order.visa.visaCountry.countryEnName,
            countryFaName: order.visa.visaCountry.countryFaName,
            isValidForDays: order.visa.visaCountry.isValidForDays,
            processTime: order.visa.visaCountry.processTime,
            types: order.visa.visaCountry.types as VisaTypes[],
            assets: [],
          },
          type: order.visa.visaType as VisaTypes,
          durationInDays: order.visa.durationInDays,
          totalBaseAmount: order.visa.totalBaseAmount.toNumber(),
          totalMarkupAmount: order.visa.totalMarkupAmount.toNumber(),
          totalTaxAmount: order.visa.totalTaxAmount.toNumber(),
          totalPriceAmount: order.visa.totalPriceAmount.toNumber(),
          priceUnit: order.visa.priceUnit,
          status: order.visa.status as VisaOrderStatus,
          passengers: await Promise.all(
            order.visa.savePassengers.map(async (passenger) => ({
              id: passenger.id,
              firstName: passenger.firstName,
              lastName: passenger.lastName,
              phone: passenger.phone,
              email: passenger.email,
              gender: passenger.gender as Gender,
              birthdate: passenger.birthdate ? passenger.birthdate.toISOString() : null,
              group: {
                startAge: passenger.group.startAge,
                endAge: passenger.group.endAge,
                title: passenger.group.title,
              },
              passportNumber: passenger.passportNumber,
              passportExpireDate: passenger.passportExpireDate ? passenger.passportExpireDate.toISOString() : null,
              price: {
                totalBaseAmount: passenger.totalBaseAmount.toNumber(),
                totalMarkupAmount: passenger.totalMarkupAmount.toNumber(),
                totalTaxAmount: passenger.totalTaxAmount.toNumber(),
                totalPriceAmount: passenger.totalPriceAmount.toNumber(),
              },
              assets: [],
            }))
          ),
        }
      : null;

    const residencyOrder: OrderDto["residency"] = order.residency
      ? {
          id: order.residency.id,
          priceUnit: order.residency.priceUnit,
          status: order.residency.status as ResidencyOrderStatus,
          totalBaseAmount: order.residency.totalBaseAmount.toNumber(),
          totalMarkupAmount: order.residency.totalMarkupAmount.toNumber(),
          totalTaxAmount: order.residency.totalTaxAmount.toNumber(),
          totalPriceAmount: order.residency.totalPriceAmount.toNumber(),

          country: {
            countryCode: order.residency.residencyCountry.countryCode,
            countryEnName: order.residency.residencyCountry.countryEnName,
            countryFaName: order.residency.residencyCountry.countryFaName,
            types: order.residency.residencyCountry.type.map((type) => ({ desc: type.description, name: type.name, note: type.note })),
          },
        }
      : null;

    let response: OrderDto = {
      id: order.id,
      orderNumber: order.orderNumber,
      product: order.product as ProductTypes,
      status: order.status as OrderStatus ,
      totalBaseAmount: order.totalBaseAmount.toNumber(),
      totalTaxAmount: order.totalTaxAmount.toNumber(),
      totalMarkupAmount: order.totalMarkupAmount.toNumber(),
      totalPriceAmount: order.totalPriceAmount.toNumber(),
      createdAt: order.createdAt.toISOString(),
      visa: visaOrder,
      residency: residencyOrder,
    };

    return response;
  }

  async getOrdersByUser(query: GetOrderByUserQueryDto, userId: string): Promise<GetOrderByUserResponseDto> {
    const page = parseInt(query.page);
    const perPage = parseInt(query.perPage);
    const orderNumber = query.orderNumber ? parseInt(query.orderNumber) : undefined;
    const where: Prisma.OrdersWhereInput = {
      orderNumber: orderNumber,
      product: query.productType ?? undefined,
      customer: {
        id: userId,
      },
      createdAt: {
        gt: query.fromDate ?? undefined,
        lt: query.toDate ?? undefined,
      },
    };

    const orders = await this.prisma.orders.findMany({
      where,
      take: perPage,
      skip: (page - 1) * perPage,
      include: {
        visa: {
          include: {
            savePassengers: {
              include: {
                group: true,
                assets: true,
              },
            },
            visaCountry: {
              include: {
                assets: true,
                requiredAssetTypes: {
                  select: {
                    desc: true,
                    type: true,
                  },
                },
              },
            },
          },
        },
        residency: {
          include: {
            residencyCountry: {
              include: {
                type: true,
              },
            },
          },
        },
      },
    });

    const totalOrdersCount = await this.prisma.orders.count({ where });

    const totalPages = Math.ceil(totalOrdersCount / perPage);
    let response: GetOrderByUserResponseDto = {
      orders: await Promise.all(
        orders.map(async (order) => {
          const visaOrder: OrderDto["visa"] = order.visa
            ? {
                country: {
                  requireOrderAssetTypes: order.visa.visaCountry.requiredAssetTypes,
                  countryCode: order.visa.visaCountry.countryCode,
                  countryEnName: order.visa.visaCountry.countryEnName,
                  countryFaName: order.visa.visaCountry.countryFaName,
                  isValidForDays: order.visa.visaCountry.isValidForDays,
                  processTime: order.visa.visaCountry.processTime,
                  types: order.visa.visaCountry.types as VisaTypes[],
                  assets: [],
                },
                type: order.visa.visaType as VisaTypes,
                durationInDays: order.visa.durationInDays,
                totalBaseAmount: order.visa.totalBaseAmount.toNumber(),
                totalMarkupAmount: order.visa.totalMarkupAmount.toNumber(),
                totalTaxAmount: order.visa.totalTaxAmount.toNumber(),
                totalPriceAmount: order.visa.totalPriceAmount.toNumber(),
                priceUnit: order.visa.priceUnit,
                status: order.visa.status as VisaOrderStatus,
                passengers: await Promise.all(
                  order.visa.savePassengers.map(async (passenger) => ({
                    id: passenger.id,
                    firstName: passenger.firstName,
                    lastName: passenger.lastName,
                    phone: passenger.phone,
                    email: passenger.email,
                    gender: passenger.gender as Gender,
                    birthdate: passenger.birthdate ? passenger.birthdate.toISOString() : null,
                    group: {
                      startAge: passenger.group.startAge,
                      endAge: passenger.group.endAge,
                      title: passenger.group.title,
                    },
                    passportNumber: passenger.passportNumber,
                    passportExpireDate: passenger.passportExpireDate ? passenger.passportExpireDate.toISOString() : null,
                    price: {
                      totalBaseAmount: passenger.totalBaseAmount.toNumber(),
                      totalMarkupAmount: passenger.totalMarkupAmount.toNumber(),
                      totalTaxAmount: passenger.totalTaxAmount.toNumber(),
                      totalPriceAmount: passenger.totalPriceAmount.toNumber(),
                    },
                    assets: [],
                  }))
                ),
              }
            : null;

          const residencyOrder: OrderDto["residency"] = order.residency
            ? {
                id: order.residency.id,
                priceUnit: order.residency.priceUnit,
                status: order.residency.status as ResidencyOrderStatus,
                totalBaseAmount: order.residency.totalBaseAmount.toNumber(),
                totalMarkupAmount: order.residency.totalMarkupAmount.toNumber(),
                totalTaxAmount: order.residency.totalTaxAmount.toNumber(),
                totalPriceAmount: order.residency.totalPriceAmount.toNumber(),
                country: {
                  countryCode: order.residency.residencyCountry.countryCode,
                  countryEnName: order.residency.residencyCountry.countryEnName,
                  countryFaName: order.residency.residencyCountry.countryFaName,
                  types: order.residency.residencyCountry.type.map((type) => ({
                    desc: type.description,
                    name: type.name,
                    note: type.note,
                  })),
                },
              }
            : null;

          return {
            id: order.id,
            orderNumber: order.orderNumber,
            product: order.product as ProductTypes,
            totalBaseAmount: order.totalBaseAmount.toNumber(),
            totalTaxAmount: order.totalTaxAmount.toNumber(),
            totalMarkupAmount: order.totalMarkupAmount.toNumber(),
            totalPriceAmount: order.totalPriceAmount.toNumber(),
            createdAt: order.createdAt.toISOString(),
            status: order.status as OrderStatus,
            visa: visaOrder,
            residency: residencyOrder,
          };
        })
      ),

      pagination: {
        totalItems: totalOrdersCount,
        totalPages: totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
        page: page,
        perPage: perPage,
      },
    };

    return response;
  }
}
