import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
// import { InitiateOrderPaymentRequestDto } from "./dto/create.payment.dto";
import { ProductTypes } from "../order/interfaces/order.interface";
import { User } from "src/users/interfaces/user.interface";
import { PaymentService } from "./payment.service";
import { Payment, PaymentMethod } from "@sana/db/generated/prisma";
import { PaymentResponseDto } from "./dto/create.payment.dto";
import { FlightOrderService } from "../order/order.flight.service";

export type VisaOrderingPayProcessArgs = {
  wallet: boolean;
  orderId: string;
};

@Injectable()
export class PaymentProccesor {
  constructor(
    readonly prisma: PrismaService,
    readonly payment: PaymentService,
    readonly flightOrders: FlightOrderService
  ) { }

  // async processOrderPayment(dto: InitiateOrderPaymentRequestDto, productType: ProductTypes) {
  //     switch (productType) {
  //         case ProductTypes.VISA: return await this.processVisaPayment()
  //         case ProductTypes.RESIDENCY: return this.processResidencyPayment()
  //         case ProductTypes.GROUP_TOUR: return this.processGroupTourPayment()
  //         case ProductTypes.INDIVIDUAL_TOUR: return this.processIndividualTourPayment()
  //         case ProductTypes.HOTEL: return this.processHotelPayment()
  //         case ProductTypes.DOMESTIC_FLIGHT: return this.processDomesticFlightPayment()
  //         case ProductTypes.INTERNATIONAL_FLIGHT: return this.processInternationalFlightPayment()
  //         default:
  //             break;
  //     }
  // }

  async processVisaPayment(args: VisaOrderingPayProcessArgs, user: User): Promise<PaymentResponseDto> {
    const order = await this.prisma.orders.findUnique({ where: { id: args.orderId } });

    const totalOrderAmount = order.totalPriceAmount;

    const method: PaymentMethod = args.wallet ? PaymentMethod.WALLET : PaymentMethod.GATEWAY;

    const payment = await this.payment.createPayment({
      idempotencyKey: `${user.id}-${args.orderId}`,
      legs: [{ amountRequested: totalOrderAmount.toNumber(), currency: "IRR" }],
      type: "ORDER_PAYMENT",
      userId: user.id,
      orderId: args.orderId,
    });
    console.log(process.env.VISA_CALLBACK_URL);

    const payPayment = await this.payment.payPayment(payment.id, method, { returnUrl: process.env.VISA_CALLBACK_URL, gatewayCode: "ikc" });

    return payPayment;
  }

  async processFlightPayment(
    args: { provider: string; bookRequest: any; wallet: boolean; product: "DOMESTIC_FLIGHT" | "INTERNATIONAL_FLIGHT" },
    user: User,
  ): Promise<PaymentResponseDto> {
    const { orderId } = await this.flightOrders.createAndBook({
      userId: user.id,
      provider: args.provider,
      bookRequest: args.bookRequest,
      product: args.product,
    });

    const order = await this.prisma.orders.findUnique({ where: { id: orderId } });
    const totalOrderAmount = order.totalPriceAmount;

    const method: PaymentMethod = args.wallet ? PaymentMethod.WALLET : PaymentMethod.GATEWAY;

    const payment = await this.payment.createPayment({
      idempotencyKey: `${user.id}-${orderId}`,
      legs: [{ amountRequested: totalOrderAmount.toNumber(), currency: "IRR" }],
      type: "ORDER_PAYMENT",
      userId: user.id,
      orderId,
    });

    const returnUrl = process.env.FLIGHT_CALLBACK_URL || process.env.VISA_CALLBACK_URL;
    const payPayment = await this.payment.payPayment(payment.id, method, { returnUrl, gatewayCode: "ikc" });
    return payPayment;
  }

  // Backward-compatible wrappers (delegate to unified processor)
  async processInternationalFlightPayment(args: { provider: string; bookRequest: any; wallet: boolean }, user: User): Promise<PaymentResponseDto> {
    return this.processFlightPayment({ ...args, product: "INTERNATIONAL_FLIGHT" }, user);
  }

  async processDomesticFlightPayment(args: { provider: string; bookRequest: any; wallet: boolean }, user: User): Promise<PaymentResponseDto> {
    return this.processFlightPayment({ ...args, product: "DOMESTIC_FLIGHT" }, user);
  }

  async processHotelPayment() { }

  async processIndividualTourPayment() { }

  async processGroupTourPayment() { }

  async processResidencyPayment() { }
}
