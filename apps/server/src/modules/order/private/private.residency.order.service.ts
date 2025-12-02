import { Injectable, UseGuards } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { AssetsServices } from "src/modules/assets/assets.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { ApiBearerAuth } from "@nestjs/swagger";

import {
  PrivateGetResidencyOrderListQueries,
  PrivateGetResidencyOrderListResponse,
  PrivateResidencyOrder,
} from "../dto/order/private.residency.order.list.dto";
import { MessageDto, MessageStatus } from "src/common/dto/common.dto";
import { PrivateResidencyOrderUpdateStatusDto } from "../dto/order/update.residency.order.status.dto";
import { Prisma, ProductTypes } from "@sana/db/generated/prisma";
import { OrderStatus, ResidencyOrderStatus } from "src/enums/enums";

@Injectable()
@ApiBearerAuth("access-token")
@UseGuards(JwtAuthGuard)
export class PrivateResidencyOrderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly assets: AssetsServices
  ) {}

  async residencyOrderList(queries: PrivateGetResidencyOrderListQueries): Promise<PrivateGetResidencyOrderListResponse> {
    const where: Prisma.OrdersWhereInput = {
      orderNumber: queries.orderNumber ? parseInt(queries.orderNumber) : undefined,
      createdAt: {
        lt: queries.from,
        gt: queries.to,
      },
      residency: {
        status: queries.status,
        residencyCountryId: queries.countryId,
      },
      product: "RESIDENCY",
    };

    const page = parseInt(queries.page);
    const perPage = parseInt(queries.perPage);
    const totalOrders = await this.prisma.orders.count({ where });
    const totalPages = Math.ceil(totalOrders / perPage);

    const orders = await this.prisma.orders.findMany({
      where,
      include: {
        customer: true,

        residency: {
          include: {
            residencyCountry: {
              include: { type: true },
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

    console.log(orders);

    const ordersToDto: PrivateResidencyOrder[] = orders.map((order) => ({
      createdAt: order.createdAt.toISOString(),
      customer: {
        firstName: order.customer.firstName,
        lastName: order.customer.lastName,
        id: order.customerId,
        nationalCode: order.customer.nationalCode,
        phone: order.customer.phoneNumber,
      },
      id: order.id,
      orderNumber: order.orderNumber,
      product: order.product as ProductTypes,
      status: order.status as OrderStatus,
      totalBaseAmount: order.totalBaseAmount.toNumber(),
      totalMarkupAmount: order.totalMarkupAmount.toNumber(),
      totalPriceAmount: order.totalPriceAmount.toNumber(),
      totalTaxAmount: order.totalTaxAmount.toNumber(),
      residency: {
        id: order.residency.id,
        priceUnit: order.residency.priceUnit,
        status: order.residency.status as ResidencyOrderStatus,
        totalBaseAmount: order.residency.totalBaseAmount.toNumber(),
        totalMarkupAmount: order.residency.totalMarkupAmount.toNumber(),
        totalPriceAmount: order.residency.totalPriceAmount.toNumber(),
        totalTaxAmount: order.residency.totalTaxAmount.toNumber(),
        country: {
          countryFaName: order.residency.residencyCountry.countryFaName,
          countryEnName: order.residency.residencyCountry.countryEnName,
          countryCode: order.residency.residencyCountry.countryCode,
          id: order.residency.residencyCountryId,
          types: order.residency.residencyCountry.type,
        },
      },
    }));

    const response: PrivateGetResidencyOrderListResponse = {
      orders: ordersToDto,
      pagination: {
        totalItems: totalOrders,
        totalPages: totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
        page: page,
        perPage: perPage,
      },
    };

    return response;
  }

  async residencyOrderDetail(orderId: string): Promise<PrivateResidencyOrder> {
    const order = await this.prisma.orders.findUnique({
      where: { id: orderId },
      include: { residency: { include: { residencyCountry: { include: { type: true } } } }, customer: true },
    });

    const response: PrivateResidencyOrder = {
      createdAt: order.createdAt.toISOString(),
      customer: {
        firstName: order.customer.firstName,
        lastName: order.customer.lastName,
        id: order.customerId,
        nationalCode: order.customer.nationalCode,
        phone: order.customer.phoneNumber,
      },
      id: order.id,
      orderNumber: order.orderNumber,
      product: order.product as ProductTypes,
      status: order.status as OrderStatus,
      totalBaseAmount: order.totalBaseAmount.toNumber(),
      totalMarkupAmount: order.totalMarkupAmount.toNumber(),
      totalPriceAmount: order.totalPriceAmount.toNumber(),
      totalTaxAmount: order.totalTaxAmount.toNumber(),
      residency: {
        id: order.residency.id,
        priceUnit: order.residency.priceUnit,
        status: order.residency.status as ResidencyOrderStatus,
        totalBaseAmount: order.residency.totalBaseAmount.toNumber(),
        totalMarkupAmount: order.residency.totalMarkupAmount.toNumber(),
        totalPriceAmount: order.residency.totalPriceAmount.toNumber(),
        totalTaxAmount: order.residency.totalTaxAmount.toNumber(),
        country: {
          countryFaName: order.residency.residencyCountry.countryFaName,
          countryEnName: order.residency.residencyCountry.countryEnName,
          countryCode: order.residency.residencyCountry.countryCode,
          id: order.residency.residencyCountryId,
          types: order.residency.residencyCountry.type,
        },
      },
    };

    return response;
  }

  async changeResidencyOrderStatus(dto: PrivateResidencyOrderUpdateStatusDto): Promise<MessageDto> {
    const updateStatus = await this.prisma.residencyOrder.update({
      where: { orderId: dto.orderId },
      data: {
        status: dto.status as ResidencyOrderStatus,
      },
    });

    return {
      message: "residency order successfully updated !",
      status: MessageStatus.SUCCESS,
    };
  }
}
