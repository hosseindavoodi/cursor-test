import { Injectable, UseGuards } from "@nestjs/common";
import {
  PrivateGetVisaOrderListQueries,
  PrivateGetVisaOrderListResponse,
  PrivateVisaOrder,
} from "../dto/order/private.visa.order.list.dto";
import { Orders, Prisma, ProductTypes, VisaTypes } from "@sana/db/generated/prisma";
import { PrismaService } from "src/services/prisma.service";
import { AssetsServices } from "src/modules/assets/assets.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { ApiBearerAuth } from "@nestjs/swagger";
import { MessageDto, MessageStatus } from "src/common/dto/common.dto";
import { OrderStatus, VisaOrderStatus } from "src/enums/enums";
import { PrivateVisaOrderUpdateStatusDto } from "../dto/order/update.visa.order.status.dto";

@Injectable()
@ApiBearerAuth("access-token")
@UseGuards(JwtAuthGuard)
export class PrivateVisaOrderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly assets: AssetsServices
  ) {}

  async visaOrderList(queries: PrivateGetVisaOrderListQueries): Promise<PrivateGetVisaOrderListResponse> {
    const where: Prisma.OrdersWhereInput = {
      orderNumber: queries.orderNumber ? parseInt(queries.orderNumber) : undefined,
      visa: {
        visaCountryId: queries.countryId,
        status: queries.status as VisaOrderStatus,
      },
      product: "VISA",
      createdAt: {
        gt: queries.from,
        lt: queries.to,
      },
    };

    const page = parseInt(queries.page);
    const perPage = parseInt(queries.perPage);
    const totalOrdersCount = await this.prisma.orders.count({ where });
    const totalPages = Math.ceil(totalOrdersCount / perPage);

    const ordersData = await this.prisma.orders.findMany({
      where,
      include: {
        customer: true,
        visa: {
          include: {
            visaCountry: {
              include: {
                requiredAssetTypes: true,
              },
            },
            savePassengers: {
              include: {
                assets: true,
                group: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: (page - 1) * perPage,
      take: perPage,
    });

    const orders: PrivateGetVisaOrderListResponse["orders"] = await Promise.all(
      ordersData.map(async (order) => {
        return {
          id: order.id,
          orderNumber: order.orderNumber,
          totalBaseAmount: order.totalBaseAmount.toNumber(),
          totalMarkupAmount: order.totalMarkupAmount.toNumber(),
          totalPriceAmount: order.totalPriceAmount.toNumber(),
          totalTaxAmount: order.totalTaxAmount.toNumber(),
          product: order.product,
          status: order.status as OrderStatus,
          createdAt: order.createdAt.toISOString(),
          visa: {
            totalBaseAmount: order.visa.totalBaseAmount.toNumber(),
            totalMarkupAmount: order.visa.totalMarkupAmount.toNumber(),
            totalPriceAmount: order.visa.totalPriceAmount.toNumber(),
            totalTaxAmount: order.visa.totalTaxAmount.toNumber(),
            country: {
              countryCode: order.visa.visaCountry.countryCode,
              countryEnName: order.visa.visaCountry.countryEnName,
              countryFaName: order.visa.visaCountry.countryEnName,
              immediatePayment: order.visa.visaCountry.immediatePayment,
              processTime: order.visa.visaCountry.processTime,
              requireAssetsTypes: order.visa.visaCountry.requiredAssetTypes,
              isValidForDays: order.visa.visaCountry.isValidForDays,
              assets: await this.assets.retrieveAssets({ assets: [{ visaCountryId: order.visa.visaCountryId }] }),
            },
            durationInDays: order.visa.durationInDays,
            id: order.visa.id,
            type: order.visa.visaType as VisaTypes,
            priceUnit: order.visa.priceUnit,
            status: order.visa.status as VisaOrderStatus,

            passengers: await Promise.all(
              order.visa.savePassengers.map(async (passenger) => ({
                id: passenger.id,
                firstName: passenger.firstName,
                lastName: passenger.lastName,
                phone: passenger.phone,
                email: passenger.email,
                gender: passenger.gender,
                birthdate: passenger.birthdate ? passenger.birthdate.toISOString() : null,
                passportNumber: passenger.passportNumber,
                passportExpireDate: passenger.passportExpireDate ? passenger.passportExpireDate.toISOString() : null,
                nationalityCode: passenger.nationalityCode,
                group: {
                  id: passenger.group.id,
                  startAge: passenger.group.startAge,
                  endAge: passenger.group.endAge,
                  title: passenger.group.title,
                },
                prices: {
                  totalBaseAmount: passenger.totalBaseAmount.toNumber(),
                  totalTaxAmount: passenger.totalTaxAmount.toNumber(),
                  totalMarkupAmount: passenger.totalMarkupAmount.toNumber(),
                  totalPriceAmount: passenger.totalPriceAmount.toNumber(),
                },
                assets: await this.assets.retrieveAssets({ assets: [{ visaPassengerId: passenger.id }] }),
              }))
            ),
          },
          customer: {
            firstName: order.customer.firstName,
            lastName: order.customer.lastName,
            id: order.customerId,
            nationalCode: order.customer.nationalCode,
            phone: order.customer.phoneNumber,
          },
        };
      })
    );

    let response: PrivateGetVisaOrderListResponse = {
      orders: orders,
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

  async visaOrderDetail(orderId: string): Promise<PrivateVisaOrder> {
    console.log(orderId);
    const where: Prisma.OrdersWhereUniqueInput = {
      id: orderId,
    };

    const order = await this.prisma.orders.findUnique({
      where,
      include: {
        customer: true,
        visa: {
          include: {
            savePassengers: {
              include: {
                assets: true,
                group: true,
              },
            },
            visaCountry: {
              include: {
                requiredAssetTypes: true,
                assets: true,
              },
            },
          },
        },
      },
    });

    let response: PrivateVisaOrder = {
      id: order.id,
      customer: {
        firstName: order.customer.firstName,
        lastName: order.customer.lastName,
        id: order.customerId,
        phone: order.customer.phoneNumber,
        nationalCode: order.customer.nationalCode,
      },
      createdAt: order.createdAt.toISOString(),
      visa: {
        country: {
          countryEnName: order.visa.visaCountry.countryEnName,
          countryFaName: order.visa.visaCountry.countryFaName,
          countryCode: order.visa.visaCountry.countryCode,
          immediatePayment: order.visa.visaCountry.immediatePayment,
          isValidForDays: order.visa.visaCountry.isValidForDays,
          processTime: order.visa.visaCountry.processTime,
          requireAssetsTypes: order.visa.visaCountry.requiredAssetTypes,
          assets: await this.assets.retrieveAssets({ assets: [{ visaCountryId: order.visa.visaCountryId }] }),
        },
        durationInDays: order.visa.durationInDays,
        id: order.visa.id,
        status: order.visa.status as VisaOrderStatus,
        priceUnit: order.visa.priceUnit,
        type: order.visa.visaType,
        totalBaseAmount: order.visa.totalBaseAmount.toNumber(),
        totalTaxAmount: order.visa.totalTaxAmount.toNumber(),
        totalMarkupAmount: order.visa.totalMarkupAmount.toNumber(),
        totalPriceAmount: order.visa.totalPriceAmount.toNumber(),
        passengers: await Promise.all(
          order.visa.savePassengers.map(async (p) => ({
            id: p.id,
            firstName: p.firstName,
            lastName: p.lastName,
            prices: {
              totalBaseAmount: p.totalBaseAmount.toNumber(),
              totalMarkupAmount: p.totalMarkupAmount.toNumber(),
              totalPriceAmount: p.totalPriceAmount.toNumber(),
              totalTaxAmount: p.totalTaxAmount.toNumber(),
            },
            birthdate: p.birthdate ? p.birthdate.toISOString() : null,
            email: p.email,
            gender: p.gender,
            nationalityCode: p.nationalityCode,
            passportExpireDate: p.passportExpireDate ? p.passportExpireDate.toISOString() : null,
            assets: await this.assets.retrieveAssets({ assets: [{ visaPassengerId: p.id }] }),
            passportNumber: p.passportNumber,
            phone: p.phone,
            group: {
              endAge: p.group.endAge,
              startAge: p.group.startAge,
              id: p.group.id,
              title: p.group.title,
            },
          }))
        ),
      },
      orderNumber: order.orderNumber,
      product: order.product,
      status: order.status as OrderStatus,
      totalBaseAmount: order.totalBaseAmount.toNumber(),
      totalTaxAmount: order.totalTaxAmount.toNumber(),
      totalMarkupAmount: order.totalMarkupAmount.toNumber(),
      totalPriceAmount: order.totalPriceAmount.toNumber(),
    };

    return response;
  }

  async changeVisaOrderStatus(dto: PrivateVisaOrderUpdateStatusDto): Promise<MessageDto> {
    const updateVisaOrderStatus = await this.prisma.visaOrder.update({
      where: {
        orderId: dto.orderId,
      },
      data: {
        status: dto.status as VisaOrderStatus,
      },
    });

    return {
      message: "visa order status successfuly updated !",
      status: MessageStatus.SUCCESS,
    };
  }
}
